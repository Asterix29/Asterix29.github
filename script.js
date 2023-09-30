document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const item = button.parentNode;
            const itemId = item.dataset.id;
            const itemName = item.dataset.name;
            const itemPrice = parseFloat(item.dataset.price);

            const cartItem = document.createElement('li');
            cartItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
            cartItems.appendChild(cartItem);

            totalPrice += itemPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });
});
