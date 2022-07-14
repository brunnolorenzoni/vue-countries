<script>
  import { useFetch } from '@vueuse/core'
  import CountriesView from '@/components/CountriesView'
  import FiltersView from '@/components/FiltersView'
  import { reactive } from 'vue'

  const HOURS_TO_EXPIRES = 24

  function hoursToMilliseconds (hours) {
    return hours * 60 * 60 * 1000
  }

  export default {
    name: 'HomePage',
    components: {
      CountriesView,
      FiltersView
    },

    data () {
      return {
        countries: [],
        regions: [],
        isLoading: false,
        error: false,
        filter: reactive({
          search: {
            hasFilters: false,
            region: '',
            countryName: '',
          },
          filteredCountries: []
        })
      }
    },

    async created () {
      try {
        let countries = this.$localStorage.get('countries')
        if (countries) return this.countries = countries

        this.isLoading = true
        const { error, data } = await useFetch('https://restcountries.com/v3.1/all', {
          afterFetch(ctx) {
            ctx.data.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
            return ctx
          }
        }).json()
        this.isLoading = false

        if (error.value) return this.error = error.value

        this.$localStorage.set('countries', data.value, hoursToMilliseconds(HOURS_TO_EXPIRES))
        return this.countries = data
      } catch (err) {
        this.isLoading = false
        return this.error = err.message
      }
      
    },

    watch: {
      countries (newValue) {
        //Set regions after countries loads
        this.regions = newValue.reduce((acc = [], cur) => {
          if(acc.indexOf(cur.region) === -1) acc.push(cur.region)
          return acc
        }, []).sort()
      },
    },

    methods: {
      scrollToTop() {
        document.getElementById('countries').scrollTo(0,0);
      },

      filterCountries (id, value) {
        this.filter.filteredCountries = []
        this.filter.search[id] = value

        const { region, countryName } = this.filter.search
        
        if(!region && !countryName) return this.filter.search.hasFilters = false
        this.filter.search.hasFilters = true

        this.filter.filteredCountries = this.countries.filter(c => {
          

          if (region) {
            if (c.region != region) return false
          }

          if(countryName) {
            //find the country in all possible languages, initials, codes, names provided by API
            const { name: { common,  official }, cca2, cca3, cioc, fifa, altSpellings, translations } = c
            const arrTranslations = Object.keys(translations).map(t => [translations[t].common, official]).flat()
            const attrs = [ common, official, cca2, cca3, cioc, fifa].concat(altSpellings, arrTranslations)
            let canBe = []
            for(const attr of attrs) {
              if (attr?.toLocaleLowerCase().includes(countryName.toLocaleLowerCase())) canBe.push(true)
            }
            if (canBe.length === 0) return false
          }
          return true
          
        })
        this.scrollToTop()
      }
    },
  }
</script>

<template>
    <filters-view :filter="filter" :regions="regions" :filterCountries="filterCountries" />
    <div v-if="error">Oops! Error encountered: {{ error }}</div>
    <div v-else-if="isLoading">Loading... </div>
    <slot v-else>
      <countries-view v-if="countries.length && !filter.search.hasFilters" :countries="countries" />
      <countries-view v-else-if="filter.search.hasFilters && filter.filteredCountries.length" :countries="filter.filteredCountries" />
      <p v-else-if="filter.search.hasFilters && !filter.filteredCountries.length">No matching result!</p>
      <p v-else>No data!</p>
    </slot>
</template>
