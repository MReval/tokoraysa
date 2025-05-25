// Initialize cart from localStorage
function getCartItems() {
    const items = localStorage.getItem('raysaKueCartItems');
    if (items) {
        const parsedItems = JSON.parse(items);
        // Ensure all items have a quantity property (for backward compatibility if old cart data exists)
        return parsedItems.map(item => ({ ...item, quantity: item.quantity || 1 }));
    }
    return [];
}

let cartItems = getCartItems(); // Load initial cart

// Save cart to localStorage (internal helper)
function saveCart() {
    localStorage.setItem('raysaKueCartItems', JSON.stringify(cartItems));
}

// Add item to cart or increment quantity
function addToCart(productId) {
    if (typeof productsData === 'undefined' || productsData === null) {
        console.error("productsData is not defined. Make sure data.js is loaded before cart.js.");
        showToast("Error: Could not add item to cart. Product data not found.", 'error');
        return;
    }

    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
        showToast(existingItem.name + ' quantity updated to ' + existingItem.quantity + '.', 'info');
    } else {
        const product = productsData.find(p => p.id === productId);
        if (product) {
            cartItems.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
                quantity: 1
            });
            showToast(product.name + ' added to cart!', 'success');
        } else {
            console.error('Product with ID ' + productId + ' not found in productsData.');
            showToast('Error: Product not found. Could not add to cart.', 'error');
            return; // Do not save cart if product not found
        }
    }
    saveCart();
}

// Increment item quantity in cart
function incrementItem(productId) {
    const item = cartItems.find(i => i.id === productId);
    if (item) {
        item.quantity++;
        saveCart();
        // Optional: Add alert or update UI if called from cart page directly
        // alert(item.name + ' quantity updated to ' + item.quantity);
        // if (typeof displayCart === 'function') { displayCart(); } // Example: to refresh cart display
    }
}

// Decrement item quantity or remove if quantity becomes 0
function decrementItem(productId) {
    const itemIndex = cartItems.findIndex(i => i.id === productId);
    if (itemIndex > -1) {
        const item = cartItems[itemIndex];
        item.quantity--;
        if (item.quantity <= 0) {
            cartItems.splice(itemIndex, 1); // Remove item if quantity is 0 or less
            // alert(item.name + ' removed from cart.');
        } else {
            // alert(item.name + ' quantity updated to ' + item.quantity);
        }
        saveCart();
        // if (typeof displayCart === 'function') { displayCart(); } // Example: to refresh cart display
    }
}

// Remove an entire product line from cart (regardless of quantity)
function removeFromCart(productId) {
    const initialLength = cartItems.length;
    cartItems = cartItems.filter(item => item.id !== productId);
    if (cartItems.length < initialLength) {
        saveCart();
        // alert('All units of product ID ' + productId + ' removed from cart.');
        // if (typeof displayCart === 'function') { displayCart(); } // Example: to refresh cart display
    }
}

// Clear all items from cart
function clearCart() {
    cartItems = [];
    saveCart();
    // Optional: Add feedback
    // alert('Cart has been cleared!');
    // if (typeof displayCart === 'function') { displayCart(); } // Example: to refresh cart display
}

// Make functions globally accessible
window.getCartItems = getCartItems;
window.addToCart = addToCart;
window.incrementItem = incrementItem;
window.decrementItem = decrementItem;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;

// For debugging or direct inspection
// window.cartItems = cartItems;
// window.saveCart = saveCart; // Expose saveCart for debugging only if necessary
