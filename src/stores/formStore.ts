import { defineStore } from 'pinia';

interface FormQuestion {
  id: string;
  type: 'short-answer' | 'long-answer' | 'number' | 'radio';
  text: string;
  required: boolean;
  placeholder?: string;
  options?: string[]; // Solo para tipo 'radio'
}

interface FormResponse {
  formId: string;
  answers: Record<string, string | number>; // { questionId: answer }
}

interface Form {
  id: string;
  title: string;
  questions: FormQuestion[];
  responses: FormResponse[];
}

export const useFormStore = defineStore('form', {
  state: () => ({
    forms: [] as Form[],
  }),
  actions: {
    createForm(title: string, questions: FormQuestion[]) {
      // Clonar las preguntas para evitar referencias compartidas
      const clonedQuestions = questions.map(question => ({
        ...question,
        options: question.options ? [...question.options] : undefined,
      }));

      const newForm: Form = {
        id: Math.random().toString(36).substr(2, 9), // Genera un ID único
        title,
        questions: clonedQuestions,
        responses: [],
      };
      this.forms.push(newForm);
    },
    respondToForm(formId: string, answers: Record<string, string | number>) {
      const form = this.forms.find(f => f.id === formId);
      if (form) {
        // Clonar las respuestas para evitar referencias compartidas
        const clonedAnswers = { ...answers };
        form.responses.push({ formId, answers: clonedAnswers });
      }
    },
  },
});