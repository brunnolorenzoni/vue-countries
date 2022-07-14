<script>
import InputText from '@/components/Form/InputText'
import Select from '@/components/Form/Select'

export default {
  props: ['regions', 'filterCountries'],
  components: { InputText, Select, },
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
        <Select label="Region" :options="regions" defaultOption="Select a region" id="region" :handler="handleFilter"  />
      </div>
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2">
        <InputText label="Country" :autocomplete="false" placeholder="e.g. USA, United States" id="countryName" :handler="handleFilter" />
      </div>
    </div>
  </section>
</template>