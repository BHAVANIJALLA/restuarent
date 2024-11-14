let cart = [];

function addToCart(itemName, itemPrice) {
    const item = {
        name: itemName,
        price: itemPrice,
        quantity: 1
    };

    // Check if the item is already in the cart
    const existingItem = cart.find(cartItem => cartItem.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(item);
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear the cart display

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(itemDiv);
    });
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    alert(`Your total is $${total}. Thank you for your purchase!`);

    // Clear the cart after checkout
    cart = [];
    updateCartDisplay();
}
