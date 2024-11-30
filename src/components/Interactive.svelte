<script lang="ts">
  let isModalOpen = false;
  
  // Function to toggle modal visibility
  function toggleModal() {
    isModalOpen = !isModalOpen;
  }    

  // A simple function to simulate an action (e.g., navigating to a section)
  function navigateTo(section: string) {
    alert(`Navigating to ${section}`);
  }
</script>

<div class="bg-cover bg-center text-white min-h-screen flex flex-col items-center justify-center" style="background-image: url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d');">
  <!-- Welcome Section -->
  <div class="text-center space-y-4 p-6 bg-black bg-opacity-50 rounded-lg">
    <h1 class="text-4xl font-extrabold">Welcome to Purple Pulsar</h1>
    <p class="text-lg">Your personalized lifestyle management platform</p>
    <div class="space-x-4">
      <!-- Interactive Buttons -->
      <button 
        on:click={toggleModal}
        class="bg-white text-blue-600 py-2 px-4 rounded-full hover:bg-gray-200 transition">
        Learn More
      </button>
    </div>
  </div>

  <!-- Modal (hidden initially) -->
  {#if isModalOpen}
    <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white text-black p-6 rounded-lg w-96">
        <h2 class="text-2xl font-bold mb-4">Welcome to Purple Pulsar</h2>
        <p>Explore the features of our platform by using the button above. Manage your wardrobe, plan your outfits, and more!</p>
        <button 
          on:click={toggleModal} 
          class="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">
          Close
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  /* Custom background image and style adjustments */
  .bg-cover {
    background-size: cover;
    background-position: center center;
    background-attachment: fixed; /* Keeps the background in place during scrolling */
    height: 100vh; /* Ensures the background covers the entire viewport height */
    width: 100%;  /* Ensures the background covers the entire viewport width */
  }

  .bg-center {
    background-position: center;
  }

  /* Ensuring the content is centered properly */
  .min-h-screen {
    min-height: 100vh;
  }
</style>
