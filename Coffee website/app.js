const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) => {
        item.classList.remove('active');
    })
    this.classList.add('active');
}
list.forEach((item) => {
    item.addEventListener('click', activeLink);
})

/* for opening the menu */
let navbar = document.querySelector('.nav-bar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    shoppingcart.classList.remove('active');
    searching.classList.remove('active');
}

/* for opening the cart*/
let shoppingcart = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.toggle('active');
    navbar.classList.remove('active');
    searching.classList.remove('active');
}

/* for opening the search bar*/
let searching = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searching.classList.toggle('active');
    navbar.classList.remove('active');
    shoppingcart.classList.remove('active');
}

/* managing active icons*/
window.onscroll = () =>{
    navbar.classList.remove('active');
    shoppingcart.classList.remove('active');
    searching.classList.remove('active');
}