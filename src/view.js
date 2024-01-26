export const renderItems = (data) => {
  const cardHobby = document.createElement('ul');
  cardHobby.classList.add('container');
  
  data.forEach((item) => {
    cardHobby.innerHTML+=`
    <li itemscope itemtype="containerLi" class="containerLi"> 
      <dl itemscope itemtype="#hobby">
        <dt> <img src="${item.imageUrl}" alt="imagem do card" itemprop="${item.name}" class="imagem_card"  /> </dt>
        <dt> Nome: </dt>  <dd itemprop="name"> ${item.name}</dd>
        <dt> Valor: </dt>  <dd itemprop="custoParaIniciar"> ${item.facts.custoParaIniciar}</dd>
      </dl>
    
    </li>
    `;
  })


  return cardHobby;
};

