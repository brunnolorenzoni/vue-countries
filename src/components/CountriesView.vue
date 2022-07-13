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
    created() {
      window.addEventListener("resize", this.calculateHeight);
    },
    unmounted() {
      window.removeEventListener("resize", this.calculateHeight);
    },
    methods: {
      calculateHeight() {
        const mainContainer = document.getElementById('main').offsetHeight
        const filterContainer = document.getElementById('filters').offsetHeight
        return `${(mainContainer - filterContainer)}px`
      }
    }
  }
</script>

<template>
    <section id="countries" class="p-2" :style="{ 'height': this.calculateHeight() }">
      <LazyList
        :data="countries"
        :itemsPerRender="12"
        container-classes="row"
        defaultLoadingColor="#212529"
      >
        <template v-slot="{item}">
          <div class="col-12 col-md-6 col-lg-3 mb-4">
            <CountryCard :country="item" />
          </div>
        </template>
      </LazyList>
    </section>
</template>

<style>
  #container {
    width: auto;
  }
</style>