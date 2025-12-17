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
const swissCards = document.querySelectorAll(".swiss-card");

const swissObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

swissCards.forEach(card => swissObserver.observe(card));

