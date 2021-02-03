import { Car } from './../../models/car.module';
import { CarserService } from './../../services/carser.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Array<Car>;
  constructor(private carsService: CarserService) { }

  ngOnInit(): void 
  {
    this.cars = this.carsService.getCars();
  }

  addingNewCar(newCar: Car)
  {
    this.carsService.addCar(newCar);
  }

}
