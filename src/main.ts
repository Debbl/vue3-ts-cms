import { createApp } from 'vue';
import 'normalize.css';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';

import '@/services';
import '@/assets/css/index.css';
import router from '@/router';
import store from '@/store';
import App from './App.vue';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
