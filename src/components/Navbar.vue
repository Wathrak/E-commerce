<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">PTES SART</router-link>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/browse">Wall Decor</router-link></li>
      <li><router-link to="/browse">Furnitures</router-link></li>
      <li><router-link to="/browse">Lamps</router-link></li>
    </ul>
    <div class="auth-links">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.nav-links,
.auth-links {
  display: flex;
  list-style: none;
  gap: 20px;
}
.nav-links li a,
.auth-links a {
  text-decoration: none;
  color: #333;
}
.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
}
</style>
