// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterBy = (data, filterBy, value) =>{
  const filteredData = data.filter(item => {
    return item.facts[filterBy] ===value;
  });
  return filteredData;
};

// export const ordenarHobbies = (data, sortBy, value) => { 
//   if (value === "asc"){
//     return data.sort((a, b ) => {a.facts[sortBy] - b.facts[sortBy]
//     })
//   } else {
//     return data.sort((a, b ) => {b.facts[sortBy] - a.facts[sortBy]
//   })
  
// }
// };

export const ordenarHobbies = (data, sortBy, value) => { 
  // mais caro
  if (value === "asc"){
    return data.sort((a, b ) => {return a.facts[sortBy] - b.facts[sortBy]})
  } else {
    // mais barato
    return data.sort((a, b ) => {return b.facts[sortBy] - a.facts[sortBy]})
  }
}