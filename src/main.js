import './assets/main.css';

import { createApp } from 'vue';
import { createYmaps } from 'vue-yandex-maps';
import App from './App.vue';
import router from './router';

const app = createApp(App);

const ymaps = createYmaps({
    apikey: process.env.API_KEY,
    lang: process.env.YMAP_LANG
});

app.use(ymaps);

app.use(router);

app.mount('#app');