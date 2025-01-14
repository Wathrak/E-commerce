<template>
  <div class="bg-white w-[400px] h-screen flex flex-col gap-5 p-5 font-semibold">
    <div class="flex text-3xl font-bold text-gray-600 pt-5 pb-5 justify-between">
      <button @click="closeCart">X</button>
      <div>Cart</div>
      <button>
        <Icon icon="lucide:heart" class="w-6 h-6" />
      </button>
    </div>
    <hr />
    <!-- Cart Items -->
    <div v-if="cartItems.length > 0" class="flex flex-col gap-4 flex-1 overflow-y-auto">
      <div v-for="(item, index) in cartItems" :key="index" class="flex items-center justify-between border-b pb-4">
        <img :src="item.image" alt="Product Image" class="w-16 h-16 rounded-md" />
        <div class="flex-1 px-4">
          <!-- Product Title with fallback for missing name -->
          <h3 class="text-lg font-medium">{{ item.name || "Product" }}</h3>
          <div class="flex items-center justify-between text-sm text-gray-500 mt-1">
            <!-- Size Selection Dropdown -->
            <div class="flex items-center">
              <label for="size" class="mr-2 text-gray-700">Size:</label>
              <select
                v-model="item.size"
                @change="updateItemSize(index, item.size)"
                class="size-dropdown border rounded-md px-2 py-1 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option v-for="size in ['S', 'M', 'L', 'XL', 'XXL']" :key="size" :value="size">{{ size }}</option>
              </select>
            </div>
            <div class="flex items-center gap-3">
              <button @click="decreaseQuantity(index)" :disabled="item.quantity <= 1" class="quantity-button">-</button>
              <span class="quantity-text">{{ item.quantity }}</span>
              <button @click="increaseQuantity(index)" class="quantity-button">+</button>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <!-- Trash button with hover effect and confirmation dialog -->
          <button @click="confirmRemoveItem(index)" class="trash-button flex justify-between items-center text-lg font-bold mt-2" aria-label="Remove item">
            <Icon icon="mdi:trash-can-outline" class="w-6 h-6 hover:text-red-500 transition-colors" />
          </button>
        </div>
      </div>
      <div class="flex justify-between text-lg font-bold mt-2">
        <p>Price:</p>
        <p style="color:red;">${{ cartTotal.toFixed(2) }}</p>
      </div>
    </div>

    <!-- Empty Cart Message -->
    <div v-else class="flex flex-col items-center text-center mt-4">
      <h2 class="text-2xl font-medium text-gray-700">Your bag is empty</h2>
      <p class="text-gray-500 mb-8">
        Check out our latest arrivals to stay up-to-date with the latest styles.
      </p>
      <div class="w-full space-y-3">
        <h3 class="text-xl font-medium mb-4">Start Shopping!!</h3>
        <div class="flex justify-center">
          <div class="flex flex-col gap-3 w-full">
            <button @click="handleButtonClick('/browse/wall-decor')" class="button">Wall Decor</button>
            <button @click="handleButtonClick('/browse/lamps')" class="button">Lamp</button>
            <button @click="handleButtonClick('/browse/furnitures')" class="button">Furniture</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Cart Summary -->
    <div v-if="cartItems.length > 0" class="mt-auto">
      <hr class="mb-4" />
      <div class="flex justify-between text-lg">
        <p>Total:</p>
        <p>${{ cartTotal.toFixed(2) }}</p>
      </div>
      <div class="flex justify-between text-sm text-gray-500">
        <p>Save:</p>
        <p>$0.00</p>
      </div>
      <div class="flex justify-between text-sm text-gray-500">
        <p>Delivery fee:</p>
        <p>${{ deliveryFee.toFixed(2) }}</p>
      </div>
      <div class="flex justify-between text-lg font-bold mt-2">
        <p>Amount to pay:</p>
        <p>${{ (cartTotal + deliveryFee).toFixed(2) }}</p>
      </div>
      <button class="button mt-4" @click="proceedToCheckout">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useCartStore } from '@/store/cartstores';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/store';
import { computed } from 'vue';

const productStore = useProductStore();
const cartStore = useCartStore();
const router = useRouter();

const cartItems = cartStore.cartItems;

// Compute the total price of items in the cart
const cartTotal = computed(() => {
  return cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantity, 10) || 0;
    return total + price * quantity;
  }, 0);
});

// Fixed delivery fee
const deliveryFee = 0.99;

const closeCart = () => {
  productStore.closeCart();
};

const handleButtonClick = (route) => {
  closeCart();
  router.push(route);
};

const increaseQuantity = (index) => {
  const item = cartItems[index];
  item.quantity = parseInt(item.quantity, 10) + 1 || 1; // Ensure valid quantity
  cartStore.updateCartItem(index, item);
};

const decreaseQuantity = (index) => {
  const item = cartItems[index];
  item.quantity = Math.max(parseInt(item.quantity, 10) - 1 || 1, 1); // Prevent negative
  cartStore.updateCartItem(index, item);
};

// Confirm before removing an item
const confirmRemoveItem = (index) => {
  if (window.confirm('Are you sure you want to remove this item from your cart?')) {
    cartStore.removeItem(index);
  }
};

const proceedToCheckout = () => {
  closeCart();
  router.push('/checkout');
};

// Update the size of an item in the cart
const updateItemSize = (index, newSize) => {
  const item = cartItems[index];
  item.size = newSize;
  cartStore.updateCartItem(index, item);
};
</script>

<style scoped>
.button {
  background-color: black;
  color: white;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 0.3125rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1.2;
  width: 100%;
  max-width: 85%;
  min-width: 75%;
  margin-inline: auto;
}

.size-dropdown {
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.25rem 0.6rem;
  font-size: 0.875rem;
  background-color: #fff;
  color: #4b5563;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 70px;
}

.size-dropdown:hover {
  border-color: #4b5563;
}

.size-dropdown:focus {
  outline: none;
  border-color: #4b5563;
  box-shadow: 0 0 0 2px rgba(156, 163, 175, 0.5);
}

.quantity-button {
  background-color: #f0f0f0;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 30px;
  height: 30px;
}

.quantity-button:hover {
  background-color: #e0e0e0;
}

.quantity-button:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}

.quantity-text {
  font-size: 1rem;
  margin: 0 rem;
}

.trash-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, color 0.3s ease;
}

.trash-button:hover {
  transform: scale(1.1);
  color: red;
}
</style>
