// Your code goes here
const logoHeading = document.querySelector(".logo-heading");
const navContainer = document.querySelector(".nav-container");
const body = document.querySelector("body");
const introP = document.querySelector(".intro p");
const introH = document.querySelector(".intro h2");
const navLink = document.querySelectorAll(".nav-link");
const dest1 = document.querySelector(".content-pick .dest1");
const dest1Btn = document.querySelector(".content-pick .dest1 .btn1");
const navItem = document.querySelectorAll(".nav-item");
const footer = document.querySelector(".footer");

// #1
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function(event) {
    event.preventDefault();
  });
}

// #2
navContainer.addEventListener("click", () => {
  TweenMax.to(".logo-heading", 3, { rotation: 360, scale: 0.5 });
});

// #3
logoHeading.addEventListener("click", () => {
  TweenLite.to(".logoHeading", 2.5, {
    ease: RoughEase.ease.config({
      template: Power0.easeNone,
      strength: 1,
      points: 20,
      taper: "none",
      randomize: true,
      clamp: false
    }),
    x: 500,
    opacity: 0
  });
});
// #4
window.addEventListener("load", function(event) {
  alert("Everything on this page has loaded");
});

// #5
introH.addEventListener("mouseover", function(event) {
  event.target.style.fontSize = "6rem";
});

// #6
introH.addEventListener("mouseleave", function(event) {
  event.target.style.fontSize = "4rem";
});

// #7
body.addEventListener("keydown", function() {
  alert("you've hit a keystroke");
});

// #8
window.addEventListener("resize", function(event) {
  this.alert("you resized the screen");
});

// #9
body.addEventListener("wheel", function(event) {
  event.target.style.color = "red";
});

// #10
body.addEventListener("dblclick", function(event) {
  event.target.style.color = "black";
});


window.onscroll = function() {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".intro p").className = "greenPara";
  } else {
    document.querySelector(".intro p").className = "";
  }
}

dest1.addEventListener("click", function(event) {
  event.target.style.color = "blue";
  alert("Have fun in the sun");
});

dest1Btn.addEventListener("click", function() {
  alert("Button pressed");
  event.stopPropagation();
});

footer.addEventListener("click", function(event) {
  event.target.classList.toggle("jsFooter");
});