const btn1 = document.querySelector('button'),
    btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn1.onclick = function(){
//     alert('from js 1');
// }

let i = 0;
const deleteElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);
}
// const deleteElement = (event) => {
//     console.log(event.target);
//     i++;
//     btn1.style.background = 'red';
//     btn1.textContent = 'Кто на меня нажал ?!'
//     setTimeout(() => {
//         btn1.style.background = 'green';
//         btn1.textContent = 'Нажми меня 1'
//         btn1.addEventListener('click', deleteElement);
//     }, 5000)
//     btn1.removeEventListener('click', deleteElement);
//     // btn1.removeEventListener('mouseenter', pressOrLeave);
//     // btn1.removeEventListener('mouseout', iKnewIt);
// }
const pressOrLeave = () => {
    setTimeout(() => {
        btn1.style.transition = 'background-color 3.0s ease';
        btn1.style.backgroundColor = 'red';
        btn1.textContent = "Жми или отстань..."
    }, 1500);
}

const iKnewIt = () => {
    btn1.style.transition = 'background-color 2.0s ease';
    btn1.style.backgroundColor = 'green';
    btn1.textContent = "Так я и знал..."
    setTimeout(() => {
        btn1.textContent = 'Нажми меня 1'
    }, 2000);

}

// btn1.addEventListener('click', deleteElement);
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, { once: true })
    overlay.addEventListener('click', deleteElement, { once: true });
})
// btn1.addEventListener('mouseenter', pressOrLeave);
// btn1.addEventListener('mouseout', iKnewIt);

const link = document.querySelector('a');
link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(link.textContent)
})