<script>
  import Header from '@/components/Header'

  export default {
    name: 'App',
    components: { Header }
  }
</script>

<template>
  <Header />
  <main id="main" class="p-3">
    <router-view />
  </main>
</template>
