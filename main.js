
// import { clearCart } from "./clearCart";

const productDiv = document.getElementById('product-list');
const dataUrl = './src/assets/data/products.json';

fetchProducts()
async function fetchProducts() {
    let response = await fetch(dataUrl);
    let data = await response.json();
    displayProducts(data);
    productData(data);

}

function displayProducts(data) {
    // console.log(data)
    data.map(element => {

        productDiv.innerHTML += `
            <div class="rounded-xl bg-slate-50 border border-slate-100 p-3 hover:shadow-xl hover:border hover:border-stone-200 duration-300">
                <div class="flex items-end overflow-hidden rounded-xl bg-white">
                    <img class="p-5" src="${element.image}" alt="" />
                </div>

                <div class="mt-1 p-2">
                    <h2 class="text-slate-700 font-semibold font-Poppins">${element.title}</h2>
                    <p class="md:h-20 mt-1 text-sm text-slate-500">${element.description}</p>

                    <div class="flex items-center justify-between mt-4">
                        <p class="font-Poppins text-lg font-bold text-barbiePink">
                        $<span>${element.price}</span>
                        </p>
                        <div class="flex justify-center items-center w-32 rounded-lg bg-barbiePink px-4 py-1.5 text-white duration-100 hover:bg-candyGreen">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <button onClick="addToCart(${element.id})" class="addToCart text-sm">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
}

function productData(data) {
    return products = data;
}

let cartItems = [];

function addToCart(id) {
    const selectedItem = products.find(product => product.id === id);

    const existingProduct = cartItems.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity++;
    }

    const index = cartItems.indexOf(existingProduct);
    if (index !== -1) {
        cartItems.splice(index, 1);
    }

    cartItems.push(selectedItem);

    const deliveryCharge = 10;
    document.getElementById('delivery-charge').innerText = `${deliveryCharge}`;

    // console.log(cartItems);
    const myCart = document.getElementById('cart-items');
    const cartItemCount = document.getElementById('cart-count');
    cartItemCount.innerText = cartItems.length === 1 ? `${cartItems.length} item in the cart` : `${cartItems.length} items in the cart`;
    myCart.innerHTML = '';

    cartItems.map((item) => {

        myCart.innerHTML += `
            <div>
                <div class="border-b pb-2  bg-slate-50">
                    <div class="px-2 pt-3 flex">
                        <div class="p-1 w-12">
                            <img src="${item.image}" alt="img product">
                        </div>
                        <div class="flex-auto text-sm w-32 ps-1">
                            <div class="font-bold truncate">${item.title}</div>
                            <div class="text-slate-500 text-sm">Product id: ${item.id}</div>
                            <div class="text-slate-500 text-sm">Unit Price: ${item.price}</div>
                        </div>
                        <div class="w-4 h-4 mb-6 hover:text-red-700 rounded-full cursor-pointer text-barbiePink">
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                    <div class="flex justify-between items-center px-3 py-2">
                        <div class="flex items-center">
                            <span class="text-slate-500 text-sm pr-2">Qty: ${item.quantity}</span>
                        </div>
                        <div class="w-18 font-medium items-end">
                            $<span>${item.quantity * item.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    })

    const subTotal = document.getElementById('sub-total');
    const subTotalAmount = cartItems.reduce((acc, product) => {
        const productTotal = product.price * product.quantity;
        return acc + productTotal;
    }, 0);
    subTotal.innerText = `${subTotalAmount}`;

    function applyPromoCode() {
        const promoCode = document.getElementById('promo-code');
        if (promoCode.value == 'RAIN') {
            const discount = Math.ceil(subTotalAmount * 0.1);
            const finalAmount = (subTotalAmount + deliveryCharge) - discount;
            const total = document.getElementById('total');
            total.innerText = `${finalAmount}`;
            const invalidText = document.getElementById('Invalid-promo');
            invalidText.classList.add('hidden');
        } else {
            const invalidText = document.getElementById('Invalid-promo');
            invalidText.classList.remove('hidden');
        }
    }

    function clearCart() {
        existingProduct.quantity = 1
        cartItems = [];
        console.log(cartItems);
        myCart.innerHTML = '';
        subTotal.innerText = '0';
        cartItemCount.innerText = 'No item in the cart';
    }

    document.getElementById('promo-code-btn').addEventListener('click', applyPromoCode);

    document.getElementById('clear-cart').addEventListener('click', clearCart);
}

