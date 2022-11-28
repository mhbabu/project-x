import {createRouter, createWebHistory} from 'vue-router';
import ContactList from '../components/ContactList.vue';
import AddContact from '../components/AddContact.vue';
import VueXComponent from '../components/VueXComponent.vue';

const routes = [
    { path: '/', component: ContactList },
    { path: '/add-contacts', component: AddContact },
    { path: '/vue-x', component: VueXComponent },
  ];


const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;