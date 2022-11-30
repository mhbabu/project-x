import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/route';
import store from './store/index.js';

createApp(App).use(store).use(router).mount('#app');
