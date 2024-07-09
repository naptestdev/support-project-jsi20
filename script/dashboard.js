document.addEventListener('DOMContentLoaded', function() {
    const addPopupBtn = document.getElementById('addPopupBtn');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const increaseBtn = document.getElementById('increaseBtn');
    const quantityInput = document.getElementById('quantity');
    const totalPrice = document.querySelector('.total-price');

    addPopupBtn.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    decreaseBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
            updateTotalPrice(quantity);
        }
    });

    increaseBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        quantity++;
        quantityInput.value = quantity;
        updateTotalPrice(quantity);
    });

    function updateTotalPrice(quantity) {
        const unitPrice = 3899;
        const total = unitPrice * quantity;
        totalPrice.textContent = `$${total}`;
    }
});
