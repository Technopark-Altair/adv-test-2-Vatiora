import { Car } from './../../models/car.module';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  car: Car;
  @Output() addNewCar = new EventEmitter<Car>();
  constructor() { }

  ngOnInit(): void 
  {
    this.car = new Car();
  }

  AddCarInArray()
  {
    this.addNewCar.emit(this.car);
    this.car = new Car();
  }
}
