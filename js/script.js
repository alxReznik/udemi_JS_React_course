'use strict'
const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color:blue; width: 500px';
btns[1].style.borderRadius = '100%'
circles[0].style.backgroundColor = 'red';

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'green';
// }
hearts.forEach(item => {
    item.style.backgroundColor = "yellow"
})

const div = document.createElement('div');
// const text = document.createTextNode('tut bil ya');

div.classList.add('black');
document.body.append(div)
// wrapper.appendChild(div)
// wrapper.insertBefore(div,hearts[2]);
// wrapper.append(div);
// wrapper.prepend(div);
// hearts[0].before(div)
// hearts[0].after(div)
// circles[1].remove();
// hearts[1].replaceWith(circles[0])

div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello"
div.insertAdjacentHTML('', <h2>Hello</h2>)

oneHeart.addEventListener('click', () => {
    changeBackgroundColor(oneHeart);
})

function changeBackgroundColor(element) {
    element.style.backgroundColor = "yellow";
}