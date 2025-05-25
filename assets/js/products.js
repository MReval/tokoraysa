// Function to display products
function displayProducts(productsToDisplay) {
    const productContainer = document.getElementById('product-container');
    if (!productContainer) {
        console.error("Product container not found!");
        return;
    }
    productContainer.innerHTML = ''; // Clear existing products

    if (productsToDisplay.length === 0) {
        productContainer.innerHTML = '<p class="text-center">Tidak ada produk yang cocok dengan kriteria Anda.</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = `
            <div class="col-md-4 col-sm-6 mb-4">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">Kategori: ${product.category}</p>
                        <p class="card-text">Harga: Rp ${product.price.toLocaleString()}</p>
                        <div class="mt-auto">
                            <a href="produk-detail.html?id=${product.id}" class="btn btn-primary">Detail</a>
                            <button class="btn btn-success ms-2" onclick="addToCart(${product.id})">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

// Function to sort products
function sortProducts(productsArray, sortOption) {
    const sortedProducts = [...productsArray]; 
    switch (sortOption) {
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
    }
    return sortedProducts;
}

// Function to filter products
function filterProducts(productsArray, category) {
    if (category === 'all') {
        return [...productsArray];
    }
    return productsArray.filter(product => product.category === category);
}

// Function to handle product updates (filtering and sorting)
function updateDisplayedProducts() {
    const sortSelect = document.getElementById('sort-select');
    const filterCategorySelect = document.getElementById('filter-category');

    if (!sortSelect || !filterCategorySelect) {
        console.error("Sort or filter select element not found!");
        return;
    }

    // Use productsData from data.js (assuming it's loaded globally)
    if (typeof productsData === 'undefined') {
        console.error("productsData is not defined. Make sure data.js is loaded before products.js");
        return;
    }

    const selectedSortOption = sortSelect.value;
    const selectedCategory = filterCategorySelect.value;

    let filtered = filterProducts(productsData, selectedCategory);
    let sortedAndFiltered = sortProducts(filtered, selectedSortOption);

    displayProducts(sortedAndFiltered);
}

// Initial display and event listeners
document.addEventListener('DOMContentLoaded', () => {
    const sortSelect = document.getElementById('sort-select');
    const filterCategorySelect = document.getElementById('filter-category');

    if (sortSelect && filterCategorySelect) {
        sortSelect.addEventListener('change', updateDisplayedProducts);
        filterCategorySelect.addEventListener('change', updateDisplayedProducts);
        
        updateDisplayedProducts(); 
    } else {
        console.warn("Sorting/filtering controls not found. Displaying all products without sorting/filtering.");
        // Fallback if productsData is available but controls are not
        if (typeof productsData !== 'undefined') {
            displayProducts(productsData);
        } else {
            console.error("productsData is not defined. Cannot display products.");
        }
    }
});
