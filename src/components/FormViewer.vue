<template>
  <div class="form-viewer">
    <h2>{{ form?.title }}</h2>
    <form @submit.prevent="submitForm">
      <div v-for="question in form?.questions" :key="question.id" class="question">
        <label>{{ question.text }}</label>
        <input
          v-if="question.type === 'short-answer'"
          type="text"
          v-model="answers[question.id]"
          :placeholder="question.placeholder || 'Escribe tu respuesta'"
          :required="question.required"
        />
        <textarea
          v-if="question.type === 'long-answer'"
          v-model="answers[question.id]"
          :placeholder="question.placeholder || 'Escribe tu respuesta'"
          :required="question.required"
        ></textarea>
        <input
          v-if="question.type === 'number'"
          type="number"
          v-model="answers[question.id]"
          :placeholder="question.placeholder || 'Escribe un número'"
          :required="question.required"
        />
        <div v-if="question.type === 'radio'" class="radio-options">
          <div v-for="option in question.options" :key="option" class="radio-option">
            <input
              type="radio"
              :id="`${question.id}-${option}`"
              :value="option"
              v-model="answers[question.id]"
              :required="question.required"
            />
            <label :for="`${question.id}-${option}`">{{ option }}</label>
          </div>
        </div>
        <p v-if="errors[question.id]" class="error-message">{{ errors[question.id] }}</p>
      </div>
      <button type="submit">Enviar formulario</button>
    </form>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useFormStore } from '../stores/formStore';

export default defineComponent({
  name: 'FormViewer',
  setup() {
    const formStore = useFormStore();
    const route = useRoute();
    const router = useRouter();
    const answers = ref<Record<string, string | number>>({});
    const errors = ref<Record<string, string>>({});

    const formId = route.params.id as string;

    const form = computed(() => {
      return formStore.forms.find(f => f.id === formId);
    });

    const validateForm = () => {
      errors.value = {};
      let isValid = true;

      if (form.value) {
        form.value.questions.forEach(question => {
          if (question.required && !answers.value[question.id]) {
            errors.value[question.id] = 'Esta pregunta es requerida.';
            isValid = false;
          }
        });
      }

      return isValid;
    };

    const submitForm = () => {
      if (validateForm() && form.value) {
        formStore.respondToForm(form.value.id, answers.value);
        alert('Formulario enviado con éxito!');
        router.push('/');
      } else {
        alert('Por favor, completa todas las preguntas requeridas.');
      }
    };

    return {
      form,
      answers,
      errors,
      submitForm,
    };
  },
});
</script>

<style scoped>
.form-viewer {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.question {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.radio-options {
  margin-top: 10px;
}

.radio-option {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.radio-option input[type="radio"] {
  margin-right: 10px;
}

.error-message {
  color: #ff4d4d;
  font-size: 0.9em;
  margin-top: 5px;
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