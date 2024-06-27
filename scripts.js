function nextProduct(categoryId) {
    const category = document.getElementById(categoryId);
    const products = category.querySelector('.products');
    const totalProducts = products.children.length;
    let currentProduct = parseInt(products.getAttribute('data-current')) || 0;

    currentProduct = (currentProduct + 1) % totalProducts;
    products.style.transform = `translateX(-${currentProduct * 100}%)`;
    products.setAttribute('data-current', currentProduct);
}

function prevProduct(categoryId) {
    const category = document.getElementById(categoryId);
    const products = category.querySelector('.products');
    const totalProducts = products.children.length;
    let currentProduct = parseInt(products.getAttribute('data-current')) || 0;

    currentProduct = (currentProduct - 1 + totalProducts) % totalProducts;
    products.style.transform = `translateX(-${currentProduct * 100}%)`;
    products.setAttribute('data-current', currentProduct);
}
