<template>
  <Marker :options="options" />
</template>

<script >
import { Marker } from 'vue3-google-map'

export default {
  name: 'MarkerComponent',
  props: ['position', 'title'],
  components: { Marker },

  setup(props) {
    return {
      options: {
        ...props
      }
    }
  }

}
</script>