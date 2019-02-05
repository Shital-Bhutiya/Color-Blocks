document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", bgChange);
  let divs = document.activeElement.getElementsByClassName('color');
let divColored = document.activeElement.getElementsByClassName('colored');



function bgChange(e) {
  
  if (divs.length === divColored.length) {
    alert("You win");
  }
  if (!e.target.classList.contains('colored')) {
    e.target.style.backgroundColor = randomColor();
    e.target.classList.add('colored');
  }
}
function randomColor() {
  return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
}
});