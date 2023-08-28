import { expect, test } from './super-test-in-the-world'

import { createCalculator } from './lib/calculator'

test.describe("Calculator", () => {
  test('Verify "Add" function', () => {
    const cal = createCalculator()
    
    expect(cal.add(5, 5)).toEqual(10)
  })

  test('Verify "subtract" function', async () => {
    const cal = createCalculator()

    expect(cal.subtract(5, 5)).toEqual(0)
  })

  test('Verify "multiply" function', async () => {
    const cal = createCalculator()

    expect(cal.multiply(5, 1)).toEqual(25)
  })

  test('Verify "divide" function', async () => {
    const cal = createCalculator()

    expect(cal.divide(10, 2)).toEqual(5)
  })
})
