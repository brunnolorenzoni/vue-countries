<script>
  import Header from '@/components/Header'

  export default {
    name: 'App',
    components: { Header }
  }
</script>

<template>
  <Header />
  <main id="router-view" class="p-3">
    <Suspense>
      <template #fallback> Loading... </template>
      <router-view />
    </Suspense>
  </main>
</template>
