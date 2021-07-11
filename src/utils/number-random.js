const numberRandom = () => {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min)) + min;
};

export default numberRandom;
