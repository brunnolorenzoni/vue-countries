<script>
  import HeaderComponent from '@/components/HeaderComponent'

  export default {
    name: 'App',
    components: { HeaderComponent }
  }
</script>

<template>
  <HeaderComponent />
  <main id="main" class="p-1 bg-light">
    <router-view />
  </main>
</template>

<style>
  #app {
    overflow: hidden;
    height: 100vh;
  }
  #main {
    height: calc(100% - 60px); /*height - header height*/
  }
</style>