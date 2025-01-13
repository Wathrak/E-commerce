<template>
  <div class="carousel">
    <img v-for="(image, index) in images" :key="index" :src="image" :alt="'Carousel Image ' + (index + 1)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        'path/to/image3.jpg',
      ],
    };
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  overflow-x: auto;
  gap: 10px;
}
.carousel img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}
</style>
