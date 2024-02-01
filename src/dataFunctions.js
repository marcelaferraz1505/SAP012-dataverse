// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterBy = (data, filterBy, value) =>{
const filteredData = data.filter(item => {
  return item.facts[filterBy] ===value;
});
  return filteredData;
};

export const anotherExample = () => {
  return [];
};
