import { expect, test } from './super-test-in-the-world'

import { cal } from './lib/calculator'
import { reportStore } from './super-test-in-the-world/report'

test.describe("Calculator", () => {
  test('Verify "Add" function', () => {
    const result = cal(5).add(5).value()
    expect(result).toEqual(10)
  })

  test('Verify "subtract" function', () => {
    const result = cal(5).subtract(5).value()
    expect(result).toEqual(0)
  })

  test('Verify "multiply" function', () => {
    const result = cal(5).multiply(5).value()
    expect(result).toEqual(234234)
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

test.describe("Calculator2", () => {
  test('Verify "Add" function', () => {
    const result = cal(5).add(5).value()
    expect(result).toEqual(10)
  })

  test('Verify "subtract" function', () => {
    const result = cal(5).subtract(5).value()
    expect(result).toEqual(0)
  })
})

reportStore.printReport()
