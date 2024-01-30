export const renderItems = (data) => {
  const cardHobby = document.createElement('ul');
  cardHobby.classList.add('container');
  
  data.forEach((item) => {
    cardHobby.innerHTML+=`
    <li itemscope itemtype="http://https://schema.org/HobbyShop" class="containerLi"> 
      <dl itemscope itemtype="#hobby">
        <dt><img src="${item.imageUrl}" alt="imagem do card" itemprop="${item.name}" class="imagem_card"  /></dt>
        <div class="textoCard">
        <dd itemprop="name"> Nome: ${item.name}</dd>
        <dd itemprop="priceRange"> Valor: ${item.facts.custoParaIniciar}</dd>
        <dd itemprop="keywords"> Categoria: ${item.facts.categoriaHobby}</dd>
        <dd itemprop="description"> Material necessário: ${item.facts.materialNecessario}</dd>
        </div>
        </dl>
    </li>
    `;
  })


  return cardHobby;
};

