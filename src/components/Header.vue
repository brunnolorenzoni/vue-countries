<script>
  export default {
    name: 'HeaderComponent'
  }
</script>

<template>
  <header id="header" class="bg-dark" >
    <nav class="navbar navbar-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href="/">
          <img
            src="../assets/logo.png"
            class="me-2 align-middle"
            height="20"
            alt="Vue Countries Logo"
            loading="lazy"
          />
          <h1 class="h4 m-0 d-inline align-middle">Vue Countries</h1>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  #header {
    height: 60px;
  }
</style>