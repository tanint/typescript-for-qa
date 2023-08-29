function delay(ms: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('ms:', ms)
      resolve(`${ms} is resolved`);
    }, ms);
  });
}

export { delay }