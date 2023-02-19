// document.getElementsByClassName('main__title')[0].style.color = 'red'
document.getElementById('main__action').onclick = function() {
    document.getElementById('cars').scrollIntoView({behavior: 'smooth'})
}

const buttons = document.getElementsByClassName('car__btn')
    for(let i = 0 ; i < buttons.length ; i++){
    buttons[i].onclick =function(){
    document.getElementById('price').scrollIntoView({behavior: 'smooth'})
    }
}


document.getElementById('price-action').onclick = function() {
if(document.getElementById('name').value === ''){
    alert('заполните поле Имя')
}else if(document.getElementById('phone').value === ''){
        alert('заполните поле телефон')
}else if(document.getElementById('car').value === ''){
    alert('заполните поле автомобиль')
}else{
    alert('Спасибо за заявку')
}
}



document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price__image');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.1) / 4) + 'px,' + ((event.clientY * 0.1) / 4) + 'px,0px)';
});

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
})
});