import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { ProfileComponent } from './info/profile/profile.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PhoneComponent } from './phone/phone.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'store', component: StoreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'registre', component: RegistreComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'phone/:id', component: PhoneComponent },
  { path: 'addphone', component: AddproductComponent },
  { path: '**', component: NotfoundComponent },
];
