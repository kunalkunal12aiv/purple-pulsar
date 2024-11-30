<script lang="ts">
  import { UserMemory } from '../../lib/memory/UserMemory';
  
  const memory = new UserMemory();
  let stylePreferences = memory.getPreferences().stylePreferences;
  let favoriteBrands = memory.getPreferences().favoriteBrands;
  let favoriteColors = memory.getPreferences().favoriteColors;
  let dislikes = memory.getPreferences().dislikedStyles;
  let favoritePatterns = memory.getPreferences().favoritePatterns; // Added missing property
  let lifestyleEvents = memory.getEvents();

  function savePreferences() {
    // Logic to save preferences back to UserMemory
    memory.setPreferences({
      stylePreferences,
      favoriteBrands,
      favoriteColors,
      dislikedStyles: dislikes,
      favoritePatterns // Included the new property
    });
    // Optionally, save to local storage or backend
  }

  function addLifestyleEvent(event: string) {
    const newEvent = {
      type: event,
      date: new Date(),
      description: `User added event: ${event}`,
      impact: {
        styleNeeds: [],
        urgency: 'medium' as 'medium' | 'low' | 'high'
      }
    };
    memory.addLifestyleEvent(newEvent);
    lifestyleEvents.push(newEvent);
  }
</script>
  <div class="max-w-6xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-6">Profile Customization</h2>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700" for="favorite-brands">Favorite Brands</label>
      <input 
        id="favorite-brands"
        type="text" 
        bind:value={favoriteBrands} 
        placeholder="Enter your favorite brands"
        class="mt-1 block w-full border rounded-md p-2"
      />
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700" for="favorite-colors">Favorite Colors</label>
      <input 
        id="favorite-colors"
        type="text" 
        bind:value={favoriteColors} 
        placeholder="Enter your favorite colors"
        class="mt-1 block w-full border rounded-md p-2"
      />
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700" for="disliked-styles">Disliked Styles</label>
      <input 
        id="disliked-styles"
        type="text" 
        bind:value={dislikes} 
        placeholder="Enter styles you dislike"
        class="mt-1 block w-full border rounded-md p-2"
      />
    </div>

    <button 
      class="mt-4 bg-black text-white py-2 px-4 rounded"
      on:click={savePreferences}
    >
      Save Preferences
    </button>

    <lifestyleEvents /> <!-- Corrected the component name -->
  </div>
