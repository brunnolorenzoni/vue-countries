<script>
  import Map from '@/components/GoogleMaps/Map.vue'
  import { numberWithPoints } from '@/helpers/formatNumbers'

  export default {
    components: { Map },
    props: {
      country: {}
    },

    data() {
      return {
        google: {
          map: null, 
          api: null
        },
      }
    },
    setup () {
      return {
        numberWithPoints
      }
    },
    methods: {
      onMapLoad (api, map) {
        this.google.api = api
        this.google.map = map
      },
    },
    
  }
</script>

<template>
  <section id="country" class="container-fluid" v-if="Object.keys(country).length">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-6 mb-2">
        <div class="d-flex justify-content-center align-items-center">
          <img class="flag" :src="country.flags.svg" :alt="country.name.common" :title="country.name.common" />
        </div>
      </div>
      <div class="col-12 col-md-6 mb-2">
        <div>
          <h2>{{country.name.common}}</h2>
        </div>
        <div class="row infos">
          <div class="col-12 col-md-6">
            <ul class="list-unstyled">
              <li v-if="country.region">
                <span class="fw-bold">Region:</span> {{country.region}}
              </li>
              <li v-if="country.subregion">
                <span class="fw-bold">Subregion:</span> {{country.subregion}}
              </li>
              <li v-if="country.capital">
                <span class="fw-bold">Capital:</span> {{country.capital.join(', ')}}
              </li>
              <li v-if="country.population">
                <span class="fw-bold">Population:</span> {{numberWithPoints(country.population)}}
              </li>
              <li v-if="country.area">
                <span class="fw-bold">Area:</span> {{numberWithPoints(country.area)}} km²
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 mb-2">
            <ul class="list-unstyled">
              <li v-if="country.languages">
                <span class="d-block fw-bold">Languages:</span> 
                <span v-for="language in Object.keys(country.languages).map(k => country.languages[k])" :key="language" class="d-inline-block me-1 badge badge-dark">{{language}}</span>
              </li>
              <li v-if="country.currencies">
                <span class="d-block fw-bold">Currencies:</span>
                <span v-for="currency in Object.keys(country.currencies)" :key="currency" class="d-inline-block me-1 badge badge-dark">{{currency}}</span>
              </li>
              <li v-if="country.timezones">
                <span class="fw-bold d-block">Timezones:</span> 
                <span v-for="timezone in Object.keys(country.timezones).map(k => country.timezones[k])" :key="timezone" class="d-inline-block me-1 badge badge-dark">{{timezone}}</span>
              </li>
            </ul>
          </div>
          <div class="col-12 mt-2" v-if="country.borders">
            <h5>Borders</h5>
            <div class="d-flex flex-wrap justify-content-start">
              <router-link v-for="(border, index) in country.borders" :key="index" :to="{ name: 'country', params: { cca3: border }}" class="btn btn-dark m-1">{{border}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-2" v-if="country.latlng">
        <Map :center="{ lat: country.latlng[0],  lng: country.latlng[1] }" :zoom="5" :callback="this.onMapLoad" />
      </div>
    </div>
  </section>
</template>