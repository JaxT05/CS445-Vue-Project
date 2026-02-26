import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';
import Aura from '@primeuix/themes/aura';
import './style.css'


createApp(App).use(router).mount('#app');