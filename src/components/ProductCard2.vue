<template>
  <div class="container justify-center">
    <div>
      <router-link :to="to">
        <div
          class="image-container flex flex-col items-center justify-end h-[380px] w-[300px]"
          :style="{ 'background-image': `url(${item.imgUrl})` }"
        >
          <router-link :to="toButton">
            <button class="image1">ADD TO CART</button>
          </router-link>
        </div>
      </router-link>
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
  /* gap: 20px; */
  justify-self: center;
  /* padding: 10px; */
}

.image1 {
  display: none;
  color: white;
  background-color: #b37879;
  text-align: center;
  padding: 5px 100px 5px 100px;
}
.image-container {
  background-size: 100%;
}
.image-container:hover .image1 {
  display: block;
}
</style>
