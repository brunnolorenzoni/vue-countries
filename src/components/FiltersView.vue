<script>
export default {
  props: ['filter', 'regions', 'filterCountries'],
  methods: {
    handleFilter(e) {
      const { value, id } = e.target
      this.filterCountries(id, value)
    },
  }
}
</script>

<template>
  <section id="filters" class="p-2">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2">
        <div class="form-group">
          <label for="region" class="form-label fw-bold">Region</label>
          <select class="form-select" id="region" aria-label="Default select example" @change="handleFilter">
            <option selected value="">Select a region</option>
            <option v-for="(region, index) in regions" :value="region" :key="index">{{ region }}</option>
          </select>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2">
        <div class="form-group">
          <label for="countryName" class="form-label fw-bold">Country</label>
          <div class="input-group mb-3">
            <input autocomplete="off" placeholder="e.g. USA, United States" type="text" class="form-control" id="countryName" aria-describedby="countryName" @keyup="handleFilter" >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>