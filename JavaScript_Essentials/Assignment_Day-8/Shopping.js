// Question-01
// Create the basic shopping website as done in the class and anhance the website by adding the following functionalities
//    1) Add 6 new products so that the count of products becomes 12.
//    2) A price filter where you have to add two input boxes one for maximum price and one for minimum price.
//    3) A place which counts the number of products added in the cart.
 
let products = [
    {
      id: 1,
      name: "Checked shirt",
      size: "L",
      color: "blue",
      price: 1200,
      image: "Images/p1.jpg",
      description: "Good looking white tshirt",
    },
    {
      id: 2,
      name: "Yellow TShirt",
      size: "M",
      color: "Yellow & Blue",
      price: 1500,
      image: "Images/p2.jpg",
      description: "Good looking black shirt",
    },
  
    {
      id: 3,
      name: "Formal Shirt",
      size: "S",
      color: "Gray",
      price: 900,
      image: "Images/p3.jpg",
      description: "Good looking Checked Shirt",
    },
  
    {
      id: 4,
      name: "Green Shirt",
      size: "M",
      color: "Dark Green",
      price: 3000,
      image: "Images/p4.jpg",
      description: "Beautifull Blazer",
    },
  
    {
      id: 5,
      name: "Gray Top",
      size: "S",
      color: "light gray",
      price: 1300,
      image: "Images/p5.jpg",
      description: "Good looking Top",
    },
  
    {
      id: 6,
      name: "Indian Dress",
      size: "M",
      color: "light blue",
      price: 1500,
      image: "Images/p6.jpg",
      description: "Good looking Traditional Dress",
    },
    {
      id: 7,
      name: "Red shirt",
      size: "L",
      color: "Dark Red",
      price: 1200,
      image: "Images/p7.jpg",
      description: "Good looking white tshirt",
    },
    {
      id: 8,
      name: "Blue TShirt",
      size: "M",
      color: "Sky blue",
      price: 1500,
      image: "Images/p8.jpg",
      description: "Good looking black shirt",
    },
  
    {
      id: 9,
      name: "Neck TShirt",
      size: "S",
      color: "Dark Blue",
      price: 900,
      image: "Images/p9.jpg",
      description: "Good looking Checked Shirt",
    },
  
    {
      id: 10,
      name: "Black TShirt",
      size: "M",
      color: "Black",
      price: 3000,
      image: "Images/p10.jpg",
      description: "Beautifull Blazer",
    },
  
    {
      id: 11,
      name: "Navy Blue",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "Images/p11.jpg",
      description: "Good looking Top",
    },
  
    {
      id: 12,
      name: "T Shirt",
      size: "M",
      color: "White & Brown",
      price: 1500,
      image: "Images/p12.jpg",
      description: "Good looking Traditional Dress",
    },
  ];
  
  cart = [];

function displayProducts(productsData,who="productwrap"){
    let productString="" ;
    productsData.forEach(function(product, index){
      let {name,image,color,description,price,size} = product;
      if (who == "productwrap")
      {
        productString += `
        <div class="product">
          <div class="prodimg">
              <img src="${image}" width="100%"/>
          </div>
          <h3>${name}</h3>
          <p>Price: ${price}$</p>
          <p>Size: ${size}</p>
          <p>Color: ${color}</p>
          <p>${description}</p>
          <p><button onclick="addToCart(${index})">Add to Cart</button></p>
        </div>
        `
      }
      else if(who == "cart"){
        productString += `
        <div class="product">
          <div class="prodimg">
              <img src="${image}" width="100%"/>
          </div>
          <h3>${name}</h3>
          <p>Price: ${price}$</p>
          <p>Size: ${size}</p>
          <p>Color: ${color}</p>
          <p>${description}</p>
          <p><button onclick="removeFromCart(${index})">Remove from Cart</button></p>
        </div>
        `
      }
      
    });

    document.getElementById(who).innerHTML = productString;
};

displayProducts(products);


function searchProduct(searchValue){
    //console.log(searchValue)
    let searchProducts = products.filter(function(product, index){
        let searchString = product.name+" "+product.color+" "+product.description;
        return searchString.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
    })
    displayProducts(searchProducts)
}
let count = 0;
let flag;
function addToCart(index){
    cart.push(products[index])
    count++
    displayProducts(cart,"cart")
}

function removeFromCart(index){
  cart.splice(index,1)
  count--
  displayProducts(cart,"cart")
}
function filterProduct() {
  let minimumPrice = document.getElementById("min").value;
  let maximumPrice = document.getElementById("max").value;

  let min = Number(minimumPrice)
  let max = Number(maximumPrice)

  let fProducts = products.filter(function(product, index) {
        if(product.price >= min && product.price <= max){
          return products
        }
  });

  displayProducts(fProducts);
}

function array() {
    document.getElementById("count").innerHTML = count; 
}