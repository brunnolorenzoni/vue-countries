<script>
  export default {
    props: ['id', 'label', 'autocomplete', 'placeholder', 'handler'],
    name: 'InputTextComponent'
  }
</script>

<template>
  <div class="form-group">
    <label v-if="label" :for="id" class="form-label fw-bold">{{label}}</label>
    <div class="input-group mb-3">
      <input :autocomplete="autocomplete" :placeholder="placeholder" type="text" class="form-control" :id="id" @keyup="handler" >
    </div>
  </div>
</template>