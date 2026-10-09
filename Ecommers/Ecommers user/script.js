const productContainer = document.getElementById("products-container");

const fetchProducts = async () => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     displayProducts(data.products);
    //   });

    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    displayProducts(data.products);
};

const displayProducts = (products) => {
    products.forEach((element, i) => {
        const div = document.createElement("div");
        div.className = "card";
        div.style.width = "18rem";

        div.innerHTML = ` <img
    src="${element.thumbnail}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">
    ${element.description}
    </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.returnPolicy}</li>
    <li class="list-group-item">${element.rating}🌟</li>
    <li class="list-group-item">Price - USD ${element.price} Only/-</li>
  </ul>
  <div class="card-body">
    <button class="btn btn-primary w-100" onclick="addToCart(${element.id})">Add to Cart</button>
  </div>`;

        productContainer.appendChild(div);
    });
};

const addToCart = (id) => {
    const cartList = JSON.parse(localStorage.getItem("carts")) || [];

    fetch("https://dummyjson.com/products/" + id)
        .then((res) => res.json())
        .then((data) => {
            // is entry is unique or not?
            let isRepeat = false;
            cartList.forEach((element) => {
                if (element.id == data.id) {
                    element.qty++;
                    localStorage.setItem("carts", JSON.stringify(cartList));
                    isRepeat = true;
                }
            });
            console.log("-------------");
            if (isRepeat == false) {
                data.qty = 1;
                cartList.push(data);
                localStorage.setItem("carts", JSON.stringify(cartList));
            }
        });

    alert("Add to cart successfully !");
};

fetchProducts();