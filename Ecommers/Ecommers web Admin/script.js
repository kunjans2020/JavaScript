// create a ecommerce admin panel where user can add/update/delete products. user cans search, filter and sort products by name, price etc. product add to cart and quantity increament/decrement based bill calculate.

const inputName = document.getElementById("input-name");
const inputCategory = document.getElementById("input-category");
const inputPrice = document.getElementById("input-price");
const inputDiscount = document.getElementById("input-discount");
const inputDescription = document.getElementById("input-description");
const inputRating = document.getElementById("input-rating");
const inputImage = document.getElementById("input-image");
const addProductBtn = document.getElementById("add-product-btn");
const editProductBtn = document.getElementById("edit-product-btn");

const inputSearch = document.getElementById("input-search");
const searchBtn = document.getElementById("search-btn");
const resetBtn = document.getElementById("reset-btn");

const productTbody = document.getElementById("product-tbody");

const priceFilter = document.getElementById("price-filter");

// fetch from input -> store local storage -> fetch from local storage -> display

let allProducts = JSON.parse(localStorage.getItem("products")) || [];

const handleProductListing = () => {
    const product = {
        name: inputName.value,
        price: inputPrice.value,
        category: inputCategory.value,
        description: inputDescription.value,
        discount: inputDiscount.value,
        image: inputImage.value,
        rating: inputRating.value,
    };
    allProducts.push(product);
    localStorage.setItem("products", JSON.stringify(allProducts));
    displayProducts();
};

addProductBtn.addEventListener("click", handleProductListing);

 const displayproducts = () => {

  allProducts.forEach((product, i) => {
   const tr = document.createElement("tr");

    const th = document.createElement("th");

    const tdImage = document.createElement("td");
    const tdName = document.createElement("td");
    const tdCategory = document.createElement("td");
    const tdDescription = document.createElement("td");
    const tdPrice = document.createElement("td");
    const tdDiscount = document.createElement("td");
    const tdRating = document.createElement("td");
    const tdAction = document.createElement("td");

    const img = document.createElement("img");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    th.scope = "row";
    th.textContent = i + 1;

    img.height = "100";
    img.src = product.image;
    tdImage.appendChild(img);

    tdName.textContent = product.name;
    tdCategory.textContent = product.category;
    tdDescription.textContent = product.description;
    tdPrice.textContent = product.price;
    tdDiscount.textContent = product.discount;
    tdRating.textContent = product.rating;

    editBtn.className = "btn btn-warning";
    deleteBtn.className = "btn btn-danger ms-3";
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";
    tdAction.appendChild(editBtn);
    tdAction.appendChild(deleteBtn);

    tr.appendChild(th);
    tr.appendChild(tdImage);
    tr.appendChild(tdName);
    tr.appendChild(tdCategory);
    tr.appendChild(tdDescription);
    tr.appendChild(tdPrice);
    tr.appendChild(tdDiscount);
    tr.appendChild(tdRating);
    tr.appendChild(tdAction);

    productTbody.appendChild(tr);
  });
};

const displayProducts = () => {
    productTbody.innerHTML = "";
    allProducts.forEach((product, i) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<th scope="row">${i + 1}</th>
            <td>
              <img
                height="100"
                src="${product.image}"
                alt=""
              />
            </td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td width="200">${product.description}</td>
            <td>${product.price}</td>
            <td>${product.discount}%</td>
            <td>${product.rating}</td>
            <td class="">
              <button class="btn btn-warning" onclick="setProductForEdit(${i})">Edit</button>
              <button class="btn btn-danger ms-3" onclick="removeProduct(${i})">Delete</button>
            </td>`;
        productTbody.appendChild(tr);
    });
};

const removeProduct = (i) => {
    allProducts.splice(i, 1);
    localStorage.setItem("products", JSON.stringify(allProducts));
    displayProducts();
};

const setProductForEdit = (i) => {
    inputName.value = allProducts[i].name;
    inputCategory.value = allProducts[i].category;
    inputDescription.value = allProducts[i].description;
    inputDiscount.value = allProducts[i].discount;
    inputImage.value = allProducts[i].image;
    inputPrice.value = allProducts[i].price;
    inputRating.value = allProducts[i].rating;
    addProductBtn.classList = "d-none";
    editProductBtn.className = "btn btn-warning";
};

const searchProduct = () => {
    allProducts = JSON.parse(localStorage.getItem("products")) || [];
    const search = inputSearch.value;
    allProducts = allProducts.filter(
        (product) =>
            product.name.toLowerCase() == search.toLowerCase() ||
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase()),
    );
    displayProducts();
};

const handleReset = () => {
    inputSearch.value = "";
    allProducts = JSON.parse(localStorage.getItem("products")) || [];
    displayProducts();
};

searchBtn.addEventListener("click", searchProduct);
resetBtn.addEventListener("click", handleReset);
displayProducts();

// name,defination,example - 1 time.
// push,pop,shift,unshift,slice,splice,filter,sort,includes,indexOf,findIndex,forEach,map

// add,delete,edit/2 display, localstorage
// search - name,categoru, small,cap,half spells.

priceFilter.onchange = () => {
    allProducts = JSON.parse(localStorage.getItem("products")) || [];
    console.log(priceFilter.value);
    if (priceFilter.value == "max") {
        allProducts.sort((a, b) => b.price - a.price);
    } else if (priceFilter.value == "min") {
        allProducts.sort((a, b) => a.price - b.price);
    } else {
        allProducts = JSON.parse(localStorage.getItem("products")) || [];
    }
    displayProducts();
};