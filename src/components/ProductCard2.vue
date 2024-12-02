<template>
  <div class="container justify-center">
    <div v-for="(item, index) in items" :key="index" class="grid-item">
      <div
        class="image-container flex flex-col items-center justify-end h-[380px] w-[300px]"
        :style="{ 'background-image': `url(${item.imgUrl})` }"
      >
        <button class="image1">ADD TO CART</button>
      </div>
      <div>{{ item.title }}</div>
      <div class="text-gray-400 text-sm">{{ item.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          imgUrl: '../src/assets/images/glasspainting1.png',
          title: "Nature's Poetry Crystal Glass Paintings",
          price: 'KHR. 100,000',
        },
        {
          imgUrl: '../src/assets/images/glasspainting2.png',
          title: "Nature's Poetry Crystal Glass Paintings",
          price: 'KHR. 120,000',
        },
        {
          imgUrl: '../src/assets/images/glasspainting3.png',
          title: "Nature's Poetry Crystal Glass Paintings",
          price: 'KHR. 110,000',
        },
        {
          imgUrl: '../src/assets/images/glasspainting4.png',
          title: "Nature's Poetry Crystal Glass Paintings",
          price: 'KHR. 130,000',
        },
        {
          imgUrl: '../src/assets/images/glasspainting5.png',
          title: "Nature's Poetry Crystal Glass Paintings",
          price: 'KHR. 140,000',
        },
        {
          imgUrl: '../src/assets/images/glasspainting6.png',
          title: "Nature's Poetry Crystal Glass Paintings",
          price: 'KHR. 150,000',
        },
      ],
    }
  },
}
</script>

<style>
.container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  justify-self: center;
  padding: 10px;
}
.grid-item {
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  text-align: start;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.image1 {
  display: none;
  width: inherit;
  color: white;
  background-color: #b37879;
  text-align: center;
  padding: 5px;
}
.image-container {
  background-size: 100%;
}
.image-container:hover .image1 {
  display: block;
}
</style>
