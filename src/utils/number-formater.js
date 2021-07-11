const idFormater = (id) => {
  id++;
  if (id < 10) return `0${id}`;
  if (id >= 10) return id;
};

export default idFormater;
