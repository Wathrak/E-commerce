<template>
  <transition name="fade">
    <div class="modal-overlay" v-if="show">
      <div class="modal">

        <div class="modal-header">
          <h2>Address Book</h2>
          <button @click="hideDialog" class="close-button">&times;</button>
        </div>

        <div class="divider"></div>

        <div class="modal-content">
          <!-- <form @submit.prevent="submitAddress">
            <div class="form-group">
              <label for="recipientName">Recipient Name:</label>
              <input type="text" id="recipientName" v-model="recipientName" required>
            </div>
            <div class="form-group">
              <label for="deliveryAddress">Delivery Address:</label>
              <input type="text" id="deliveryAddress" v-model="deliveryAddress" required>
            </div>
            <div class="form-group">
              <label for="phoneNumber">Phone Number:</label>
              <input type="tel" id="phoneNumber" v-model="phoneNumber" required>
            </div>
            <div class="form-group">
              <label for="notes">Additional Notes:</label>
              <textarea id="notes" v-model="notes"></textarea>
            </div>
            <div class="button-group">
              <button type="button" @click="clearForm">Cancel</button>
              <button type="submit">Save</button>
            </div>
          </form> -->
        </div>

        <div class="modal-footer">
          <!-- Button placed outside the form for full-width display at the bottom of the modal -->
          <button class="full-width-button"  @click="showAddressPopup">Add new address</button>
        </div>
        <AddressPopup :isPopupShown="isPopupShown" @close="closeAddressPopup" />
      </div>
    </div>
  </transition>
</template>

<script>

import AddressPopup from '../components/AddressPopup.vue';

export default {
  name: 'AddressDialog',
  components: {
    AddressPopup
  },
  props: ['show'],
  data() {
    return {
      isPopupShown: false,
      recipientName: '',
      deliveryAddress: '',
      phoneNumber: '',
      notes: '',
    };
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
      this.clearForm();
    },
    submitAddress() {
      // Implement your submission logic here
      this.hideDialog();
    },
    clearForm() {
      this.recipientName = '';
      this.deliveryAddress = '';
      this.phoneNumber = '';
      this.notes = '';
    },
    showAddressPopup() {
      console.log("Opening popup");
      this.isPopupShown = true;  // Method to show the popup
    },
    closeAddressPopup() {
      console.log("Closing popup");
      this.isPopupShown = false; // Method to hide the popup
    }
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0; 
}

.modal-overlay {
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #00000040;
  z-index: 1000;
}

.modal {
  display: flex;
  flex-direction: column; /* Stacks children vertically */
  justify-content: space-between; /* Separates content and button */
  height: 100vh;
  width: 500px;
  max-width: 500px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden; /* Keeps everything within the bounds of border-radius */
}

.modal-content {
  flex-grow: 1; /* Allows the content to expand and fill the space */
  overflow-y: auto; /* Enables scrolling within the content area if needed */
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.modal-header h2 {
  flex-grow: 1; /* Allows the title to take up any extra space */
  text-align: center; /* Centers the title text */
  margin: 0; /* Removes any default margin */
}

.modal-footer {
  width: 100%;
  padding-bottom: 35px;
}

.full-width-button {
  width: 100%;
  padding: 12px 20px;
  background-color: #212529;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px; /* Ensures space between the form and the button */
}

.close-button {
  border: none;
  background: none;
  font-size: 40px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 20px; /* Increased margin for better spacing */
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.divider {
  border-bottom: 1px solid #A7ABAE;
  width: 100%;
}

</style>
