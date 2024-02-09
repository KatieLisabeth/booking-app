import './assets/styles/main.scss';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';

import App from './App.vue';


const app = createApp(App);

app.use(createPinia());


app.use(router);

app.mount('#app');
