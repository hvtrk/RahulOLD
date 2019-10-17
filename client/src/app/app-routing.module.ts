import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'home' , component: LandingPageComponent},
  { path: 'login', component: LoginComponent},
  { path: '' , redirectTo: 'home', pathMatch: 'full' },
  { path: '**' , redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
