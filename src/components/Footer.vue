<template>
  <footer class="footer text-start p-[60px]">
    <div class="flex flex-col gap-3 t1">
      <p class="text-[16px] font-semibold">Get in touch</p>
      <p class="text-[12px]">
        Russian Conf. Blvd. <br />
        Phnom Penh, Cambodia.
      </p>
      <p class="text-[12px]">+855 123 456 789</p>
      <p class="text-[12px]">ourteam@gmail.com</p>
      <div class="flex">
        <Icon icon="mdi:github" width="20px" class="mr-1" />
        <a href="https://github.com/Wathrak" class="text-[12px] underline">
          https://github.com/Wathrak
        </a>
      </div>
    </div>

    <div class="flex flex-col gap-3 t2">
      <p class="text-[16px] font-semibold">Information</p>
      <p class="text-[12px]">About Us</p>
      <p class="text-[12px]">Blog</p>
      <p class="text-[12px]">Contact Us</p>
      <p class="text-[12px]">Store Location</p>
    </div>

    <div class="flex flex-col gap-3 t3">
      <p class="text-[16px] font-semibold">Policies</p>
      <p class="text-[12px]">Return & Exchanges</p>
      <p class="text-[12px]">Privacy Policy</p>
      <p class="text-[12px]">Cancellations</p>
      <p class="text-[12px]">Shipping & Delivery</p>
      <p class="text-[12px]">Terms & Conditions</p>
    </div>

    <div class="flex w-10 h-5 gap-1 t4">
      <Icon icon="logos:visaelectron" class="bg-white" />
      <Icon icon="logos:visaelectron" />
      <img src="../assets/images/khqr.png" alt="icon" />
    </div>
  </footer>

  <div
    class="bg-[#0D0D0D] text-white flex justify-between items-center px-16 py-4"
  >
    <div class="b1 inline-flex flex-row">
      <div class="w-fit">© Copyright 2024 all rights reserved.</div>
    </div>

    <div class="b2 flex gap-5">
      <div>About Us</div>
      <div>Blog</div>
      <div>Contact Us</div>
      <div>Store Location</div>
    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue'
export default {
  components: { Icon },
}
</script>
<style scoped>
.footer {
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: black;
  color: white;
  margin-top: 20px;
  row-gap: 20px;
}
</style>
