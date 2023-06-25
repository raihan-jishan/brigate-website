// a simple vanila js file for simple dom oparetion. And toggle animatins.
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
};
