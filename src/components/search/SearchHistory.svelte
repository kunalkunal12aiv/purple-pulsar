<script lang="ts">
  import { UserMemory } from '../../lib/memory/UserMemory';

  const memory = new UserMemory();
  let searchHistory: string[] = []; // Explicitly define the type

  function loadSearchHistory() {
    searchHistory = memory.searchHistory; // Assuming searchHistory is an array in UserMemory
  }

  $: loadSearchHistory();
</script>

<div class="max-w-6xl mx-auto p-6">
  <h2 class="text-2xl font-bold mb-6">Search History</h2>
  <ul class="list-disc pl-5">
    {#each searchHistory as searchTerm}
      <li>{searchTerm}</li>
    {/each}
  </ul>
</div>
