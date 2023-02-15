import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegComponent } from './user-reg/user-reg.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'user_reg',component:UserRegComponent},
{path:'user_profile',component:UserProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
