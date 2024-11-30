<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  interface QuizQuestion {
    id: number;
    text: string;
    options: string[];
    type: 'single' | 'multiple';
  }

  const questions: QuizQuestion[] = [
    {
      id: 1,
      text: 'How would you describe your everyday style?',
      options: ['Casual', 'Formal', 'Chic', 'Sporty', 'Vintage'],
      type: 'multiple'
    },
    {
      id: 2,
      text: 'What colors do you prefer wearing?',
      options: ['Black', 'White', 'Blue', 'Red', 'Green', 'Pink', 'Yellow'],
      type: 'multiple'
    }
  ];

  let currentQuestion = 0;
  let answers = new Map();

  function handleAnswer(questionId: number, answer: string | string[]) {
    answers.set(questionId, answer);
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
    } else {
      completeQuiz();
    }
  }

  function completeQuiz() {
    dispatch('complete', { answers: Object.fromEntries(answers) });
  }
</script>

<div class="max-w-2xl mx-auto p-6">
  <div class="bg-white rounded-lg shadow-xl p-8">
    <h2 class="text-2xl font-bold mb-6">Let's Get to Know Your Style</h2>
    
    {#if currentQuestion < questions.length}
      <div class="question-container">
        <h3 class="text-xl mb-4">{questions[currentQuestion].text}</h3>
        <div class="grid grid-cols-2 gap-4">
          {#each questions[currentQuestion].options as option}
            <button
              class="p-4 border rounded-lg hover:bg-black hover:text-white transition-colors"
              on:click={() => handleAnswer(questions[currentQuestion].id, option)}
            >
              {option}
            </button>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
