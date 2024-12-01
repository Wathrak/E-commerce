<template>
  <div class="features-list">
    <div class="feature" v-for="(feature, index) in features" :key="index">
      <i :class="feature.icon"></i>
      <p>{{ feature.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        { icon: 'fa fa-plane', text: 'Delivery within 7 Working Days' },
        { icon: 'fa fa-phone', text: 'Reach us via Email, Phone, WhatsApp' },
        { icon: 'fa fa-undo', text: '7 Days Return' },
        { icon: 'fa fa-lock', text: '100% Payment Secured' },
      ],
    };
  },
};
</script>

<style scoped>
.features-list {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
.feature {
  text-align: center;
  flex: 1;
  padding: 10px;
}
.feature i {
  font-size: 2rem;
  color: #555;
}
</style>
