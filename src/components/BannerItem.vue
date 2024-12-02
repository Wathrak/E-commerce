<template>
  <div class="flex w-[270px] self-center">
    <div class="p-2">
      <svg
        class="size-8"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#A2A2A2"
      >
        <path :d="logo" />
      </svg>
    </div>

    <div class="flex flex-col items-start">
      <div class="text-md">{{ title }}</div>
      <div class="text-sm text-gray-400">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'desc', 'logo'],
}
</script>

<style></style>
