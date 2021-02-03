import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = 
[
  {path: "cars", component: CarsComponent},
  {path: "car/:id", component: CarComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }