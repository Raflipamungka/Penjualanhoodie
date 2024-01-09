
    function applyBackgroundBlur() {
        // Get the source image
        var sourceImage = document.getElementById('sourceImage');

        // Create a canvas element
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        canvas.width = sourceImage.width;
        canvas.height = sourceImage.height;

        ctx.drawImage(sourceImage, 0, 0, canvas.width, canvas.height);

       
        ctx.filter = 'blur(10px)'; 
        ctx.drawImage(canvas, 0, 0);

        
        sourceImage.src = canvas.toDataURL();
    }

   


const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Jaket Hoodie",
    price: 159.000,
    colors: [
      {
        code: "black",
        img: "hoodie.polos.jpg",
      },
      {
        code: "darkblue",
        img: "hoodie.polos.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "ZIP Hoodie",
    price: 149.000,
    colors: [
      {
        code: "lightgray",
        img: "Hoddie.jpg",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "CREWNECT",
    price: 129.000,
    colors: [
      {
        code: "lightgray",
        img: "CREWNECT.jpg",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Parka",
    price: 129.000,
    colors: [
      {
        code: "black",
        img: "Parka.jpg",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Denim",
    price: 199.000,
    colors: [
      {
        code: "gray",
        img: "jokowidenim.jpg",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
    size.style.color = "white";
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


var map = L.map('map').setView([-7.797068, 110.370529], 13);

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Tambahkan marker di lokasi
var marker = L.marker([-7.797068, 110.370529]).addTo(map);
marker.bindPopup("<b>Lokasi Kami</b><br>Jl. Contoh No. 123").openPopup();

