const productcontainer = document.querySelector('.product__grid')

const fetchproducts = async () => {
    try {
        const data = await fetch('https://fakestoreapi.com/products');
        const value = await data.json()
         return value 
     } catch (error) {
        console.error(error);
     }
}

 const onload = async () => {
    const value = await fetchproducts()
    renderproducts(value)
    
}


const renderproducts = (productdata) => {

    productdata.forEach(element => {
        const listItem = document.createElement('div');
        listItem.className = 'product'
        listItem.innerHTML = `
  
        <div class="prod__img__container">
            <img src=${element.image} alt="product__img">
        </div>

        <div class="product__info">
            <p class="product__name">${element.title} </p>
            <p class="product__price">₹ ${element.price}</p>
        </div>
          <button> Add to cart     </button>
        ` ;
        productcontainer.appendChild(listItem);
     });
}


onload()


