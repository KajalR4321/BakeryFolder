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
// ================= SPECIAL CAKES ANIMATION ================= */

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".special-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 120);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  cards.forEach((card) => observer.observe(card));
});
// Select all arrival cards
const arrivalCards = document.querySelectorAll('.arrival-card');

// Function to check if card is in viewport
function showCardsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  arrivalCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', showCardsOnScroll);

// Initial check
showCardsOnScroll();
// about section
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");
  const imageBox = document.querySelector(".about .img");
  const contentItems = document.querySelectorAll(".about .content p, .about .content .btn");

  // Hide initially (important)
  imageBox.style.opacity = "0";
  contentItems.forEach(item => {
    item.style.opacity = "0";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          // Image animation
          imageBox.classList.add("animate-img");

          // Content animation (one by one)
          contentItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate-content");
            }, index * 300);
          });

          observer.unobserve(aboutSection);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(aboutSection);
});
