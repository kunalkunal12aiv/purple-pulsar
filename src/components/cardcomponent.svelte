<script lang="ts">
    export let services = [
      {
        title: "Lifestyle Events",
        description: "Plan and organize your next event with ease, from weddings to corporate gatherings.",
        imageUrl: "https://images.unsplash.com/photo-1472417583565-62e7bdeda490",
        link: "/lifestylevents"
      },
      {
        title: "Outfit Planner",
        description: "Plan your daily outfits effortlessly with recommendations based on your preferences.",
        imageUrl: "https://static.wixstatic.com/media/d6d769_0539d7aa087044e3b25771c4aadf4df3~mv2.jpeg",
        link: "/outfitplanner"
      },
      {
        title: "Smart Recommendations",
        description: "Receive personalized recommendations for your wardrobe, events, and more.",
        imageUrl: "https://static.wixstatic.com/media/d6d769_3a24efe830ce44a69e44cf29033cb044~mv2.jpeg",
        link: "/smartrecommendation"
      },
      {
        title: "Wardrobe Manager",
        description: "Organize and manage your wardrobe to ensure you always have the right clothes for any occasion.",
        imageUrl: "https://static.wixstatic.com/media/d6d769_927dd58813864c4b912196e35263d206~mv2.jpeg",
        link: "/wardrobemanager"
      }
    ];
  </script>
  
  <div class="card-container">
    {#each services as service}
      <div class="card">
        <img src={service.imageUrl} alt={service.title} class="card-image" />
        <div class="card-content">
          <h3 class="card-title">{service.title}</h3>
          <p class="card-description">{service.description}</p>
          <a href={service.link} class="card-link">Learn More</a>
        </div>
      </div>
    {/each}
  </div>
  
  <style>
    .card-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 50px;
    }
  
    .card {
      width: 300px;
      background-color: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  
    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  
    .card-content {
      padding: 20px;
    }
  
    .card-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
  
    .card-description {
      font-size: 1rem;
      color: #555;
    }
  
    .card-link {
      display: inline-block;
      margin-top: 10px;
      color: #007bff;
      text-decoration: none;
      font-weight: bold;
    }
  
    .card-link:hover {
      text-decoration: underline;
    }
  
    @media screen and (max-width: 768px) {
      .card {
        width: 100%;
        margin: 10px;
      }
  
      .card-title {
        font-size: 1.25rem;
      }
  
      .card-description {
        font-size: 0.9rem;
      }
    }
  </style>
  