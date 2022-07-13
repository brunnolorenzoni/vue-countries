<script>
  import CountryCard from '@/components/CountryCard'
  
  export default {
    props: [
      'countries'
    ],
    components: { 
      CountryCard 
    },
  }
</script>

<template>
  <div class="row mb-4">
    <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" v-for="country in countries" :key="country.cca3">
      <CountryCard :country="country" />
    </div>
  </div>
</template>