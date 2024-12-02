<template>
  <div>
    <div class="img"></div>
  </div>
</template>
<script>
export default {}
</script>
<style>
.img {
  background-image: url('@/assets/images/clock.png');
  background-position: center;
  background-size: contain;
  width: auto;
  height: 565px;
  animation-name: next;
  animation-delay: 0s;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes next {
  0% {
    background-image: url('@/assets/images/clock.png');
  }
  20% {
    background-image: url('@/assets/images/clock.png');
  }

  25% {
    background-image: url('@/assets/images/showpieces.png');
  }
  45% {
    background-image: url('@/assets/images/showpieces.png');
  }

  50% {
    background-image: url('@/assets/images/console.png');
  }
  70% {
    background-image: url('@/assets/images/console.png');
  }

  75% {
    background-image: url('@/assets/images/pottery.png');
  }
  95% {
    background-image: url('@/assets/images/pottery.png');
  }
  100% {
    background-image: url('@/assets/images/clock.png');
  }
}
</style>
