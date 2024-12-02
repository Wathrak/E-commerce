<template>
  <div class="border-b border-gray-200">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Left Navigation -->
        <div class="flex items-center space-x-8">
          <a href="/browse" class="text-gray-800 hover:text-gray-600"
            >WALL DECOR</a
          >
          <a href="/browse" class="text-gray-800 hover:text-gray-600"
            >FUNITURES</a
          >
          <a href="/browse" class="text-gray-800 hover:text-gray-600">LAMPS</a>
        </div>

        <!-- Logo -->
        <div class="text-2xl font-serif">
          <RouterLink to="/">PTES SART</RouterLink>
        </div>

        <!-- Right Navigation -->
        <div class="flex items-center space-x-6">
          <div class="relative">
            <input
              type="search"
              placeholder="Search"
              class="pl-3 pr-10 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <SearchIcon
              class="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
            />
          </div>
          <BellIcon class="h-6 w-6 text-gray-700" />
          <HeartIcon class="h-6 w-6 text-gray-700" />
          <ShoppingBagIcon class="h-6 w-6 text-gray-700" />
          <a href="/login" class="text-sm font-medium">LOGIN</a>
          <a href="/register" class="text-sm font-medium">REGISTER</a>
        </div>
      </div>
    </nav>
  </div>
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
