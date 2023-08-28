export class ExpectError extends Error {
  expected: unknown
  received: unknown

  constructor(opts: { expected: unknown; received: unknown; message?: string }) {
    const message = opts.message ?? "Error"

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore https://github.com/tc39/proposal-error-cause
    super(message)

    this.expected = opts.expected
    this.received = opts.received
  }
}

const expect = <T>(actual?: T) => {
  return {
    toBeVisible: async () => {
      const isPass = actual !== undefined

      if (!isPass) throw new ExpectError({
        expected: undefined,
        received: actual
      })

      return isPass
    },
    toEqual: (expected?: T): boolean => {
      const isPass =  actual === expected

      if (!isPass) throw new ExpectError({
        expected: expected,
        received: actual
      })

      return isPass
    }
  }
}


export { expect }