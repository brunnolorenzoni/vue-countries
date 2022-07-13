<script>
  export default {
    props: ['country'], 
    methods: {
      numberWithPoints: (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
    }
  }

</script>

<template>
  <div class="card h-100">
    <img class="card-img-top card-image" :src="country.flags.png" alt="country.name.common" />
    <div class="card-body d-flex flex-column">
      <h4 class="card-title">{{country.name.common}}</h4>
      <ul class="list-unstyled mb-3 mt-3">
        <li v-if="country.region"><span class="fw-bold">Region:</span> {{country.region}}</li>
        <li v-if="country.capital"><span class="fw-bold">Capital:</span> {{country.capital.join(', ')}}</li>
        <li v-if="country.languages"><span class="fw-bold">Languages:</span> {{Object.keys(country.languages).map(k => country.languages[k]).join(', ')}}</li>
        <li v-if="country.currencies"><span class="fw-bold">Currencies:</span> {{Object.keys(country.currencies).join(', ')}}</li>
        <li v-if="country.population"><span class="fw-bold">Population:</span> {{numberWithPoints(country.population)}}</li>
        <li v-if="country.area"><span class="fw-bold">Area:</span> {{numberWithPoints(country.area)}} km²</li>
      </ul>
      <div class="mt-auto text-end">
        <router-link :to="{ name: 'country', params: { country: country.cca3 }}" class="btn btn-dark">Check more details</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-image {
  height: 120px;
  object-fit: cover;
  object-position: center;
}

</style>
