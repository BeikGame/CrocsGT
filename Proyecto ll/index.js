let totalItems = 0;
let totalAmount = 0;
const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const price = parseFloat(this.getAttribute('data-price')); 
        const name = this.getAttribute('data-name'); 

        cart.push({ name, price });
        sessionStorage.setItem('cart', JSON.stringify(cart)); 

        totalItems++; 
        totalAmount += price; 

        document.getElementById('cart-total').innerText = totalItems;
        document.getElementById('cart-amount').innerText = totalAmount.toFixed(2);

        alert(`${name} ha sido añadido al carrito.`);
    });
});

document.getElementById('view-cart').addEventListener('click', function() {
    window.location.href = 'carrito.html'; 
});
