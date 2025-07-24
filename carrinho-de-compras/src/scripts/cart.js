// filepath: /carrinho-de-compras/carrinho-de-compras/src/scripts/cart.js
const cart = [];

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

function increaseQuantity(productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity++;
        renderCart();
    }
}

function decreaseQuantity(productId) {
    const product = cart.find(item => item.id === productId);
    if (product && product.quantity > 1) {
        product.quantity--;
        renderCart();
    }
}

function removeFromCart(productId) {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex > -1) {
        cart.splice(productIndex, 1);
        renderCart();
    }
}

function clearCart() {
    cart.length = 0;
    renderCart();
}

function renderCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    cart.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'cart-item';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
            <div>
                <button onclick="decreaseQuantity(${product.id})">-</button>
                <span>${product.quantity}</span>
                <button onclick="increaseQuantity(${product.id})">+</button>
                <button onclick="removeFromCart(${product.id})">Remover</button>
            </div>
        `;
        cartContainer.appendChild(productElement);
    });

    const clearButton = document.createElement('button');
    clearButton.innerText = 'Limpar Carrinho';
    clearButton.onclick = clearCart;
    cartContainer.appendChild(clearButton);
}