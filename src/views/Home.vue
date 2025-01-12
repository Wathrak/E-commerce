<template>
  <div class="relative">
    <div class="text-center z-0">
      <LandingImage />
      <BannerItem />

      <div class="product-section m-5">
        <div class="product-grid flex justify-center">
          <ProductCard
            v-for="product in Products"
            :key="product.id"
            :product="product"
            :to="`/browse/${product.category}`"
          />
        </div>
      </div>

      <div class="flex flex-wrap gap-[20px] justify-center">
        <ProductCard2
          v-for="item in productStore.filteredItems"
          :key="item.id"
          :item="item"
          class="grid-item"
          :to="`/browse/${item.category}`"
          toButton="/checkout"
        />
      </div>

      <div class="text-start mx-36 my-20 text-gray-500">
        <div class="text-2xl font-bold my-4 text-black">
          Modern Home Decoration Items
        </div>
        <div>
          <div class="flex flex-col gap-y-5">
            <div>
              Home decoration items play an important role in transforming a
              house into an attractive home! An attractive home immediately sets
              the mood to unwind, relax and spend time with your loved ones.
            </div>
            <div>
              Home decor products also play a crucial role in setting up the
              mood and the environment of the space, which is why it is
              important to set up your interior space in line with what suits
              your character and personality.
            </div>
            <div>
              Before you begin your journey to buy home decor products online
              from our website, we highly recommend that you first understand
              the theme of your home. A clear understanding of the same enables
              you to make better choices that suit the needs of your family.
            </div>
            <div>
              All our products are painstakingly manufactured with top-quality
              raw materials and designed by the finest artisans you will find
              and made durable to last you a lifetime, making us one of the best
              home decor websites. We hope, every home decor item you purchase
              from us, finds a fitting place in your dream home!
            </div>
          </div>
          <div class="text-2xl font-bold text-black my-4">
            Explore Home Decor Items Available Online
          </div>
          <div>
            With us, find a plethora of home decor items online ranging from
            metal wall art, wall paintings, room decoration items, decorative
            wall mirrors, decorative showpieces, table lamps and accent
            furniture etc. We strive hard to bring the best house decor products
            online in India with a and hence are the top home decoration store
            online.
          </div>
          <div class="text-2xl font-bold text-black my-4">
            Get Home Decor Items Online At Best Price
          </div>
          <div>
            All home decoration items online sold at the Dekor Company are
            designed in line with international standards & specifications. We
            take pride in handpicking our home décor products which enables us
            to deliver the best products at competent prices to our patrons.
            With accurate pricing and guaranteed 7 day delivery, you can shop
            from our home decor online website from the comfort of your home and
            complete peace of mind. Not just that, we also take the “Price Match
            Guarantee” on any of our products that you may find for a cheaper
            price elsewhere!
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import BannerItem from '@/components/BannerItem.vue'
import Footer from '@/components/Footer.vue'
import LandingImage from '@/components/LandingImage.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductCard2 from '@/components/ProductCard2.vue'
import { useProductStore } from '@/store'
import { computed } from 'vue' // Import computed for reactivity

export default {
  name: 'HomePage',

  components: {
    BannerItem,
    ProductCard,
    LandingImage,
    ProductCard2,
    Footer,
  },

  setup() {
    const productStore = useProductStore()

    // Use computed properties to reactively watch the store state
    const Products = computed(() => productStore.products)
    const filteredItems = computed(() => productStore.filteredItems)

    return {
      productStore,
      Products,
      filteredItems,
    }
  },
}
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35%, 0.4fr));
  gap: 40px;
}

.grid-item {
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  text-align: start;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  width: fit-content;
}
</style>
