<script lang="ts">
  import { onMount } from 'svelte';
  import NotificationList from './components/notifications/NotificationList.svelte';
  import StyleQuiz from './components/onboarding/StyleQuiz.svelte';
  import SearchRecommendation from './components/recommendations/SmartRecommendations.svelte';
  import SearchHistory from './components/search/SearchHistory.svelte';
  import WardrobeManager from './components/wardrobe/WardrobeManager.svelte';
  import OutfitPlanner from './components/wardrobe/OutfitPlanner.svelte';
  import WardrobeAnalytics from './components/wardrobe/WardrobeAnalytics.svelte';
  import ProfileCustomization from './components/profile/ProfileCustomization.svelte';

  let currentRoute = 'home';

  function navigate(route: string) {
    currentRoute = route;
  }

  onMount(() => {
    // Check if the user has completed the style quiz
    const quizCompleted = localStorage.getItem('styleQuizCompleted');
    if (!quizCompleted) {
      currentRoute = 'quiz';
    }
  });
</script>

<main class="container mx-auto p-4">
  <nav class="mb-8">
    <ul class="flex space-x-4">
      <li><button on:click={() => navigate('home')} class="nav-button">Home</button></li>
      <li><button on:click={() => navigate('search')} class="nav-button">Search</button></li>
      <li><button on:click={() => navigate('wardrobe')} class="nav-button">Wardrobe</button></li>
      <li><button on:click={() => navigate('outfits')} class="nav-button">Outfits</button></li>
      <li><button on:click={() => navigate('analytics')} class="nav-button">Analytics</button></li>
      <li><button on:click={() => navigate('profile')} class="nav-button">Profile</button></li>
    </ul>
  </nav>
  <NotificationList />

  {#if currentRoute === 'home'}
    <h1 class="text-3xl font-bold mb-4">Welcome to Purple Pulsar</h1>
    <p>Your personal fashion assistant</p>
  {:else if currentRoute === 'quiz'}
    <StyleQuiz on:complete={() => {
      localStorage.setItem('styleQuizCompleted', 'true');
      navigate('home');
    }} />
  {:else if currentRoute === 'search'}
    <SearchRecommendation />
    <SearchHistory />
  {:else if currentRoute === 'wardrobe'}
    <WardrobeManager />
  {:else if currentRoute === 'outfits'}
    <OutfitPlanner />
  {:else if currentRoute === 'analytics'}
    <WardrobeAnalytics />
  {:else if currentRoute === 'profile'}
    <ProfileCustomization />
  {/if}
</main>

<style>
  .nav-button {
    @apply px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors;
  }
</style>
