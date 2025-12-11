const search =document.querySelector('.search-icon');
const searchForm =document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

//i use this it will show
search.addEventListener("click",()=>{
searchForm.classList.toggle("active")
})

const cartIcon =document.querySelector('.cart-icon');
const cartItems =document.querySelector('.cart-items-conatiner');


//i use this it will show cart item
cartIcon.addEventListener("click",()=>{
cartItems.classList.toggle("active")
})
