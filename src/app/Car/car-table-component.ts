// car-table.component.ts
import { Component } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table-component.html',
})
export class CarTableComponent {
  cars: Car[] = [
    { id: 0, marque: 'Toyota', modele: 'Camry' },
    { id: 1, marque: 'Honda', modele: 'Accord' },
    { id: 2, marque: 'Toyota', modele: 'Suppra' },
    { id: 3, marque: 'Toyota', modele: 'GR86' },
  ];

  selectedCar: Car = this.cars[0];

  showDetails(car: Car): void {
    this.selectedCar = car;
  }
}
