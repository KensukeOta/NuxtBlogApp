<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{post.user.name }}</p>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const post = await $axios.$get(`/api/posts/${params.id}`);
    return { post };
  },
  auth: false,
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>

</style>
