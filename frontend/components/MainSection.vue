<template>
  <main>
    <ul>
      <li v-for="(post) in posts" :key="post.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.user.name }}</p>
            <nuxt-link :to="{path: `/posts/${post.id}`}" class="btn">記事を読む</nuxt-link>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      posts: ''
    }
  },
  async fetch() {
    try {
      const res = await this.$axios.$get('/api/posts/index');
      this.posts = res;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    a {
      background: $themeColor;
      color: #fff;
    }
  }
</style>
