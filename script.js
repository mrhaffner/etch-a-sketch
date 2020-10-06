let htmlElements
let columns = 4
let container = document.getElementById("divContainer");
let box = container.childNodes

function createBoxes(){
    htmlElements = "";
    for (let i = columns**2; i > 0; i--) {
        htmlElements += '<div class="snake"></div>';
    }
    container.innerHTML = htmlElements;
    container.style.gridTemplateColumns = `repeat(${columns}, auto)`;
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener('mouseover', () => {
            box[i].style.backgroundColor = 'green';
        })
    }
}

createBoxes();




let button = document.querySelector('resetButton')
resetButton.addEventListener('click', () => {
    promptNumber()
})


function promptNumber() {
    columns = prompt('How many squares per side would you like (up to 100)')
    if (columns > 100 || columns < 1 || columns % 1 !== 0 || isNaN(columns) || columns === '0') {
        promptNumber();
    }
    removeBoxes();
    createBoxes();
}


function removeBoxes() {
    const parent = document.getElementById("divContainer")
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}
