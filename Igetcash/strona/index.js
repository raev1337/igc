
const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const wrapper = document.querySelector('.wrapper');
const icon = document.querySelector('.fas');

function hover (){
    button2.style.transform = "translate(0px, 0px)";
    button1.style.transform = "translate(8px,-12px)";
}

function hover_out (){
    button2.style.transform = "translate(8px,-12px)";
    button1.style.transform = "translate(0px, 0px)";
}   

const handleClick = () => {

    wrapper.classList.toggle('dark');
    button2.classList.toggle('dark_theme_border');
    icon.classList.toggle('dark_filled_icon');
}

icon.addEventListener('click', handleClick);


