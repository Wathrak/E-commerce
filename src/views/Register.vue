<template>
  <div
    :class="[
      'h-dvh self-center bg-[#5C566E] p-16',
      productStore.darkmode ? 'bg-[#5C566E]' : 'bg-[#ffffff]',
    ]"
  >
    <div @click="productStore.darkmodeToggle" class="absolute right-1 top-0">
      <button>
        <Icon
          icon="iconoir:sun-light"
          width="24"
          height="24"
          :style="[productStore.darkmode ? 'color: white' : 'color: black']"
        />
      </button>
    </div>

    <div
      :class="[
        'register-container  rounded-lg',
        productStore.darkmode ? 'bg-[#2C2638]' : 'bg-[#ffffff]',
      ]"
    >
      <div
        class="flex-1 m-10 rounded-xl overflow-hidden h-fit-content max-h-[450px]"
      >
        <img src="@/assets/images/Ferraricar.png" alt="pic" />
      </div>
      <div class="flex-1">
        <div
          :class="[
            'flex flex-col items-center',
            productStore.darkmode ? 'text-white' : 'text-black',
          ]"
        >
          <form
            @submit.prevent="handleSubmit"
            class="form w-[60%] gap-4 flex flex-col"
          >
            <h1
              :class="[
                'text-4xl text-start',
                productStore.darkmode ? 'text-white' : 'text-black',
              ]"
            >
              Create an account
            </h1>
            <!-- Login Link -->
            <div class="login-link text-start flex">
              <div class="text-base">Already have an account?</div>
              <RouterLink
                to="/login"
                :class="[
                  'underline self-center mx-2',
                  productStore.darkmode ? 'text-[#BEABF2]' : 'text-[#7349e6]',
                ]"
                >Log in</RouterLink
              >
            </div>

            <div class="flex gap-3">
              <div class="form-group">
                <input
                  v-model="firstName"
                  @input="saveToLocalStorage"
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  required
                />
              </div>

              <div class="form-group">
                <input
                  v-model="lastName"
                  @input="saveToLocalStorage"
                  type="text"
                  id="lastName"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <input
                v-model="phoneNumber"
                @input="saveToLocalStorage"
                type="text"
                id="phoneNumber"
                placeholder="Phone number"
                required
              />
            </div>

            <!-- <div class="form-group">
              <input type="email" id="email" placeholder="Email" required />
            </div> -->

            <div class="form-group">
              <input
                v-model="password"
                @input="saveToLocalStorage"
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>

            <div class="flex">
              <input
                v-model="terms"
                type="checkbox"
                class="align-middle mr-1"
                id="terms"
              />
              <div class="flex items-center">
                <label class="text-xs">I agree to the </label>
                <div
                  :class="[
                    'text-xs underline self-center mx-2',
                    productStore.darkmode ? 'text-[#BEABF2]' : 'text-[#7349e6]',
                  ]"
                >
                  Terms & Conditions
                </div>
              </div>
            </div>

            <button type="submit" class="submit-button">Create account</button>

            <!-- Social Login -->
            <div class="or-divider">Or register with</div>
            <div
              :class="[
                'flex gap-3',
                productStore.darkmode ? 'text-white' : 'text-black',
              ]"
            >
              <button
                class="social-button google"
                @click.prevent="loginWithGoogle"
              >
                <Icon icon="flat-color-icons:google" width="24" height="24" />
                <div class="ml-1">Google</div>
              </button>
              <button
                class="social-button facebook"
                @click.prevent="loginWithFacebook"
              >
                <Icon icon="logos:facebook" width="24" height="24" />
                <div class="ml-1">Facebook</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useProductStore } from '@/store'

export default {
  name: 'RegisterPage',

  setup() {
    const productStore = useProductStore()

    return {
      productStore,
    }
  },

  data() {
    return {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
      terms: false,
    }
  },
  methods: {
    handleSubmit() {
      if (
        !this.firstName ||
        !this.lastName ||
        !this.phoneNumber ||
        !this.password
      ) {
        alert('Please fill in all required fields.')
        return
      } else {
        if (this.terms != true) {
          alert('Please agree to the Terms & Conditions.')
          return
        }
        this.$router.push('/login')
      }

      // console.log('First Name:', this.firstName)
      // console.log('Last Name:', this.lastName)
      // console.log('Phone Number:', this.phoneNumber)
      // console.log('Terms:', this.terms)
    },

    saveToLocalStorage() {
      localStorage.setItem('firstName', this.firstName)
      localStorage.setItem('lastName', this.lastName)
      localStorage.setItem('phoneNumber', this.phoneNumber)
      localStorage.setItem('password', this.password)
    },

    loginWithGoogle() {
      console.log('Login with Google clicked.')
    },
    loginWithFacebook() {
      console.log('Login with Facebook clicked.')
    },
  },
}
</script>
<style scoped>
/* General Container */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 65px - 8rem); /* Adjusted for Navbar height 65px*/
}

/* Form Styles */
/* .register-form {
  width: 100%;
  max-width: 360px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
} */

.form input {
  background-color: #d4d4d8;
  border-color: #3b364b;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.login-tab,
.register-tab {
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
}

.register-tab.active {
  font-weight: bold;
  text-decoration: underline;
}

.close-button {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 8px;
  text-align: left;
}

.form-group.compact {
  margin-bottom: 6px;
}

.dual-input {
  display: flex;
  gap: 6px;
}

.dual-input input,
.dual-input select {
  flex: 1;
}

input[type='text'],
input[type='email'],
input[type='password'],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #3b364b;
  border-radius: 4px;
  font-size: 14px;
}

.gender-radio {
  display: flex;
  gap: 8px;
  justify-content: flex-start;
}

button {
  width: 100%;
  padding: 8px; /* Reduced from 12px */
  border: none;
  border-radius: 4px;
  font-size: 14px; /* Retained for readability */
  cursor: pointer;
}

.submit-button {
  background-color: #6e55b5;
  color: white;
  margin-top: 8px;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  padding: 8px; /* Reduced from 10px */
  border: 1px solid #aaa;
  border-radius: 4px;
  font-size: 13px; /* Slightly smaller text */
}

.google,
.facebook {
  padding: 8px; /* Reduced padding for smaller size */
}

.or-divider {
  margin: 10px 0;
  font-size: 12px;
  text-align: center;
}

.login-link {
  margin-top: 10px;
  font-size: 12px;
}
</style>
