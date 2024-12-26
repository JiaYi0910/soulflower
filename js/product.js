function loadCustomFont() {
    const style = document.createElement('style');
    style.innerHTML = `
        @font-face {
    font-family: 'LXGWWenKai';
    src: url('../fonts/LXGWWenKai-Medium.ttf') format('truetype');
    }
    `;
    document.head.appendChild(style);

    // 設置頁面字體
    document.body.style.fontFamily = 'LXGWWenKai, sans-serif';
}

loadCustomFont();


// 將商品添加到購物車
function addToCart(productId) {
    // 確保抓取到的元素存在
    const productNameElement = document.getElementById("product-name-" + productId);
    const productPriceElement = document.getElementById("price-" + productId);
    const quantityElement = document.getElementById("quantity-" + productId);

    // 如果元素不存在，退出函數並顯示錯誤
    if (!productNameElement || !productPriceElement || !quantityElement) {
        console.error("商品元素不存在或 id 錯誤");
        return;
    }

    // 獲取商品名稱、價格和數量
    const productName = productNameElement.innerText;
    const productPrice = parseFloat(productPriceElement.innerText);
    const quantity = parseInt(quantityElement.value);

    // 確保數量為有效數字
    if (quantity <= 0 || isNaN(quantity)) {
        alert("請輸入有效的數量！");
        return;
    }

    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: quantity,
        total: productPrice * quantity
    };

    // 從 localStorage 獲取現有購物車
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // 檢查購物車中是否已有該商品（根據 ID 判斷）
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    if (existingProductIndex !== -1) {
        // 如果商品已經在購物車中，則更新數量和小計
        cart[existingProductIndex].quantity += quantity;
        cart[existingProductIndex].total = cart[existingProductIndex].price * cart[existingProductIndex].quantity;
    } else {
        // 如果商品不在購物車中，則新增該商品
        cart.push(product);
    }

    // 將購物車保存到 localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // 顯示成功提示
    alert(`${productName} 已成功加入購物車！`);

    // 更新購物車頁面
    updateCart();
}

// 更新購物車頁面
function updateCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById('cart');
    const emptyMessage = document.getElementById('empty-cart-message');
    const totalPriceElement = document.getElementById('total-price');
    const successMessage = document.getElementById('checkout-success-message');

    // 清空現有購物車顯示
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        emptyMessage.style.display = 'block'; // 顯示空購物車訊息
        totalPriceElement.innerText = '0'; // 總計為0
        successMessage.style.display = 'none'; // 隱藏結帳成功訊息
        cartContainer.style.display = 'none'; // 隱藏商品列表
    } else {
        emptyMessage.style.display = 'none'; // 隱藏空購物車訊息
        cartContainer.style.display = 'block'; // 顯示商品列表

        let total = 0;

        cart.forEach(product => {
            // 顯示商品名稱和價格
            const productElement = document.createElement('div');
            productElement.className = 'cart-product';
            productElement.innerHTML = `
                <p>${product.name}</p>
                <p>數量: ${product.quantity}</p>
                <p>總計: ${product.total.toFixed(2)} USD</p>
            `;
            cartContainer.appendChild(productElement);

            total += product.total;
        });

        // 顯示總金額
        totalPriceElement.innerText = total.toFixed(2);
    }
}


// 刪除商品
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (index < 0 || index >= cart.length) {
        console.error("無效的商品索引");
        return;
    }

    // 移除商品
    cart.splice(index, 1);

    // 更新 localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // 重新更新購物車頁面
    updateCart();
}


// 結帳功能
function checkout() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const successMessage = document.getElementById('checkout-success-message');

    if (cart.length === 0) {
        alert("購物車內沒有商品，無法結帳！");
        return;
    }

    const total = cart.reduce((sum, product) => sum + product.total, 0);

    // 清空購物車數據
    localStorage.setItem("cart", JSON.stringify([]));

    // 更新購物車頁面以顯示「沒有商品」
    updateCart();

    // 顯示結帳成功訊息
    successMessage.innerText = `結帳成功！總金額為 ${total.toFixed(2)} USD。感謝您的購買！`;
    successMessage.style.display = 'block'; // 顯示成功訊息

    // 提示用戶
    alert("結帳成功！");
}

// 載入頁面時自動更新購物車
window.onload = function() {
    updateCart();
};


