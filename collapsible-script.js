const collapsibleElement = document.querySelectorAll(".collapsible");

collapsibleElement.forEach((element) => {
  element.addEventListener("click", collapseElement);
});

function collapseElement() {
  this.classList.toggle("collapsible--expanded");
  console.log("function works");
}
