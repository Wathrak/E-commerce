<template>
  <div class="thumbnail-list bg-red-400">
    <img
      v-for="(thumb, index) in thumbnails"
      :key="index"
      :src="thumb"
      @click="setMainImage(thumb)"
      :class="{ active: thumb === mainImage }"
    />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.thumbnail-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100px;
}
.thumbnail-list img {
  width: 60px;
  height: 60px;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 8px;
}
.thumbnail-list img.active {
  border-color: #000;
}
</style>
