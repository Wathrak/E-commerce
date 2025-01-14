<template>
  <div class="container justify-center">
    <div>
      <router-link :to="to">
        <div class="image-container">
          <img :src="item.imgUrl" alt="" />
          <button class="image1" @click="handleAddToBag">ADD TO CART</button>
        </div>
      </router-link>
      <div class="this"></div>
      <div>{{ item.title }}</div>
      <div class="text-gray-400 text-sm">{{ item.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    to: String,
    toButton: String,
  },
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-self: center;
}

.image1 {
  display: none;
  color: white;
  background-color: #b37879;
  text-align: center;
  padding: 5px 100px 5px 100px;
  position: absolute;
  bottom: 10px; /* Adjust position as needed */
}

.image-container {
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 300px;
  width: 300px;
  overflow: hidden;
  position: relative;
}

.image-container:hover .image1 {
  display: block;
  bottom: 0px;
}
</style>
