//The script to change show the selected button
const button = document.querySelectorAll(".button--outline");
console.log(button);
button.forEach((element) => {
  element.addEventListener("focus", addStyle);
  //document.getElementById("input-group");

  element.addEventListener("blur", removeStyle);
});

function addStyle() {
  //depending on the btn id, the right placeholder will be set
  this.style.zIndex = "initial";
  var input = document.getElementById("input-group");

  if (this.id === "url") {
    input.placeholder = "https://a-web-site-link.com";
  } else if (this.id === "google") {
    input.placeholder = "Here for Google media...Enter a keyword like tiger";
  } else if (this.id === "insta") {
    input.placeholder = "https://www.instagram.com/exploratology/?hl=fr";
  } else if (this.id === "insta-bulk") {
    input.placeholder = `https://www.instagram.com/exploratology/?hl=fr
    https://www.instagram.com/exploratology/?hl=fr/123
    https://www.instagram.com/exploratology/?hl=fr/1234
    https://www.instagram.com/exploratology/?hl=fr/12345`;
  } else if (this.id === "pint") {
    input.placeholder = "https://www.pinterest.fr/pin/643170390553398267/";
  } else if (this.id === "pint-bulk") {
    input.placeholder = `https://www.pinterest.fr/pin/643170390553398267/
    https://www.pinterest.fr/pin/643170390553398267/12
    https://www.pinterest.fr/pin/643170390553398267/1234
    https://www.pinterest.fr/pin/643170390553398267/12345`;
  } else {
    input.placeholder = "Enter here a site link";
  }
  console.log(input);
}
function removeStyle() {
  this.style.zIndex = "1";
  document.getElementById("input-group").placeholder = "Here to look for media";
}

// function returnPlaceholder() {
//   if (this.id === "google1") {
//     return true;
//   }
// }

// const button = document.querySelector(".button--outline");
// console.log(button);
// button.addEventListener("click", addClass);

// function addClass() {
//   this.style.background = "blue";
// }
