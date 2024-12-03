<template>
  <transition name="fade-slide">
    <div class="popup-overlay" v-if="isPopupShown">
      <div class="popup-container">
        <button class="close-button" @click="closePopup">&times;</button>
        <h2>ADD NEW ADDRESS</h2>
        <form @submit.prevent="saveAddress">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">First name:</label>
              <input type="text" id="firstName" placeholder="Enter first name" v-model="firstName">
            </div>
            <div class="form-group">
              <label for="lastName">Last name:</label>
              <input type="text" id="lastName" placeholder="Enter last name" v-model="lastName">
            </div>
          </div>
          <div class="form-group">
            <label for="telephone">Telephone (Required):</label>
            <input type="tel" id="telephone" placeholder="+855 Enter mobile number" v-model="telephone">
          </div>
          <div class="form-group">
            <label for="address">Address (Required):</label>
            <input type="text" id="address" placeholder="Enter address" v-model="address">
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="country">Country (Required):</label>
              <select id="country" v-model="country">
                <option value="Cambodia">Cambodia</option>
              </select>
            </div>
            <div class="form-group">
              <label for="city">City/Province (Required):</label>
              <select id="city" v-model="city">
                <option value="Phnom Penh">Phnom Penh</option>
              </select>
            </div>
          </div>
          <button type="submit" class="save-button">Save Address</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AddressPopup',
  props: ['isPopupShown'],
  data() {
    return {
      firstName: '',
      lastName: '',
      telephone: '',
      address: '',
      country: 'Cambodia',
      city: 'Phnom Penh'
    };
  },
  methods: {
    closePopup() {
      this.$emit('close'); // Notify the parent
    },
    saveAddress() {
      // Validate the input data
      if (!this.firstName || !this.lastName || !this.telephone || !this.address) {
        alert('Please fill in all required fields');
        return;
      }
      // Here you would typically send the data to a server
      console.log('Saving address:', this.firstName, this.lastName, this.telephone, this.address, this.country, this.city);
      this.closePopup(); // Optionally close the popup after saving
    }
  },
};
</script>

<style scoped>

/* Animation Styles */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px); /* Slide in/out effect */
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-container {
  position: relative;
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
}

.form-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.form-group {
  flex: 1;
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 600;
}

input, select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.save-button {
  width: 100%;
  padding: 12px;
  background-color: #212529;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.save-button:hover {
  background-color: #000;
}
</style>
