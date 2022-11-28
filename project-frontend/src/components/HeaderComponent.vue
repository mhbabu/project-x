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
              <router-link class="nav-link" to="add-contacts">Add Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="vue-x">VueX</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
    props: {
      title: String,
    },
  };
  </script>
  