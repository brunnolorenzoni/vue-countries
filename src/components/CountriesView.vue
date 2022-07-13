<script>
  import CountryCard from '@/components/CountryCard'
  import LazyList from 'lazy-load-list/vue'
  
  export default {
    props: [
      'countries'
    ],
    components: { 
      CountryCard,
      LazyList
    },
  }
</script>

<template>
    <LazyList
      :data="countries"
      :itemsPerRender="10"
      container-classes="row mb-4"
      defaultLoadingColor="#212529"
    >
      <template v-slot="{item}">
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
          <CountryCard :country="item" />
        </div>
      </template>
    </LazyList>
</template>

<style>
  #container {
    width: auto;
  }
</style>