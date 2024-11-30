<script lang="ts">
  import { UserMemory } from '../../lib/memory/UserMemory';

  interface OutfitItems {
    top?: string;
    bottom?: string;
    shoes?: string;
    accessories: string[];
  }

  interface OutfitPlan {
    id: string;
    name: string;
    occasion: string;
    items: OutfitItems;
    weather: string;
    season: string;
    lastWorn?: Date;
  }

  let outfits: OutfitPlan[] = [];
  let selectedItems = new Set();
  let currentOutfit: {
    name?: string;
    occasion?: string;
    items: OutfitItems;
    weather?: string;
    season?: string;
  } = {
    items: {
      accessories: []
    }
  };

  function createNewOutfit() {
    const outfit: OutfitPlan = {
      id: crypto.randomUUID(),
      name: currentOutfit.name || 'Untitled Outfit',
      occasion: currentOutfit.occasion || 'casual',
      items: currentOutfit.items,
      weather: currentOutfit.weather || 'any',
      season: currentOutfit.season || 'all'
    };
    outfits = [...outfits, outfit];
  }
</script>

<div class="max-w-6xl mx-auto p-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Outfit Builder -->
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-6">Create New Outfit</h2>
      
      <input 
        type="text" 
        placeholder="Outfit Name"
        class="w-full p-2 border rounded mb-4"
        bind:value={currentOutfit.name}
      />

      <select 
        class="w-full p-2 border rounded mb-4"
        bind:value={currentOutfit.occasion}
      >
        <option value="">Select Occasion</option>
        <option value="casual">Casual</option>
        <option value="work">Work</option>
        <option value="formal">Formal</option>
        <option value="party">Party</option>
      </select>

      <div class="grid grid-cols-3 gap-4 mb-6">
        <div class="aspect-square bg-gray-100 rounded flex items-center justify-center">
          Top
        </div>
        <div class="aspect-square bg-gray-100 rounded flex items-center justify-center">
          Bottom
        </div>
        <div class="aspect-square bg-gray-100 rounded flex items-center justify-center">
          Shoes
        </div>
      </div>

      <button 
        class="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800"
        on:click={createNewOutfit}
      >
        Save Outfit
      </button>
    </div>

    <!-- Saved Outfits -->
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-6">Saved Outfits</h2>
      
      <div class="grid gap-4">
        {#each outfits as outfit}
          <div class="border rounded p-4">
            <h3 class="font-semibold">{outfit.name}</h3>
            <p class="text-sm text-gray-600">{outfit.occasion}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
