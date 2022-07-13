<script>
  import { useFetch } from '@vueuse/core'
  import CountryCard from '@/components/CountryCard'
  import FiltersHeader from '@/components/FiltersHeader'

  const HOURS_TO_EXPIRES = 24

  function hoursToMilliseconds (hours) {
    return hours * 60 * 60 * 1000
  }

  export default {
    async setup () {
      
      let countries = localStorage.getItem('countries')
      if (countries) {
        countries = JSON.parse(countries)
        if (new Date().getTime() < countries.expiry) return { data: countries.value }
      }

      const { error, data } = await useFetch('https://restcountries.com/v3.1/all', {
        afterFetch(ctx) {
          ctx.data.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
          return ctx
        }
      }).json()

      const item = { value: data.value, expiry: new Date().getTime() + hoursToMilliseconds(HOURS_TO_EXPIRES) }
      localStorage.setItem('countries', JSON.stringify(item))

      return { error, data }
    },
    name: 'HomePage',
    components: {
      CountryCard,
      FiltersHeader
    }
  }
</script>

<template>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  
  <section id="countries-section" class="row" v-else>

    <div class="row mb-4">
      <div class="col-12">
        <FiltersHeader/>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" v-for="country in data" :key="country.cca3">
        <CountryCard :country="country" />
      </div>
    </div>

  </section>
</template>