let list = document.querySelectorAll('.item');
let count = list.length;
let active = 0;

const changeActive = () => {
    document.querySelector('.active')?.classList.remove('active');
    active = (active + 1) % count; 
    list[active].classList.add('active');
};

setInterval(changeActive, 2000);

next.onclick = () => {
    changeActive();
};