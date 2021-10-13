<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.user.name }}</p>
    <p class="u-pre-wrap" v-text="post.body"></p>
    <button @click="deletePost()" v-if="$store.state.auth.user.id === post.user.id" class="btn delete">削除する</button>
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
  methods: {
    async deletePost() {
      if (!confirm('この記事を削除しますか？')) {
        return;
      }
      try {
        const res = await this.$axios.$delete(`/api/posts/${this.$nuxt.context.params.id}`);
        this.$router.push('/');
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .delete {
    background: red;
    color: #fff;
  }
</style>
