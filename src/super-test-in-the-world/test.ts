import { ExpectError } from './expect'
import { reportStore } from './report'

let defaultFixtures = {
  page: {
    getByRole: (role: string, options: { name: string}) => {
      if (role === 'button') {
        return document.querySelector(`button`)
      }

      return
    }
  }
}

function test (title: string, callbackFn: (fixtures: typeof defaultFixtures) => void): void {
  try {
    callbackFn(defaultFixtures)
    reportStore.setSpec({
      title,
      ok: true
    })
  } catch(err) {
    if (err instanceof ExpectError) {
      reportStore.setSpec({
        title,
        ok: false,
        error: {
          expected: err.expected,
          received: err.received,
        }
      })
    }
  }
}

test.describe = (title: string, callbackFn: () => void): void => {
  reportStore.setSuite(title)
  callbackFn()
  reportStore.increaseSuiteIndex()
}

export { test }


