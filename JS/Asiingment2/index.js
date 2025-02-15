let menuData = [];
function fetchData() {
  fetch("https://api.npoint.io/02ef9d57fb9077e07270")
    .then((response) => response.json())
    .then((data) => {
      menuData = data;

      dispalyCard();
      cartCount();
      updateOrderDisplay();
    });
}

function filterByCategory(category) {
  let filteredMenu = menuData;

  if (category !== "all") {
    filteredMenu = menuData.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  dispalyCard(filteredMenu);
}

function dispalyCard(products = menuData) {
  const foodCard = document.getElementById("productCards");
  let cardHtml = "";
  products.forEach((product) => {
    cardHtml += `
        <div class="card">
            <img src=${product.image} alt=${product.name}/>
            <h2> ${product.name}</h2>
             <p>Price: ₹${product.price}</p> 
            <p>${product.description}</p>  
            <button onclick="addToOrder(${product.id})"> Add To Cart </button>
            </div>
        `;
  });

  foodCard.innerHTML = cardHtml;
}
function addToOrder(id) {
  const item = menuData.find((product) => product.id === id);
  if (item) {
    Order.addItem(item);
  }
}

const Order = {
  items: iteminit(),

  addItem: function (item) {
    const existingItem = this.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem = { ...item, quantity: 1 };
      this.items.push(newItem);
    }
    localStorage.setItem("Order", JSON.stringify(Order));
    updateOrderDisplay();
  },
  incItem: function (id) {
    console.log("increment");
    const item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity++;
      localStorage.setItem("Order", JSON.stringify(Order));
      updateOrderDisplay();
    }
  },
  decItem: function (id) {
    const item = this.items.find((i) => i.id === id);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        console.log("decrease");

        this.items = this.items.filter((i) => i.id !== id);
      }
      localStorage.setItem("Order", JSON.stringify(Order));
      updateOrderDisplay();
    }
  },

  delItem: function (id) {
    this.items = this.items.filter((i) => i.id !== id);
    localStorage.setItem("Order", JSON.stringify(Order));
    updateOrderDisplay();
  },

  removeAll: function () {
    this.items = [];
    localStorage.setItem("Order", JSON.stringify(Order));
    updateOrderDisplay();
    document.getElementById("totalPrice").textContent = "0";
  },
};

function calculateTotal() {
  let total = 0;
  const order = JSON.parse(localStorage.getItem("Order"));
  if (order && order?.items?.length > 0) {
    console.log("this is triggered")
    order?.items?.forEach((item) => {
      total += item.price * item.quantity;
    });
  }
  return total;
}

function iteminit() {
  const order = JSON.parse(localStorage.getItem("Order"));
  let itm = [];
  if (order && order?.items?.length) {
    itm = [...order.items];
  }
  return itm;
}

function updateOrderDisplay() {
  const orderDisplay = document.getElementById("orderDisplay");
  const total = document.getElementById("totalPrice")
  const order = JSON.parse(localStorage.getItem("Order"));
  if (!order?.items?.length) {
    orderDisplay.innerHTML = "<li>Your Order is empty!</li>";
  } else {
    orderHtml = "";

    order?.items?.forEach((item) => {
      orderHtml += `
            <li>
            <img src=${item.image} alt=${item.name}/>
            <div>
            <div class="order-item-info">
            <p>${item.name}</p>
            ₹${(item.price * item.quantity).toFixed(2)} (x${item.quantity})
            </div>
            <div class="order-item-buttons">
            <button onclick = "Order.incItem(${item.id})">+</button>
            <button onclick = "Order.decItem(${item.id})">-</button>
            <button onclick = "Order.delItem(${item.id})">Delete</button>

            </div>
            </div>
            </li>
            `;
    });

    orderDisplay.innerHTML = orderHtml;
  }
  total.innerHTML = calculateTotal() 
  cartCount();
}

function cartCount() {
  const order = JSON.parse(localStorage.getItem("Order"));
  console.log(order);
  const cartValue = document.getElementById("cart-count");
  cartValue.textContent = order?.items?.length || 0;
}

document.addEventListener("DOMContentLoaded", function () {
  const cartSection = document.querySelector(".cart-section");
  const cartIcon = document.querySelector(".cart-icon");
  const closeCart = document.querySelector("#sideCart h2 i");

  const clearCartButton = document.getElementById("clearAll");

  clearCartButton.addEventListener("click", function () {
    Order.removeAll();
  });

  cartIcon.addEventListener("click", () => {
    cartSection.classList.toggle("active");
  });

  closeCart.addEventListener("click", () => {
    cartSection.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".dropdown-menu a");

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const selectedCategory = this.id;
      filterByCategory(selectedCategory);
    });
  });

  fetchData();
});

