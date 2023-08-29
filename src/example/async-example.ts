import { delay } from "../utils";

const asyncExample = () => {
  console.time("Waiting Time");
  delay(3000)
  delay(2000)
  delay(1000)
  console.timeEnd("Waiting Time");
}

const handleAsync = async () => {
  console.time("Waiting Time");
  await delay(3000)
  await delay(2000)
  await delay(1000)
  console.timeEnd("Waiting Time");
}

// handleAsync()