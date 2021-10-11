export const sleep = (sec: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 20000);
  });
};
