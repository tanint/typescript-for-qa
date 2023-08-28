export const cal = (initialValue: number) => {
  let result = initialValue

  const add = (value: number) => {
    result = result + value
    return cal(result)
  }

  const subtract = (value: number) => {
    result = result - value
    return cal(result)
  }

  const multiply = (value: number) => {
    result = result * value
    return cal(result)
  }

  const divide = (value: number) => {
    result = result / value
    return cal(result)
  }

  const value = () => {
    return result
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    value
  }
};
