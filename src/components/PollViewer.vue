<template>
    <div class="poll-viewer">
      <h2>{{ poll?.question }}</h2>
      <form @submit.prevent="submitResponse">
        <div v-for="option in poll?.options" :key="option" class="option">
          <label>
            <input
              type="radio"
              :value="option"
              v-model="selectedOption"
              required
            />
            {{ option }}
          </label>
        </div>
        <button type="submit">Enviar respuesta</button>
      </form>
      <div v-if="poll?.responses && Object.keys(poll.responses).length > 0">
        <h3>Resultados:</h3>
        <ul>
          <li v-for="(count, option) in poll.responses" :key="option">
            {{ option }}: {{ count }} votos
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePollStore } from '../stores/pollStore';
  
  export default defineComponent({
    name: 'PollViewer',
    setup() {
      const pollStore = usePollStore();
      const route = useRoute();
      const selectedOption = ref('');
  
      // Obtener el ID de la encuesta desde la ruta
      const pollId = route.params.id as string;
  
      // Buscar la encuesta en el store
      const poll = computed(() => {
        return pollStore.polls.find(p => p.id === pollId);
      });
  
      // Verificar si la encuesta existe
      onMounted(() => {
        if (!poll.value) {
          alert('Encuesta no encontrada');
        }
      });
  
      const submitResponse = () => {
        if (selectedOption.value && poll.value) {
          pollStore.respondToPoll(poll.value.id, selectedOption.value);
          alert('Respuesta enviada con éxito!');
        }
      };
  
      return {
        poll,
        selectedOption,
        submitResponse,
      };
    },
  });
  </script>
  
  <style scoped>
  .poll-viewer {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .option {
    margin-bottom: 10px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  button:hover {
    opacity: 0.9;
  }
  </style>