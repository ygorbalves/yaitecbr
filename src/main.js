import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Bootstrap and BootstrapVue CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Import your global CSS
import './assets/main.css';

const app = createApp(App);

app.use(router); // Use the router
app.use(BootstrapVue3);
app.mount('#app');

