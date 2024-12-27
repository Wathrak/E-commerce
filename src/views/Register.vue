<template>
  <div
    :class="['bg-[#5C566E] p-16', isDarkMode ? 'bg-[#5C566E]' : 'bg-[#ffffff]']"
  >
    <div @click="darkMode" class="absolute right-1 top-0">
      <button>
        <Icon
          icon="iconoir:sun-light"
          width="24"
          height="24"
          :style="[isDarkMode ? 'color: white' : 'color: black']"
        />
      </button>
    </div>

    <div
      :class="[
        'register-container  rounded-lg',
        isDarkMode ? 'bg-[#2C2638]' : 'bg-[#ffffff]',
      ]"
    >
      <div class="flex-1 m-10 rounded-xl overflow-hidden h-[95%]">
        <img src="@/assets/images/Ferraricar.png" alt="pic" />
      </div>
      <div class="flex-1">
        <div
          :class="[
            'flex flex-col items-center',
            isDarkMode ? 'text-white' : 'text-black',
          ]"
        >
          <form
            @submit.prevent="handleSubmit"
            class="form w-[60%] gap-4 flex flex-col"
          >
            <h1
              :class="[
                'text-4xl text-start',
                isDarkMode ? 'text-white' : 'text-black',
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
                  isDarkMode ? 'text-[#BEABF2]' : 'text-[#7349e6]',
                ]"
                >Log in</RouterLink
              >
            </div>

            <div class="flex gap-3">
              <div class="form-group">
                <input
                  type="text"
                  id="first-name"
                  placeholder="First name"
                  required
                />
              </div>

              <div class="form-group">
                <input
                  type="text"
                  id="last-name"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <input
                type="text"
                id="phone-number"
                placeholder="Phone number"
                required
              />
            </div>

            <!-- <div class="form-group">
              <input type="email" id="email" placeholder="Email" required />
            </div> -->

            <div class="form-group">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>

            <div class="flex">
              <input
                type="checkbox"
                class="align-middle mr-1"
                id="exampleCheck1"
              />
              <div class="flex items-center">
                <label class="text-xs" for="exampleCheck1"
                  >I agree to the
                </label>
                <div
                  :class="[
                    'text-xs underline self-center mx-2',
                    isDarkMode ? 'text-[#BEABF2]' : 'text-[#7349e6]',
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
              :class="['flex gap-3', isDarkMode ? 'text-white' : 'text-black']"
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
export default {
  name: 'RegisterPage',
  data() {
    return {
      gender: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',

      isDarkMode: false,
    }
  },
  methods: {
    darkMode() {
      this.isDarkMode = !this.isDarkMode
      // console.log('Light Mode:', this.isDarkMode)
    },

    handleSubmit() {
      if (
        !this.gender ||
        !this.firstName ||
        !this.lastName ||
        !this.mobileNumber ||
        !this.email ||
        !this.cityProvince
      ) {
        alert('Please fill in all required fields.')
        return
      }
      console.log('Gender:', this.gender)
      console.log('First Name:', this.firstName)
      console.log('Last Name:', this.lastName)
      console.log('Mobile Number:', this.mobileNumber)
      console.log('Email:', this.email)
      console.log('Country:', this.country)
      console.log('City/Province:', this.cityProvince)
    },
    loginWithGoogle() {
      console.log('Login with Google clicked.')
    },
    loginWithFacebook() {
      console.log('Login with Facebook clicked.')
    },
    navigateToLogin() {
      console.log('Navigate to Login page.')
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
