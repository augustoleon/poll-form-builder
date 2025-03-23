import { defineStore } from 'pinia';

interface Poll {
  id: string;
  question: string;
  options: string[];
  responses: Record<string, number>; // { option: count }
}

export const usePollStore = defineStore('poll', {
  state: () => ({
    polls: [] as Poll[],
  }),
  actions: {
    createPoll(question: string, options: string[]) {
      const newPoll: Poll = {
        id: Math.random().toString(36).substr(2, 9), // Genera un ID único
        question,
        options,
        responses: {},
      };
      this.polls.push(newPoll);
    },
    respondToPoll(pollId: string, option: string) {
      const poll = this.polls.find(p => p.id === pollId);
      if (poll) {
        if (!poll.responses[option]) {
          poll.responses[option] = 0;
        }
        poll.responses[option]++;
      }
    },
  },
});