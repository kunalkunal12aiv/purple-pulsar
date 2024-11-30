<script>
    // No need for JavaScript for toggling now
  </script>
  <header class="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white p-4 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo or Brand Name -->
      <div class="text-3xl font-bold tracking-wider">
        <a href="/" class="hover:text-yellow-300">Purple Pulsar</a>
      </div>  
  
      <!-- Navigation Menu (visible only on desktop) -->
      <nav class="hidden lg:flex space-x-8">
        <a href="/lifestylevents" class="hover:text-yellow-400">Lifestyle Events</a>
        <a href="/outfitplanner" class="hover:text-yellow-400">Outfit Planner</a>
        <a href="/searchhistory" class="hover:text-yellow-400">Search History</a>
        <a href="/smartrecommendation" class="hover:text-yellow-400">Smart Recommendations</a>
        <a href="/wardrobemanager" class="hover:text-yellow-400">Wardrobe Manager</a>
      </nav>
      <div class="space-x-4">
        <a href="/login" class="bg-transparent border-2 border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-gray-900 transition duration-200">Log In</a>
        <a href="/signup" class="bg-white text-gray-900 py-2 px-6 rounded-full hover:bg-gray-200 transition duration-200">Sign Up</a>
      </div>
    </div>
  </header>
  
  <style>
    /* Desktop Menu (visible on desktop) */
    @media (min-width: 1025px) {
      nav {
        display: flex;
      }
    }
  
    /* Mobile Menu (hidden on desktop) */
    @media (max-width: 1024px) {
      nav {
        display: none;
      }
      /* Make login and signup buttons smaller on mobile */
      .space-x-4 {
        flex-direction: column;  /* Stack buttons vertically */
        align-items: center;
        gap: 10px;
      }
      .space-x-4 a {
        font-size: 14px; /* Smaller font size on mobile */
        width: 100%; /* Take full width on mobile */
        padding: 12px 20px; /* More padding for better usability */
      }
    }
  
    nav a {
      color: white;
      font-size: 18px;
      text-decoration: none;
      padding: 10px 0;
    }
  
    nav a:hover {
      color: #fbbf24;
    }
  
    header {
      position: relative;
      z-index: 10;
    }
  </style>