<template>
  <GoogleMap
      ref="mapRef"
      :center="center"
      :zoom="zoom"
      :api-key="apiKey"
      style="width: 100%; height: 50vh"
  >
    <slot></slot>
  </GoogleMap>
</template>

<script >
import { ref, watch } from "vue"; 
import { GoogleMap } from "vue3-google-map"; 

export default {
  name: 'MapComponent',
  components: { GoogleMap },
  props: {
    width: {
      default: '100%',
      type: String
    },
    height: {
      default: '50vh',
      type: String
    },
    center: {
      required: true,
      ype: Object
    },
    zoom: {
      default: 7,
      type: Number
    },
    callback: {
      default: null,
      type: Function
    }
  },
  setup(props) {
    const mapRef = ref(null)
    watch(() => mapRef.value?.ready, (ready) => {
      if (!ready) return
      props.callback(mapRef.value.api, mapRef.value.map)
    })

    return { 
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      mapRef
    }
  }
}
</script>