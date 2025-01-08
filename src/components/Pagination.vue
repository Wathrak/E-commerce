<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="$emit('change-page', currentPage - 1)">
      &lt;
    </button>
    <button
      v-for="page in totalPages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="$emit('change-page', page)"
    >
      {{ page }}
    </button>
    <button :disabled="currentPage === totalPages" @click="$emit('change-page', currentPage + 1)">
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: Number,
    currentPage: Number,
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}
button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  border-radius: 5px;
}
button.active {
  background: black;
  color: white;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
