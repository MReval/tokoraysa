// Ensure productsData is available if needed for addToCart details
// This script might need to be loaded after data.js

// Initialize cart from localStorage
function getCartItems() {
    const items = localStorage.getItem('raysaKueCartItems');
    return items ? JSON.parse(items) : [];
}

let cartItems = getCartItems(); // Load initial cart

// Save cart to localStorage (internal helper)
function saveCart() {
    localStorage.setItem('raysaKueCartItems', JSON.stringify(cartItems));
}

// Add item to cart
function addToCart(productId) {
    // Assuming productsData is globally available from data.js
    if (typeof productsData === 'undefined' || productsData === null) {
        console.error("productsData is not defined or null. Make sure data.js is loaded before cart.js.");
        alert("Error: Could not add item to cart. Product data not found. Please try again later or contact support.");
        return;
    }

    const product = productsData.find(p => p.id === productId);
    if (product) {
        // Store a copy of the essential product details
        // Each call to addToCart adds a new entry, allowing duplicates (representing quantity implicitly)
        cartItems.push({ 
            id: product.id, 
            name: product.name, 
            price: product.price, 
            image: product.image,
            category: product.category 
        });
        saveCart();
        alert(product.name + ' has been added to your cart!');
    } else {
        console.error('Product with ID ' + productId + ' not found in productsData.');
        alert('Error: Product not found. Could not add to cart.');
    }
}

// Remove item from cart (removes all items with this product ID)
function removeFromCart(productId) {
    const initialLength = cartItems.length;
    cartItems = cartItems.filter(item => item.id !== productId);
    if (cartItems.length < initialLength) { // Check if any item was actually removed
        saveCart();
        // Optional: Add feedback for removal if needed, e.g., alert or log
        // console.log('Product with ID ' + productId + ' removed from cart.');
        // if (typeof displayCart === 'function') { displayCart(); } // Example: to refresh cart display
    } else {
        // console.log('Product with ID ' + productId + ' not found in cart for removal.');
    }
}

// Clear all items from cart
function clearCart() {
    cartItems = [];
    saveCart();
    // Optional: Add feedback for clearing cart
    // alert('Cart has been cleared!');
    // if (typeof displayCart === 'function') { displayCart(); } // Example: to refresh cart display
}

// Make functions globally accessible
window.getCartItems = getCartItems;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
// Expose cartItems itself for debugging or direct inspection if needed, but typically not for manipulation from outside
// window.cartItems = cartItems; // Uncomment if direct access is desired for other modules/debugging
