import { createRouter, createWebHistory } from 'vue-router';
import FormCreator from '../components/FormCreator.vue';
import FormViewer from '../components/FormViewer.vue';
import PollCreator from '../components/PollCreator.vue';
import PollViewer from '../components/PollViewer.vue';
import FormResponsesView from '../views/FormResponsesView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', component: HomeView }, // Ruta principal muestra la lista de encuestas y formularios
  { path: '/create-poll', component: PollCreator },
  { path: '/create-poll', component: PollCreator },
  { path: '/create-form', component: FormCreator },
  { path: '/poll/:id', component: PollViewer, props: true }, // Ruta dinámica para ver/responder encuestas
  { path: '/form/:id', component: FormViewer, props: true }, // Ruta dinámica para ver/responder formularios
  { path: '/form-responses', component: FormResponsesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;