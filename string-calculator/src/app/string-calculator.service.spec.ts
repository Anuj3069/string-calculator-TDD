import { TestBed } from '@angular/core/testing';

import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should return 0 for an empty string', () => {
    expect(service.add("")).toBe(0);
  });

  it('should return the number itself when a single number is provided', () => {
    expect(service.add("1")).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    expect(service.add("1,2")).toBe(3);
  });
});
