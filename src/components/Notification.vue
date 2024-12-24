<template>
  <div class="bg-white w-[400px] h-screen flex flex-col gap-5 sticky">
    <div class="flex text-2xl font-bold text-gray-600 p-5 justify-between">
      <div>Notifications</div>
      <div>X</div>
    </div>
    <hr />

    <div class="flex">
      <Icon icon="mdi:bell-outline" width="24" height="24" />
      <div>Looking For Modern Painting?</div>
    </div>
    <div>Come and check our last arrival</div>

    <button class="button">Wall Decor</button>

    <hr />

    <div class="flex">
      <Icon icon="mdi:bell-outline" width="24" height="24" />
      <div class="font-semibold">Happy New Year with 10% Discount</div>
    </div>
    <div>Special Discount on Wall Decor and Furniture!!</div>

    <div class="flex">
      <button class="button w-[50%]">Wall Decor</button>
      <button class="button w-[50%]">Wall Decor</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.button {
  background-color: black;
  color: white;
  font-weight: 500;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>
