<template>
  <div class="form-creator">
    <h2>Crear un nuevo formulario</h2>
    <form @submit.prevent="createForm">
      <div class="form-group">
        <label for="title">Título del formulario:</label>
        <input
          type="text"
          id="title"
          v-model="title"
          placeholder="Escribe el título"
          required
          class="input-text"
        />
      </div>
      <div v-for="(question, index) in questions" :key="question.id" class="question-input">
        <label>Pregunta {{ index + 1 }}:</label>
        <input
          type="text"
          v-model="question.text"
          placeholder="Escribe la pregunta"
          required
          class="input-text"
        />
        <select v-model="question.type" class="input-select">
          <option value="short-answer">Respuesta corta</option>
          <option value="long-answer">Respuesta larga</option>
          <option value="number">Número</option>
          <option value="radio">Opción única</option>
        </select>
        <div v-if="question.type === 'radio'" class="radio-options">
          <div v-for="(option, optIndex) in question.options" :key="optIndex" class="option-input">
            <input
              type="text"
              v-model="question.options[optIndex]"
              :placeholder="`Opción ${optIndex + 1}`"
              required
              class="input-text"
            />
            <button type="button" @click="removeOption(index, optIndex)" class="remove-button">Eliminar</button>
          </div>
          <button type="button" @click="addOption(index)" class="add-button">Añadir opción</button>
        </div>
        <label>
          <input type="checkbox" v-model="question.required" /> Requerida
        </label>
        <button type="button" @click="removeQuestion(index)" class="remove-button">Eliminar pregunta</button>
      </div>
      <button type="button" @click="addQuestion" class="add-button">Añadir pregunta</button>
      <button type="submit" class="submit-button">Crear formulario</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useFormStore } from '../stores/formStore';

interface FormQuestion {
  id: string;
  text: string;
  type: 'short-answer' | 'long-answer' | 'number' | 'radio';
  required: boolean;
  placeholder?: string;
  options?: string[];
}

export default defineComponent({
  name: 'FormCreator',
  setup() {
    const formStore = useFormStore();

    const title = ref('');
    const questions = ref<FormQuestion[]>([
      { id: Math.random().toString(36).substr(2, 9), text: '', type: 'short-answer', required: false },
    ]);

    const addQuestion = () => {
      questions.value.push({
        id: Math.random().toString(36).substr(2, 9),
        text: '',
        type: 'short-answer',
        required: false,
      });
    };

    const removeQuestion = (index: number) => {
      if (questions.value.length > 1) {
        questions.value.splice(index, 1);
      }
    };

    const addOption = (questionIndex: number) => {
      if (!questions.value[questionIndex].options) {
        questions.value[questionIndex].options = [''];
      } else {
        questions.value[questionIndex].options!.push('');
      }
    };

    const removeOption = (questionIndex: number, optionIndex: number) => {
      if (questions.value[questionIndex].options && questions.value[questionIndex].options!.length > 1) {
        questions.value[questionIndex].options!.splice(optionIndex, 1);
      }
    };

    const createForm = () => {
      if (title.value && questions.value.every(q => q.text.trim() !== '')) {
        formStore.createForm(title.value, questions.value);
        alert('Formulario creado con éxito!');
        title.value = '';
        questions.value = [
          { id: Math.random().toString(36).substr(2, 9), text: '', type: 'short-answer', required: false },
        ];
      } else {
        alert('Por favor, completa todos los campos.');
      }
    };

    return {
      title,
      questions,
      addQuestion,
      removeQuestion,
      addOption,
      removeOption,
      createForm,
    };
  },
});
</script>

<style scoped>
.form-creator {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.question-input {
  margin-bottom: 20px;
}

.input-text, .input-select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.radio-options {
  margin-top: 10px;
}

.option-input {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.add-button, .remove-button, .submit-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.remove-button {
  background-color: #ff4d4d;
  margin-left: 10px;
}

.add-button:hover, .remove-button:hover, .submit-button:hover {
  opacity: 0.9;
}
</style>