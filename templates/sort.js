function sortProductsByName() {
    const productContainer = document.querySelector('.product-list');
    const products = Array.from(productContainer.querySelectorAll('.product-card'));

    products.sort((a, b) => {
        const titleA = a.getAttribute('data-title').toUpperCase();
        const titleB = b.getAttribute('data-title').toUpperCase();
        return titleA.localeCompare(titleB);
    });

    products.forEach(product => productContainer.appendChild(product));
}

function sortProductsByPrice() {
    const productContainer = document.querySelector('.product-list');
    const products = Array.from(productContainer.querySelectorAll('.product-card'));

    products.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute('data-price'));
        const priceB = parseFloat(b.getAttribute('data-price'));
        return priceA - priceB;
    });

    products.forEach(product => productContainer.appendChild(product));
}
