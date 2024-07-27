import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    const delimiter = /,|\n/;
    const numberArray = numbers.split(delimiter).map(Number);
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
