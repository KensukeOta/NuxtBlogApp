<template>
  <div>
    <p>ログイン状態: {{ $store.state.auth.loggedIn }}</p>
    <p v-if="$store.state.auth.loggedIn">{{ user }}</p>
    <div class="post-btn-area">
      <nuxt-link to="/posts/create" class="btn post-btn">投稿する</nuxt-link>
    </div>
    <main-section />
  </div>
</template>

<script>
import MainSection from '../components/MainSection.vue';
export default {
  auth: false,
  components: {
    MainSection
  },
  computed: {
    user() {
      return this.$auth.user;
    }
  },
}
</script>

<style lang="scss" scoped>
  .post-btn-area {
    text-align: center;
    .post-btn {
      background: $themeColor;
      color: #fff;
      text-decoration: none;
      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>
