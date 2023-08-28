let defaultFixtures = {
  page: {
    getByRole: async (role: string, options: { name: string}) => {
      if (role === 'button') {
        console.log("🚀 ~ options:", options)
        return document.querySelector(`button`)
      }

      return
    }
  }
}

function test (title: string, callbackFn: (fixtures: typeof defaultFixtures) => void): void {
  console.log(title)
  callbackFn(defaultFixtures)
  console.log("----------------------------------")
}

test.describe = (title: string, callbackFn: () => void): void => {
  console.log('=================================')
  console.log(title)
  console.log('=================================')
  
  callbackFn()
}

export { test }


