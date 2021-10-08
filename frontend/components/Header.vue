<template>
  <header>
    <nuxt-link to="/">NuxtBlogApp</nuxt-link>
    <div>
      <nuxt-link to="/register">新規登録</nuxt-link>
      <nuxt-link to="/login">ログイン</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $themeColor;
    a {
      text-decoration: none;
    }
  }
</style>
