import { Car } from './../models/car.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarserService {
  cars: Array<Car> = 
  [
    {id: 0, brandName: 'Ford', modelName: 'Focus', priceInRub: 700000},
    {id: 1, brandName: 'BMW', modelName: 'M5', priceInRub: 8000000},
    {id: 2, brandName: 'Mazda', modelName: 'CX5', priceInRub: 2000000},
  ];

  constructor() { }

  getCars()
  {
    return this.cars;
  }

  getCar(id: number)
  {
    return this.cars.find((el) => el.id === id);
  }

  addCar(car: Car)
  {
    car.id = this.getCars().length;
    this.cars.push(car);
  }
}
