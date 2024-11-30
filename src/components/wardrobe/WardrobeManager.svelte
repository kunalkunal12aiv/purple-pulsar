<script lang="ts">
  import WardrobeAnalytics from './WardrobeAnalytics.svelte';

  interface WardrobeItem {
    id: string;
    type: 'top' | 'bottom' | 'shoes' | 'accessory';
    image: string;
    tags: string[];
    color: string;
    season: string[];
    wearCount: number;
    lastWorn: Date;
  }

  let wardrobeItems: WardrobeItem[] = [];
  let selectedCategory = 'all';
  let uploadingImage = false;

  function handleImageUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    // Image processing logic here
  }

  function createOutfit() {
    // Outfit creation logic
  }

  function getWardrobeAnalytics() {
    // Analytics calculation
  }
</script>

<div class="max-w-6xl mx-auto p-6">
  <!-- Upload Section -->
  <div class="mb-8">
    <label 
      class="block w-full p-8 border-2 border-dashed rounded-lg text-center cursor-pointer hover:bg-gray-50"
    >
      <input 
        type="file" 
        accept="image/*" 
        class="hidden" 
        on:change={handleImageUpload}
      />
      <span class="text-lg">Upload New Item</span>
    </label>
  </div>

  <!-- Category Filter -->
  <div class="flex gap-4 mb-8">
    {#each ['all', 'tops', 'bottoms', 'shoes', 'accessories'] as category}
      <button 
        class="px-4 py-2 rounded-full {selectedCategory === category ? 'bg-black text-white' : 'bg-gray-100'}"
        on:click={() => selectedCategory = category}
      >
        {category}
      </button>
    {/each}
  </div>

  <!-- Wardrobe Grid -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
    {#each wardrobeItems as item}
      <div class="wardrobe-item p-4 border rounded-lg">
        <img src={item.image} alt="" class="w-full h-48 object-cover rounded"/>
        <div class="mt-4">
          <div class="flex gap-2">
            {#each item.tags as tag}
              <span class="text-sm bg-gray-100 px-2 py-1 rounded">{tag}</span>
            {/each}
          </div>
          <p class="mt-2 text-sm text-gray-600">Worn {item.wearCount} times</p>
        </div>
      </div>
    {/each}
  </div>

  <!-- Wardrobe Analytics Section -->
  <WardrobeAnalytics {wardrobeItems} />
</div>
