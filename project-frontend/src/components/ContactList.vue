<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <div class="row pt-1">
          <div class="col-md-6">
            <h4><i class="fa fa-list-alt"></i> Contact Lists</h4>
          </div>
          <div class="col-md-6">
            <router-link
              class="btn btn-sm btn-primary float-end"
              to="/add-contacts"
            >
              <i class="fa fa-plus-circle"></i> Create
            </router-link>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody v-for="(contact, index) in contacts" :key="contact.id">
                <tr>
                  <td>{{ ++index }}.</td>
                  <td>{{ contact.name }}</td>
                  <td>{{ contact.email }}</td>
                  <td>{{ contact.phone }}</td>
                  <td>{{ contact.designation }}</td>
                  <td>
                    <button class="btn btn-primary btn-sm"><i class="fa fa-edit"></i> Edit</button>
                    <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i> Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getContacts } from "../services/contactService";

export default {
  name: "ContactList",

  data() {
    return {
      contacts: [],
    };
  },

  created() {
    this.getAllContacts();
  },

  methods: {
    async getAllContacts() {
      const { data } = await getContacts();
      this.contacts = data.data;
      console.log(this.contacts);
    },
  },

  mounted(){
    console.log('Contact List Component is mounted');
  }
};
</script>
