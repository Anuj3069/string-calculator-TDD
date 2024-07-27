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

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split('\n');
      delimiter = new RegExp(parts[0].slice(2));
      numbers = parts[1];
    }

    const numberArray = numbers.split(delimiter).map(Number);

    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(',')}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}
