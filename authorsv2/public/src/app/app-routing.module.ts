import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [
  {path:'', pathMatch:'full', component:HomeComponent},
  {path:'new', component:NewComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'show/:id', component:ShowComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
