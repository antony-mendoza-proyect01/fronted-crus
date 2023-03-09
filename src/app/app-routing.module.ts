import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DriverComponent} from "./components/driver/driver.component";
import {AddEditDriverComponent} from "./components/add-edit-driver/add-edit-driver.component";

const routes: Routes = [
  {path:'', component:DriverComponent},
  {path:'add', component:AddEditDriverComponent},
  {path:'edit/:id', component:AddEditDriverComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
