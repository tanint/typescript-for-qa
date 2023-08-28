type SpecError = {
  expected: unknown
  received: unknown
}

type Spec = {
  title: string
  ok: boolean
  error?: SpecError
}

type Suite = {
  title: string
  specs: Spec[]
}

const createReport = () => {
  let suiteIndex = 0
  let suites: Suite[] = []

  const setSuite = (title: string) => {
    const initSuite = {
      title: title,
      specs: []
    }

    suites[suiteIndex] = initSuite
  }

  const setSpec = ({ title, ok, error } : { title: string, ok: boolean, error?: SpecError }) => {
    const spec = {
      title,
      ok,
      error
    }

    suites[suiteIndex].specs.push(spec)
  }

  const increaseSuiteIndex = () => {
    suiteIndex = suiteIndex + 1
  }

  const getReport = () => {
    return suites
  }

  const printReport = () => {
    for (const suite of suites) {
      console.log('\n\n===============================')
      console.log(suite.title)
      console.log('===============================')

      for (const spec of suite.specs) {
        console.log(spec.title)
        if (spec.ok) {
          console.log("✅ PASSED")
        } else {
          console.log(`❌ FAILED :: Expected: ${spec.error?.expected} -> Received: ${spec.error?.received}`)
        }
        console.log('-------------------------------')
      }
    }
  }

  return {
    setSuite,
    setSpec,
    increaseSuiteIndex,
    getReport,
    printReport
  }
}


const reportStore = createReport()



export { reportStore }