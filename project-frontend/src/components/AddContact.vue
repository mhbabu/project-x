<style>
.required-star:after{
  color: red;
  content: " *";
}
</style>

<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <div class="row pt-1">
          <div class="col-md-6">
            <h4><i class="fa fa-plus-circle"></i> Add Contact</h4>
          </div>
        </div>
      </div>
      <form @submit.prevent="saveContact" novalidate>
        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label class="form-label mt-4 required-star" for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="name"
                  placeholder="Name"
                />
              </div>

              <div class="form-group">
                <label class="form-label mt-4 required-star" for="email">Email Address</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="email"
                  id="email"
                  placeholder="Email Address"
                />
              </div>

              <div class="form-group">
                <label class="form-label mt-4 required-star" for="phone">Phone</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="phone"
                  id="phone"
                  placeholder="Phone"
                />
              </div>

              <div class="form-group">
                <label class="form-label mt-4 required-star" for="designation"
                  >Designation</label
                >
                <input
                  type="text"
                  v-model="designation"
                  class="form-control"
                  id="designation"
                  placeholder="Designation"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer py-2">
          <router-link class="btn btn-info float-start pb-2" to="/">
            <i class="fas fa-backspace"></i> Back
          </router-link>
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
export default {
  name: "ContactList",
  props: {
    msg: String,
  },

  data() {
    return {
      contact: {},
      name: '',
      email: '',
      designation: '',
      phone: '',
      errors: {}
    };
  },

  created() {
   
  },

  methods: {
    saveContact(){
      this.errors = {};

      if(!this.contacts.name) this.errors.push('Name filed is required');
      if(!this.contacts.email) this.errors.push('Email Address filed is required');
      if(!this.contacts.designation) this.errors.push('Designation filed is required');
      if(!this.contacts.phone) this.errors.push('Phone filed is required');
    }
  },

  mounted(){
    console.log('Contact List Component is mounted');
  }

};
</script>
