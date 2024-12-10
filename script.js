// Example JavaScript to handle adding products to the cart

let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;

        cart.push({ name: productName, price: productPrice });

        alert(`${productName} has been added to your cart!`);
    });
});

// Handling contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
});
