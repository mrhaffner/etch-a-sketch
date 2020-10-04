//const div = document.createElement('div');
//div.setAttribute('class', 'snake');
//container.appendChild(div)
//container.appendChild(div)
//for (let i = 9; i > 0; i--) {
//    container.appendchild(div)
//}

//let divContainer = document.querySelector('#divContainer');
let htmlElements = "";
let x = 4

for (let i = x**2; i > 0; i--) {
   htmlElements += '<div class="snake"></div>';
}
let container = document.getElementById("divContainer");
container.innerHTML = htmlElements;
container.style.gridTemplateColumns = `repeat(${x}, auto)`