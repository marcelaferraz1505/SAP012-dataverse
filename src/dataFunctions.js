// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterBy = (data, filterBy, value) =>{
const filteredData = data.filter(item => {
  if(filterBy in item){
    return item[filterBy].includes(value);
  }else if('facts.categoriaHobby' in item && filterBy in item.facts.categoriaHobby){
    return item.facts.categoriaHobby[filterBy] ===value;
  }
  return false;
});
  return filteredData;
};

export const anotherExample = () => {
  return [];
};
