<script lang="ts">
  interface WardrobeItem {
    id: string;
    type: 'top' | 'bottom' | 'shoes' | 'accessory';
    wearCount: number;
    lastWorn: Date;
  }

  export let wardrobeItems: WardrobeItem[] = [];

  function calculateUsage() {
    const totalItems = wardrobeItems.length;
    const totalWorn = wardrobeItems.reduce((acc, item) => acc + item.wearCount, 0);
    const mostWornItem = wardrobeItems.reduce((prev, current) => (prev.wearCount > current.wearCount) ? prev : current, wardrobeItems[0]);
    
    return {
      totalItems,
      totalWorn,
      mostWornItem
    };
  }

  const { totalItems, totalWorn, mostWornItem } = calculateUsage();
</script>

<div class="max-w-6xl mx-auto p-6">
  <h2 class="text-2xl font-bold mb-6">Wardrobe Analytics</h2>
  <div class="bg-white p-4 rounded-lg shadow-lg">
    <p>Total Items in Wardrobe: <strong>{totalItems}</strong></p>
    <p>Total Times Worn: <strong>{totalWorn}</strong></p>
    {#if mostWornItem}
      <p>Most Worn Item: <strong>{mostWornItem.id}</strong> (Worn {mostWornItem.wearCount} times)</p>
    {/if}
  </div>
</div>
