<template>
  <div class="container">
    <h1 class="h1 pb-1 border-bottom border-dark">Register</h1>
    <div class="row justify-content-md-center">
      <div class="col-6">
        <form name="register" @submit.prevent="register()">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="form.password" required />
          </div>
          <div class="form-group">
            <label for="password_confirmation">PasswordConfirmation</label>
            <input type="password" class="form-control" id="password_confirmation" placeholder="Enter password_confirmation" v-model="form.password_confirmation" required />
          </div>
          <button type="submit" class="btn btn-success">登録</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    auth: 'guest',
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        },
      }
    },
    mounted() {
      // csrf対策
      this.$axios.get('/sanctum/csrf-cookie');
    },
    methods: {
      register() {
        this.$axios.post('/api/register',this.form)
          .then(response => {
            this.$auth.loginWith('local',{
              data: this.form
            })
          })
          .catch (error => {
            console.log(error);
          })
      },
    },
  }
</script>
