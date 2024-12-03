<template>
  <div class="register-container">
    <div class="register-form">
      <h1>REGISTER</h1>
      <form @submit.prevent="handleSubmit">
        <!-- Gender -->
        <div class="form-group">
          <label for="gender">Gender (Required)</label>
          <div class="gender-radio">
            <input
              type="radio"
              id="male"
              value="male"
              v-model="gender"
              required
            />
            <label for="male">Male</label>
            <input
              type="radio"
              id="female"
              value="female"
              v-model="gender"
              required
            />
            <label for="female">Female</label>
          </div>
        </div>

        <!-- First Name -->
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            v-model="firstName"
            placeholder="Enter first name"
            required
          />
        </div>

        <!-- Last Name -->
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            v-model="lastName"
            placeholder="Enter last name"
            required
          />
        </div>

        <!-- Mobile Number -->
        <div class="form-group">
          <label for="mobile-number">Mobile Number</label>
          <input
            type="text"
            id="mobile-number"
            v-model="mobileNumber"
            placeholder="Enter phone number"
            required
          />
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter email"
            required
          />
        </div>

        <!-- Country -->
        <div class="form-group">
          <label for="country">Country</label>
          <select id="country" v-model="country" required>
            <option value="Cambodia">Cambodia</option>
            <!-- Add more countries if needed -->
          </select>
        </div>

        <!-- City/Province -->
        <div class="form-group">
          <label for="city-province">City/Province</label>
          <select id="city-province" v-model="cityProvince" required>
            <option value="">Select City/Province</option>
            <option v-for="city in cities" :key="city" :value="city">
              {{ city }}
            </option>
          </select>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-button">CREATE ACCOUNT</button>

        <!-- Social Login -->
        <div class="or-divider">OR</div>
        <button class="social-button google" @click.prevent="loginWithGoogle">
          Continue with Google
        </button>
        <button
          class="social-button facebook"
          @click.prevent="loginWithFacebook"
        >
          Continue with Facebook
        </button>
        <!-- Login Link -->
        <p class="login-link">
          Already have an account?
          <a href="/login" @click.prevent="navigateToLogin">Login</a>
        </p>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      gender: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      country: 'Cambodia',
      cityProvince: '',
      cities: ['Phnom Penh', 'Siem Reap', 'Battambang', 'Kampong Cham'], // Example list
    }
  },
  methods: {
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
  height: 100vh;
  background-color: #f5f5f5;
}

/* Form Styles */
.register-form {
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.form-group {
  margin-bottom: 16px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type='text'],
input[type='email'],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.gender-radio {
  display: flex;
  gap: 20px;
  align-items: center;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.submit-button {
  background-color: #007bff;
  color: white;
}

.social-button {
  width: 100%;
  margin-top: 10px;
}

.google {
  background-color: #db4437;
  color: white;
}

.facebook {
  background-color: #4267b2;
  color: white;
}

.or-divider {
  margin: 20px 0;
  font-size: 14px;
  color: #888;
}

.login-link {
  margin-top: 20px;
  font-size: 14px;
}
.login-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}
</style>
