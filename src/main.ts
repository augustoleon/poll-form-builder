import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);

// Crea una instancia de Pinia
const pinia = createPinia();

// Usa Pinia en la aplicación
app.use(pinia);
app.use(router)

app.mount('#app');
