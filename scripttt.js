let cart = [];

function addToCart(itemName, itemPrice) {
    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1; // If the item is already in the cart, increase the quantity
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 }); // If the item is new, add it to the cart
    }

    displayCart(); // Update the cart display
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear the current cart display

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name} - $${item.price} x ${item.quantity}</span>
            <span>$${itemTotal.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    const totalElement = document.createElement('div');
    totalElement.classList.add('cart-total');
    totalElement.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    cartItemsContainer.appendChild(totalElement);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let orderSummary = 'Your Order:\n\n';
    cart.forEach(item => {
        orderSummary += `${item.name} - $${item.price} x ${item.quantity}\n`;
    });
    orderSummary += `\nTotal: $${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}`;

    alert(orderSummary); // Display order summary

    cart = []; // Clear the cart after checkout
    displayCart(); // Update the cart display
}
