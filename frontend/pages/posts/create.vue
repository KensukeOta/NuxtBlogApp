<template>
  <div class="container">
    <h1 class="h1 pb-1 border-bottom border-dark">記事投稿ページ</h1>
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
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
          const res = await this.$axios.$post('/api/posts/store', this.form);
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
