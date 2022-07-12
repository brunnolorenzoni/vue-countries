<script setup>
  import { defineProps } from 'vue'
  defineProps(['country'])
</script>

<template>
  <div class="card">
    <img class="card-img-top card-image" :src="country.flags.png" alt="country.name.common" />
    <div class="card-body">
      <h5 class="card-title">{{country.name.common}}</h5>
      <p class="card-text"></p>
      <router-link :to="{ name: 'country', params: { country: country.cca3 }}" class="btn btn-dark">Details</router-link>
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
