<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">{{ title }}</router-link>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/"
              >Contact List
              <span class="visually-hidden">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="add-contacts"
              >Add Contact</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="vue-x">VueX</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="registers"
              ><i class="fa fa-user-plus"></i> Register</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="login"
              ><i class="fa fa-user-plus"></i> Login</router-link
            >
          </li>
          <li class="nav-link" @click="logout" :style="{ color: 'pointer' }">
            <i class="fa fa-user-cog"></i> Logout
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "HeaderComponent",
  props: {
    title: String,
  },

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
    async logout() {
      try {
        let config = {
          headers: {
            Authorization: "Bearer " + this.$store.state.token,
          },
        };
        const res = await axios.post(
          "http://project-x.test/api/logout",
          {},
          config
        );
        console.log(res);
        this.$store.dispatch("logout");
        this.$router.push({ path: "/" });
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          console.log(ex);
        }
      }
      localStorage.removeItem("token");
    },
  },

  mounted() {
    console.log("Contact List Component is mounted");
  },
};
</script>
