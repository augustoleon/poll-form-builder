<template>
    <div class="home-view">
      <h1>Encuestas y Formularios</h1>
      <div class="list-container">
        <h2>Encuestas</h2>
        <ul v-if="polls.length > 0">
          <li v-for="poll in polls" :key="poll.id" class="list-item">
            <router-link :to="`/poll/${poll.id}`">{{ poll.question }}</router-link>
          </li>
        </ul>
        <p v-else>No hay encuestas creadas.</p>
  
        <h2>Formularios</h2>
        <ul v-if="forms.length > 0">
          <li v-for="form in forms" :key="form.id" class="list-item">
            <router-link :to="`/form/${form.id}`">{{ form.title }}</router-link>
          </li>
        </ul>
        <p v-else>No hay formularios creados.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from 'vue';
import { useFormStore } from '../stores/formStore.ts';
import { usePollStore } from '../stores/pollStore.ts';
  
  export default defineComponent({
    name: 'HomeView',
    setup() {
      const pollStore = usePollStore();
      const formStore = useFormStore();
  
      const polls = computed(() => pollStore.polls);
      const forms = computed(() => formStore.forms);
  
      return {
        polls,
        forms,
      };
    },
  });
  </script>
  
  <style scoped>
  .home-view {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .list-container {
    margin-top: 20px;
  }
  
  h2 {
    margin-top: 20px;
    color: #2c3e50;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .list-item {
    margin: 10px 0;
  }
  
  .list-item a {
    text-decoration: none;
    color: #42b983;
    font-weight: bold;
  }
  
  .list-item a:hover {
    text-decoration: underline;
  }
  
  p {
    color: #666;
  }
  </style>