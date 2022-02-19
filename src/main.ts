import { createApp } from 'vue';

import router from './router';
import store from './store';
import 'element-plus/dist/index.css';

import App from './App.vue';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
