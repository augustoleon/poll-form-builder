<template>
    <div class="form-responses-view">
      <h1>Respuestas de Formularios</h1>
      <div v-if="formsWithResponses.length > 0">
        <div v-for="form in formsWithResponses" :key="form.id" class="form-container">
          <h2>{{ form.title }}</h2>
          <table class="responses-table">
            <thead>
              <tr>
                <th>#</th>
                <th v-for="question in form.questions" :key="question.id">{{ question.text }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(response, index) in form.responses" :key="response.formId">
                <td>{{ index + 1 }}</td>
                <td v-for="question in form.questions" :key="question.id">
                  {{ response.answers[question.id] || 'Sin respuesta' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p v-else>No hay respuestas enviadas.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from 'vue';
import { useFormStore } from '../stores/formStore';
  
  export default defineComponent({
    name: 'FormResponsesView',
    setup() {
      const formStore = useFormStore();
  
      const formsWithResponses = computed(() => {
        return formStore.forms.filter(form => form.responses.length > 0);
      });
  
      return {
        formsWithResponses,
      };
    },
  });
  </script>
  
  <style scoped>
  .form-responses-view {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-container {
    margin-bottom: 40px;
  }
  
  h2 {
    color: #656fda;
    margin-bottom: 20px;
  }
  
  .responses-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .responses-table th,
  .responses-table td {
    border: 1px solid #e0e0e0;
    padding: 12px;
    text-align: left;
  }
  
  .responses-table th {
    background-color: #42b983;
    color: white;
    font-weight: bold;
  }
  
  .responses-table tr:nth-child(even) {
    background-color: #808080;
  }
  
  .responses-table tr:hover {
    background-color: #656fda;
  }
  
  p {
    color: #666;
    text-align: center;
  }
  </style>