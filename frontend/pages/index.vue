<template>
  <div>
    <p>ログイン状態: {{ $auth.loggedIn }}</p>
    <p v-if="$auth.loggedIn">{{ user }}</p>
    <nuxt-logo />
  </div>
</template>

<script>
import NuxtLogo from '../components/NuxtLogo.vue'
export default {
  auth: false,
  components: {
    NuxtLogo
  },

  computed: {
    user() {
      return this.$auth.user;
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
