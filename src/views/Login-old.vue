<template>
  <div class="login-container">
    <div class="login-form">
      <h1>LOGIN</h1>
      <form @submit.prevent="handleSubmit">
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

        <!-- Password -->
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter password"
            required
          />
        </div>

        <!-- Login Button -->
        <button type="submit" class="login-button">LOGIN</button>
      </form>

      <!-- Forgot Password -->
      <a href="#" class="forgot-password" @click.prevent="handleForgotPassword">
        Forgot your password?
      </a>

      <!-- Divider -->
      <div class="or-divider">OR</div>

      <!-- Social Login Buttons -->
      <button class="social-button google" @click.prevent="loginWithGoogle">
        Continue with Google
      </button>
      <button class="social-button facebook" @click.prevent="loginWithFacebook">
        Continue with Facebook
      </button>

      <!-- Register Link -->
      <p class="register-link">
        New to Ptes Sart?
        <a href="http://localhost:5173/register" @click.prevent="handleRegister"
          >Register</a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      mobileNumber: '',
      password: '',
    }
  },
  methods: {
    handleSubmit() {
      // Basic validation for empty fields
      if (!this.mobileNumber || !this.password) {
        alert('Please fill in all fields.')
        return
      }
      // Handle login logic (e.g., API call)
      console.log('Mobile Number:', this.mobileNumber)
      console.log('Password:', this.password)
      // Redirect or display success message
    },
    handleForgotPassword() {
      // Logic for forgot password (e.g., navigate to a reset page)
      console.log('Forgot password clicked')
    },
    loginWithGoogle() {
      // Logic for Google login
      console.log('Google login clicked')
    },
    loginWithFacebook() {
      // Logic for Facebook login
      console.log('Facebook login clicked')
    },
    handleRegister() {
      // Logic for register navigation
      console.log('Register clicked')
    },
  },
}
</script>
<style scoped>
/* General Container */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

/* Login Form */
.login-form {
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Form Group */
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
input[type='password'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

/* Buttons */
button {
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.login-button {
  background-color: #050505;
  color: white;
  margin-top: 8px;
}

.social-button {
  width: 100%;
  margin-top: 8px;
}

.google {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
}

.facebook {
  background-color: white;
  color: black;
  border: 1px solid #ccc;
}

/* Forgot Password */
.forgot-password {
  display: inline-block;
  margin-top: 8px;
  color: #007bff;
  cursor: pointer;
}

/* Divider */
.or-divider {
  margin: 20px 0;
  font-size: 14px;
  color: #888;
}

/* Register Link */
.register-link {
  margin-top: 20px;
  font-size: 14px;
}
.register-link a {
  color: black;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}
</style>
