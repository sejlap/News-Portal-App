import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NewsComponent} from './news/news.component';
import {AdminsComponent} from './admins/admins.component';


const routes: Routes = [
{path:'',component:NewsComponent},
{path:'login',component:AdminsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
