<template>
  <header>
    <div>
      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/browse">Browse</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <RouterLink to="/">PTES SART</RouterLink>
        <input type="text" placeholder="Search" />
        <RouterLink to="/login">LOGIN</RouterLink>
        <RouterLink to="/register">REGISTER</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
export default {}
</script>

<style>
.nav-links a {
  text-decoration: none;
  color: inherit;
  margin: 0 10px;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f8f9fa;
}

.search-input {
  margin: 0 10px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
