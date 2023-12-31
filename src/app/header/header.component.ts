import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { gsap } from 'gsap';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Correct plural form
})
export class HeaderComponent implements AfterViewInit {
  clicked = false;
  logo: any;
  ngOnInit(): void {
    this.logo = document.querySelectorAll('#logo path');
    for (let index = 0; index < this.logo.length; index++) {
      console.log(`Letter ${index} is ${this.logo[index].getTotalLength()}`);
    }
    if (localStorage.getItem('user') != null) {
      this.users.currentUser = this.users.users.find(
        (user: { username: any; password: any }) =>
          user.username ===
            JSON.parse(localStorage.getItem('user')!).username &&
          user.password === JSON.parse(localStorage.getItem('user')!).password
      );
    }
  }
  @ViewChild('nav', { static: true }) nav!: ElementRef;
  constructor(public users: UserService) {}
  currentuser = this.users.currentUser;
  id = this.users.currentUser.id;
  ngAfterViewInit() {
    gsap.from(this.nav.nativeElement, {
      duration: 0.5,
      y: '-100%',
      opacity: 0,
      ease: 'ease-in',
    });

    gsap.to('#logo path', {
      duration: 1,
      delay: 2,
      fill: '#525252',
      stroke: '#525252',
      stagger: 0.1,
      ease: 'power3.out',
    });
    gsap.from('.links', {
      duration: 1,
      delay: 0.5,
      stagger: 0.5,
      opacity: 0,
      x: '60%',
      ease: 'ease-in',
    });
    gsap.from('#search', {
      duration: 1,
      x: '70%',
      opacity: 0,
      ease: 'ease-in',
      delay: 1,
    });
    gsap.from('#login', {
      duration: 1,
      x: '100%',
      opacity: 0,
      ease: 'ease-in',
      delay: 1.5,
    });
  }
}
