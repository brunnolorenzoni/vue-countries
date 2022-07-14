<script>
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'
import CountryView from '@/components/CountryView.vue'

export default {
  name: 'CountryPage',
  components: { CountryView },
  data () {
    return {
      country: {},
    }
  },
  setup () {
    const route = useRoute();
    return {
      cca3: route.params.cca3,
    }
  },
  watch: {
    $route({params}) {
      this.cca3 = params.cca3
      if(params.cca3) this.fetchCountry()
      
    }
  },
  methods: {
    async fetchCountry () {
      const { data } = await useFetch(`https://restcountries.com/v3.1/alpha?codes=${this.cca3}`).json()
      this.country = data.value[0]
    }
  },

  mounted () {
    this.fetchCountry()
  },
}
</script>

<template> 
  <CountryView :country="country" />
</template>

<style>
  #country {
    overflow-y: scroll;
    height: 100%;
  }
  .flag {
    width: 100%;
    height: auto;
  }
  .badge-dark {
    background-color: #212529;
  }
</style>