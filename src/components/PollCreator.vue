<template>
  <div class="poll-creator">
    <h2>Crear una nueva encuesta</h2>
    <form @submit.prevent="createPoll">
      <div class="form-group">
        <label for="question">Pregunta:</label>
        <input
          type="text"
          id="question"
          v-model="question"
          placeholder="Escribe tu pregunta"
          required
          class="input-text"
        />
      </div>
      <div class="form-group">
        <label>Opciones:</label>
        <div v-for="(option, index) in options" :key="index" class="option-input">
          <input
            type="text"
            v-model="options[index]"
            :placeholder="`Opción ${index + 1}`"
            required
            class="input-text"
          />
          <button type="button" @click="removeOption(index)" class="remove-button">Eliminar</button>
        </div>
        <button type="button" @click="addOption" class="add-button">Añadir opción</button>
      </div>
      <button type="submit" class="submit-button">Crear encuesta</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { usePollStore } from '../stores/pollStore';

export default defineComponent({
  name: 'PollCreator',
  setup() {
    const pollStore = usePollStore();

    const question = ref('');
    const options = ref<string[]>(['', '']); // Inicialmente dos opciones vacías

    const addOption = () => {
      options.value.push('');
    };

    const removeOption = (index: number) => {
      if (options.value.length > 2) {
        options.value.splice(index, 1);
      }
    };

    const createPoll = () => {
      if (question.value && options.value.every(option => option.trim() !== '')) {
        pollStore.createPoll(question.value, options.value);
        alert('Encuesta creada con éxito!');
        question.value = '';
        options.value = ['', ''];
      } else {
        alert('Por favor, completa todos los campos.');
      }
    };

    return {
      question,
      options,
      addOption,
      removeOption,
      createPoll,
    };
  },
});
</script>

<style scoped>
.poll-creator {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

.input-text {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.option-input {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.remove-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.add-button, .submit-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.add-button:hover, .submit-button:hover {
  opacity: 0.9;
}
</style>