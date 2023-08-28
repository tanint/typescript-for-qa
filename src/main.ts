import { expect, test } from './super-test-in-the-world'

import { cal } from './lib/calculator'

test.describe("Calculator", () => {
  test('Verify "Add" function', () => {
    const result = cal(5).add(5).value()
    expect(result).toEqual(10)
  })

  test('Verify "subtract" function', async () => {
    const result = cal(5).subtract(5).value()
    expect(result).toEqual(0)
  })

  test('Verify "multiply" function', async () => {
    const result = cal(5).multiply(5).value()
    expect(result).toEqual(25)
  })

  test('Verify "divide" function', () => {
    const result = cal(10).divide(2).value()
    expect(result).toEqual(5)
  })

  test('Can chain calculating', () => {
    const result = cal(10).subtract(2).add(8).multiply(2).divide(8).value()
    expect(result).toEqual(4)
  })
})
