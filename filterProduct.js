let filterProducts = [...products];

let mainContainer = document.querySelector(".imgAlign");
let btn = document.querySelectorAll('.btn');
let heading = document.querySelector('.txt h3');
let search = document.querySelector('#search');
let algnBtn = document.querySelector('.btnsAlign');

algnBtn.innerHTML = Btns.map(({ Id, Text }) => {
  return `<span class="btn" data-id="${Id}">${Text}</span>`;
}).join("");

document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonId = event.target.dataset.id;

    if (buttonId === 'all') {
      filterProducts = [...products];
    } else {
      filterProducts = products.filter((item) => item.title === buttonId);
    }

    displayProduct();
  });
});

search.addEventListener('keyup', () => {
  let searching = search.value.toLowerCase();
  let filtered = filterProducts.filter((item) =>
    item.heading.toLowerCase().includes(searching)
  );

  displayProduct(filtered);
});

const displayProduct = (filteredProducts = filterProducts) => {
  if (filteredProducts.length < 1) {
    return (mainContainer.innerHTML = `<div class="sorry">
      <article class="sorryAlign">
        <h1>Sorry, no results found</h1>
      </article>
    </div>`);
  }

  let generated = filteredProducts
    .map((product) => {
      const { id, title, img, heading, price } = product;

      return `
      <article class="main-image-box">
        <article class="icons">
          <img src="${img}" class="imgs" title="${title}" data-id="${id}" alt="sofa">
          <article class="iconAlign">
            <i class="fas fa-cart-shopping"></i>
            <i class="fas fa-search"></i>
          </article>
        </article>
        <article class="txt">
          <h3>${heading}</h3>
          <span class="price">${price}</span>
        </article>
      </article>`;
    })
    .join("");

  mainContainer.innerHTML = generated;
};

displayProduct();
