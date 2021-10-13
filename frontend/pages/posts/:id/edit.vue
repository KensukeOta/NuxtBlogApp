<template>
  <div class="container">
    <h1 class="h1 pb-1 border-bottom border-dark">記事更新ページ</h1>
    <div class="row justify-content-md-center">
      <div class="col-6">
        <form name="posts" @submit.prevent="submit()">
          <input type="hidden" id="user_id" v-model="form.user_id">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Enter title" v-model="form.title" required />
          </div>
          <div class="form-group">
            <label for="body">Body</label>
            <textarea class="form-control" id="body" placeholder="Enter body" v-model="form.body" required></textarea>
          </div>
          <button type="submit" class="btn btn-success">更新する</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    try {
      const post = await this.$axios.$get(`/api/posts/${this.$nuxt.context.params.id}`);
      this.form.title = post.title;
      this.form.body = post.body;
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      form: {
        title: '',
        body: '',
        user_id: this.$auth.user.id,
      },
    };
  },
  methods: {
    async submit() {
      try {
        const res = await this.$axios.$patch(`/api/posts/${this.$nuxt.context.params.id}`, this.form);
        this.$router.push('/');
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
