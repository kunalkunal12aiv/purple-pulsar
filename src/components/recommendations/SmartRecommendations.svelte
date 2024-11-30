<script lang="ts">
  import { UserMemory } from '../../lib/memory/UserMemory';

  interface Recommendation {
    id: string;
    title: string;
    image: string;
    price: number;
  }

  const memory = new UserMemory();
  let recommendations: Recommendation[] = []; // Explicitly define the type

  function getRecommendations() {
    recommendations = memory.getPersonalizedRecommendations();
  }

  $: getRecommendations();
</script>

<div class="max-w-6xl mx-auto p-6">
  <h2 class="text-2xl font-bold mb-6">Recommended for You</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each recommendations as item}
      <div class="recommendation-card p-4 border rounded-lg">
        <img src={item.image} alt={item.title} class="w-full h-48 object-cover rounded"/>
        <h3 class="font-semibold">{item.title}</h3>
        <p class="text-sm text-gray-600">${item.price}</p>
      </div>
    {/each}
  </div>
</div>
