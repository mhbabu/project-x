<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <div class="row pt-1">
          <div class="col-md-6">
            <h4><i class="fa fa-user"></i> Register</h4>
          </div>
        </div>
      </div>
      <form @submit.prevent="signup" novalidate>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label class="form-label mt-4 required-star" for="name"
                  >Name</label
                >
                <input
                  type="text"
                  v-model="name"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                />
                <div v-if="errors.name" class="text-danger ml-2 mt-2">
                  {{ errors.name }}
                </div>
              </div>

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

              <div class="form-group">
                <label
                  class="form-label mt-4 required-star"
                  for="confirmPassword"
                  >Configm Password</label
                >
                <input
                  type="password"
                  v-model="confirm_password"
                  class="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                />
                <div
                  v-if="errors.confirm_password"
                  class="text-danger ml-2 mt-2"
                >
                  {{ errors.confirm_password }}
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

import { register } from "../services/registerService";

export default {
  name: "RegisteComponent",

  data() {
    return {
      user: {},
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      errors: {},
    };
  },

  created() {},

  methods: {
    async signup() {
      this.errors = {};

      if (!this.name) this.errors.name = "Name filed is required";
      if (!this.email) this.errors.email = "Email Address filed is required";
      if (!this.password) this.errors.password = "Password filed is required";
      if (!this.confirm_password)
        this.errors.confirm_password = "Confirm Password filed is required";

      if (!Object.keys(this.errors).length) console.log(1);

      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
      };

      try {
        await register(data);
       
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          console.log(ex);
        }
      }
    },
  },

  mounted() {
    console.log("Contact List Component is mounted");
  },
};
</script>
