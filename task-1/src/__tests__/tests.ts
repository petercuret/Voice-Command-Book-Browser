import { sum, addN } from '../index';

describe('Test sum function', () => {
  it('Sum works', () => {
    expect(sum(1, 2)).toBe(3);
  })
  it('Sum works with negative numbers', () => {
    expect(sum(0, -3)).toBe(-3);
  })
});

describe('Test addN function', () => {
  it('addN creates a reusable sum function', () => {
    const addEight = addN(8);
    expect(addEight(7)).toBe(15);
    expect(addEight(100)).toBe(108);

  })
})