document.addEventListener('DOMContentLoaded', () => {
    // Get product ID from URL
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id')); // Ensure it's an integer

    const productNameEl = document.getElementById('product-name');
    const productImageEl = document.getElementById('product-image');
    const productCategoryEl = document.getElementById('product-category');
    const productPriceEl = document.getElementById('product-price');
    const productDescriptionEl = document.getElementById('product-description');
    const howToBuyEl = document.getElementById('how-to-buy');
    const productDetailContainer = document.querySelector('.container.my-5'); // Main container for details
    const orderButton = document.getElementById('order-whatsapp-button');


    if (typeof productsData === 'undefined') {
        console.error("productsData is not defined. Make sure data.js is loaded before product-detail.js");
        if (productDetailContainer) {
            productDetailContainer.innerHTML = '<p class="text-center text-danger">Error: Product data is missing. Please try again later.</p>';
        }
        return;
    }

    if (!productId || isNaN(productId)) {
        console.error("Product ID is missing or invalid from URL.");
        if (productDetailContainer) {
            productDetailContainer.innerHTML = '<p class="text-center text-warning">Product ID not found in URL. Please select a product from the list.</p>';
        }
        return;
    }

    // Find the product by ID
    const product = productsData.find(p => p.id === productId);

    if (product) {
        // Populate the HTML elements
        document.title = `${product.name} - Raysa Kue`; // Update page title
        
        if (productNameEl) productNameEl.textContent = product.name;
        if (productImageEl) {
            productImageEl.src = product.image;
            productImageEl.alt = product.name;
        }
        if (productCategoryEl) productCategoryEl.textContent = product.category;
        if (productPriceEl) productPriceEl.textContent = `Rp ${product.price.toLocaleString()}`;
        
        if (productDescriptionEl) {
            // Using textContent to prevent potential XSS if description contained HTML
            productDescriptionEl.textContent = product.description || `Detailed information about ${product.name}. This product is one of our best sellers, known for its quality and taste.`;
        }
        if (howToBuyEl) {
            // Using textContent for safety
            howToBuyEl.textContent = product.howToBuy || `To order ${product.name}, please contact us via WhatsApp or visit our store. We offer various payment and delivery options.`;
        }

        if (orderButton) {
            const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with actual number, e.g., 6281234567890
            orderButton.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo, saya tertarik untuk memesan ${product.name}.`)}`;
        }

    } else {
        // Product not found
        console.warn(`Product with ID ${productId} not found.`);
        if (productDetailContainer) {
            productDetailContainer.innerHTML = `<p class="text-center text-danger">Maaf, produk dengan ID ${productId} tidak ditemukan. Silakan kembali ke <a href="produk.html">halaman produk</a>.</p>`;
        }
    }
});
