<template>
  <div>
    <nuxt-logo />
    {{ data }}
  </div>
</template>

<script>
import NuxtLogo from '../components/NuxtLogo.vue'
export default {
  components: {
    NuxtLogo
  },
  async asyncData(app) {
    const data = await app.$axios.$get('/api');
    return {
      data
    }
  }
}
</script>
