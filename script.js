let htmlElements = "";
let columns = 4

for (let i = columns**2; i > 0; i--) {
   htmlElements += '<div class="snake"></div>';
}
let container = document.getElementById("divContainer");
container.innerHTML = htmlElements;

container.style.gridTemplateColumns = `repeat(${columns}, auto)`

let box = document.getElementById('divContainer').childNodes
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseover', () => {
        box[i].style.backgroundColor = 'green';

    })
}
