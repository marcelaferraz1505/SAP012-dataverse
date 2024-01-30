export const renderItems = (data) => {
  const cardHobby = document.createElement('ul');
  cardHobby.classList.add('container');
  
  data.forEach((item) => {
    cardHobby.innerHTML+=`
    <li itemscope itemtype="http://https://schema.org/HobbyShop" class="containerLi"> 
      <dl itemscope itemtype="#hobby">
        <dt><img src="${item.imageUrl}" alt="imagem do card" itemprop="${item.name}" class="imagem_card"  /></dt>
        <div class="textoCard">
        <dt>Nome:</dt><dd itemprop="name"> ${item.name}</dd>
        <dt>Valor:</dt><dd itemprop="priceRange"> ${item.facts.custoParaIniciar}</dd>
        <dt>Categoria:</dt><dd itemprop="keywords"> ${item.facts.categoriaHobby}</dd>
        <dt>Material necessário:</dt><dd itemprop="description"> ${item.facts.materialNecessario}</dd>
        </div>
        </dl>
    </li>
    `;
  })


  return cardHobby;
};

