import { add } from './index';

describe('SUM module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('adds 10 + 77 to equal 87', () => {
    expect(add(10, 77)).toBe(87);
  });

  test('adds 10 + (-5) to equal 5', () => {
    expect(add(10, -5)).toBe(5);
  });

  test('adds -5 + 10 to equal 5', () => {
    expect(add(-5, 10)).toBe(5);
  });
});
