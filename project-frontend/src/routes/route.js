import {createRouter, createWebHistory} from 'vue-router';
import ContactList from '../components/ContactList.vue';
import AddContact from '../components/AddContact.vue';
import VueXComponent from '../components/VueXComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';
import NotFound from '../components/NotFound.vue';
import MyComponent from '../components/MyComponent.vue';
import store from '../store';

const routes = [
    { path: '/', component: ContactList, meta: { requiresAuth: false } },
    { path: '/add-contacts', component: AddContact, meta: { requiresAuth: true } },
    { path: '/vue-x', component: VueXComponent, meta: { requiresAuth: false } },
    { path: '/registers', component: RegisterComponent, meta: { requiresAuth: false } },
    { path: '/login', component: LoginComponent, meta: { requiresAuth: false } },
    { path: '/my-component', component: MyComponent, meta: { requiresAuth: false } },
    { path: '/:pathMatch(.*)*', component: NotFound, meta: { requiresAuth: false } },
  ];


const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.token) {
      next({ path: '/login', query: { redirect: to.fullPath } })
    } 
  }
  
  next()
});  

export default router;