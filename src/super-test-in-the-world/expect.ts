 const expect = <T>(actual?: T) => {
  return {
    toBeVisible: async () => {
      return actual !== undefined
    },
    toEqual: (expected?: T): boolean => {
      const isPass =  actual === expected

      if (isPass) {
        console.log("✅ PASSED")
      } else {
        console.log(`❌ FAILED :: Expected: ${expected} -> Received: ${actual}`)
      }

      return isPass
    }
  }
}


export { expect }