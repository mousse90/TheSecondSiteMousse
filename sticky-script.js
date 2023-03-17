// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickElement();
};

//get the element to stick
let media = document.getElementById("sticky");

//get the position of the element to stick
let position = media.offsetTop;

function stickElement() {
  //check the scroll position is up to the element to stick
  if (window.pageYOffset >= position) {
    media.classList.add("sticky");
  } else {
    media.classList.remove("sticky");
  }
}
