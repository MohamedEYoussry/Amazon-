// **************************************  Slider Section  ***********************
var signOut = document.getElementById("sign-out");
signOut.textContent = "";
let slideBtnLeft = document.getElementById("prev");
let slideBtnRight = document.getElementById("next");
let imgItem = document.querySelectorAll(".image-item");

let startSlider = 0;

// Right Arrow

slideBtnRight.addEventListener("click", slideRight);
function slideRight() {
  if (startSlider > -700) {
    startSlider = startSlider - 100;
  } else {
    startSlider = 0;
  }
  console.log(startSlider);
  for (element of imgItem) {
    element.style.transform = `translateX(${startSlider}%)`;
  }
}

// Left Arrow

slideBtnLeft.addEventListener("click", slideLeft);
function slideLeft() {
  if (startSlider < 0) {
    startSlider = startSlider + 100;
  } else {
    startSlider = -700;
  }
  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
}

console.log(startSlider);

// ************************************** Automatic Slider  ***********************

function autoSlide() {
  slideLeft();
}

setInterval(autoSlide, 5000);

// ************************************** Products of the day  ***********************

document.querySelector(".r-btn").addEventListener("click", function (event) {
  document.querySelector(".product-slide").scrollLeft += 1100;
  event.preventDefault();
});

document.querySelector(".l-btn").addEventListener("click", function (event) {
  document.querySelector(".product-slide").scrollLeft -= 1100;
  event.preventDefault();
});

document
  .querySelector("#today_deal_btn_next")
  .addEventListener("click", function (event) {
    document.querySelector(".today_deals_product_list").scrollLeft += 1100;
    // event.preventDefault();
  });

document
  .querySelector("#today_deal_btn_prev")
  .addEventListener("click", function (event) {
    document.querySelector(".today_deals_product_list").scrollLeft -= 1100;
    // event.preventDefault();
  });

// ************************************** Back To Top  ***********************

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

x// ************************************** A-Side  ***********************

const sideBtn = document.querySelector(".second-1");
const sideBar = document.querySelector("aside");
const closeSideBar = document.querySelector(".fa-xmark");
const overLay = document.querySelector(".over-lay");
const bodyOverFlow = document.querySelector("body");

sideBtn.addEventListener("click", () => {
  sideBar.classList.add("active");
  closeSideBar.classList.add("active");
  overLay.classList.add("active");
  bodyOverFlow.classList.add("active");
});

closeSideBar.addEventListener("click", () => {
  sideBar.classList.remove("active");
  closeSideBar.classList.remove("active");
  overLay.classList.remove("active");
  bodyOverFlow.classList.remove("active");
});

// ************************************** Sign Table  ***********************

const signBtn = document.querySelector(".sign");
const signTable = document.querySelector(".sign-box");

signBtn.addEventListener("click", () => {
  signTable.classList.toggle("active");
  signBtn.classList.toggle("active");
  overLay.classList.toggle("active");
  bodyOverFlow.classList.toggle("active");
});

// *************************************** index2  **************************

var clickToIndex2 = document.getElementById("new-page");
var clickToIndex = document.getElementById("new-page-span");

clickToIndex2.addEventListener("click", () => {
  window.location.assign("index2.html");
});

clickToIndex.addEventListener("click", () => {
  window.location.assign("index2.html");
});

var Email = localStorage.getItem("Email");
var Password = localStorage.getItem("Password");
const displayUserName = document.getElementById("display-name");

if (Email != null) {
  displayUserName.textContent = `Welcome ${window.localStorage.getItem(
    "Email"
  )}`;
  signOut.textContent = "Sign Out";
} else {
  displayUserName.textContent = "Hello, sign in";
}

signOut.addEventListener("click", () => {
  localStorage.removeItem("Email");
  localStorage.removeItem("Password");
  displayUserName.textContent = "Hello, sign in";
  localStorage.clear();
  signOut.textContent = "";
});

//******************************************** Sale Timer *********************

// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Jan 31, 2023 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

/////////////////////////////////////////////////////////////////////////// cart from here////////////////////////////////
let cartIcon = document.querySelector(".cart-bag");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// //cart working JS
// if (document.readyState == "loading") {
//   document.addEventListener("DOMContentLoaded", ready);
// } else {
//   ready();
// }
