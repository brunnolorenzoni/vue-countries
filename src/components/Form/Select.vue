<script>
  export default {
    props: ['id', 'label', 'options', 'defaultOption', 'handler'],
    name: 'SelectComponent'
  }
</script>

<template>
  <div class="form-group">
    <label v-if="label" :for="id" class="form-label fw-bold">{{label}}</label>
    <select class="form-select" :id="id" @change="handler">
      <option selected value="">{{defaultOption}}</option>
      <option v-for="(option, index) in options" :value="option" :key="index+option">{{ option }}</option>
    </select>
  </div>
</template>