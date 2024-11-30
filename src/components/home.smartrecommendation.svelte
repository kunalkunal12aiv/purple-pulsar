<script lang="ts">
    // Sample data for recommendations
    export let recommendedItems = [
      {
        name: "Casual Red Sneakers",
        description: "Perfect for a casual day out. Comfortable and stylish.",
        imageUrl: "https://static.wixstatic.com/media/d6d769_7074f973e8154585968f20c432c41023~mv2.jpeg",
        link: "/product/casual-red-sneakers"
      },
      {
        name: "Formal Black Blazer",
        description: "A must-have for business meetings. Timeless and elegant.",
        imageUrl: "https://static.wixstatic.com/media/d6d769_a67cf08653c54789b27c396061b6d8c3~mv2.jpeg",
        link: "/product/formal-black-blazer"
      },
      {
        name: "Summer Floral Dress",
        description: "Ideal for a sunny day at the beach or a casual dinner.",
        imageUrl: "https://static.wixstatic.com/media/d6d769_eeaa9e211a254d8abd4295d464955f5b~mv2.jpeg",
        link: "/product/summer-floral-dress"
      }
    ];
  </script>
  
  <div class="recommendation-container">
    <h2 class="recommendation-heading text-center">Smart Recommendations</h2>
    
    <div class="recommendation-cards">
      {#each recommendedItems as item}
        <div class="recommendation-card">
          <img src={item.imageUrl} alt={item.name} class="recommendation-image" />
          <div class="recommendation-content">
            <h3 class="recommendation-title">{item.name}</h3>
            <p class="recommendation-description">{item.description}</p>
            <a href={item.link} class="recommendation-link">See More</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .recommendation-container {
      padding: 50px 20px;
      background-color: #f9fafb;
    }
  
    .recommendation-heading {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 30px;
    }
  
    .recommendation-cards {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  
    .recommendation-card {
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      width: 300px;
      margin: 15px;
      padding: 20px;
      text-align: center;
      transition: transform 0.3s ease;
    }
  
    .recommendation-card:hover {
      transform: scale(1.05);
    }
  
    .recommendation-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
    }
  
    .recommendation-content {
      margin-top: 15px;
    }
  
    .recommendation-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
  
    .recommendation-description {
      font-size: 1rem;
      color: #555;
    }
  
    .recommendation-link {
      display: inline-block;
      margin-top: 10px;
      color: #1e40af;
      text-decoration: none;
      font-weight: 600;
    }
  
    .recommendation-link:hover {
      text-decoration: underline;
    }
  
    @media (max-width: 768px) {
      .recommendation-cards {
        flex-direction: column;
        align-items: center;
      }
  
      .recommendation-card {
        width: 80%;
      }
    }
  </style>
  