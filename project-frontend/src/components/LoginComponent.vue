<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <div class="row pt-1">
          <div class="col-md-6">
            <h4><i class="fa fa-user-circle"></i> Login</h4>
          </div>
        </div>
      </div>
      <form @submit.prevent="signin" novalidate>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label class="form-label mt-4 required-star" for="email"
                  >Email Address</label
                >
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  id="email"
                  placeholder="Email Address"
                />
                <div v-if="errors.email" class="text-danger ml-2 mt-2">
                  {{ errors.email }}
                </div>
              </div>

              <div class="form-group">
                <label class="form-label mt-4 required-star" for="password"
                  >Password</label
                >
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
                <div v-if="errors.password" class="text-danger ml-2 mt-2">
                  {{ errors.password }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer py-2">
          <button type="submit" class="btn btn-primary float-end pb-2">
            <i class="fa fa-save"></i> Submit
          </button>
          <div class="clearfix"></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import { login } from "../services/authService";

export default {
  name: "LoginComponent",

  data() {
    return {
      user: {},
      email: "",
      password: "",
      errors: {},
    };
  },

  created() {},

  methods: {
    async signin() {
      this.errors = {};

      if (!this.email) this.errors.email = "Email Address filed is required";
      if (!this.password) this.errors.password = "Password filed is required";

      if (!Object.keys(this.errors).length) {

        const data = {
          email: this.email,
          password: this.password,
        };

        try {
          const res = await axios.post('http://project-x.test/api/login', { email :data.email, password: data.password });
          localStorage.setItem('token', res.data.token);
          this.$store.dispatch('updateToken', res.data.token);
          this.$router.push({ path: "/" });

        } catch (ex) {
          if (ex.response && ex.response.status === 400) {
            console.log(ex);
          }
        }
      }
    },
  },

  mounted() {
    console.log("Contact List Component is mounted");
  },
};
</script>
