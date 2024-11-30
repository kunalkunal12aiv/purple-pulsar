<script lang="ts">
    // Sample data for outfit planning
    export let outfitSuggestions = [
      {
        name: "Office Look",
        items: ["Formal Black Blazer", "White Shirt", "Black Pants", "Brown Shoes"],
        imageUrl: "https://static.wixstatic.com/media/d6d769_8e461e1a17f64212b198615c97e528a8~mv2.jpeg",
        link: "/outfit/office-look"
      },
      {
        name: "Weekend Casual",
        items: ["Casual Red Sneakers", "Blue Jeans", "Graphic T-shirt"],
        imageUrl: "https://static.wixstatic.com/media/d6d769_ebf2141bd6e241c68727cd84fe792837~mv2.jpeg",
        link: "/outfit/weekend-casual"
      },
      {
        name: "Evening Party",
        items: ["Red Dress", "Heels", "Clutch Bag"],
        imageUrl: "https://static.wixstatic.com/media/d6d769_cfdcdc001dfe494a94700017d16728f4~mv2.jpeg",
        link: "/outfit/evening-party"
      }
    ];
  </script>
  
  <div class="outfit-container">
    <h2 class="outfit-heading text-center">Outfit Suggestions</h2>
    
    <div class="outfit-cards">
      {#each outfitSuggestions as outfit}
        <div class="outfit-card">
          <img src={outfit.imageUrl} alt={outfit.name} class="outfit-image" />
          <div class="outfit-content">
            <h3 class="outfit-title">{outfit.name}</h3>
            <ul class="outfit-items">
              {#each outfit.items as item}
                <li>{item}</li>
              {/each}
            </ul>
            <a href={outfit.link} class="outfit-link">See Outfit</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .outfit-container {
      padding: 50px 20px;
      background-color: #f0f4f8;
    }
  
    .outfit-heading {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 30px;
    }
  
    .outfit-cards {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  
    .outfit-card {
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      width: 300px;
      margin: 15px;
      padding: 20px;
      text-align: center;
      transition: transform 0.3s ease;
    }
  
    .outfit-card:hover {
      transform: scale(1.05);
    }
  
    .outfit-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
    }
  
    .outfit-content {
      margin-top: 15px;
    }
  
    .outfit-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
  
    .outfit-items {
      font-size: 1rem;
      color: #555;
      margin-bottom: 10px;
      list-style-type: none;
      padding: 0;
    }
  
    .outfit-link {
      display: inline-block;
      margin-top: 10px;
      color: #1e40af;
      text-decoration: none;
      font-weight: 600;
    }
  
    .outfit-link:hover {
      text-decoration: underline;
    }
  
    @media (max-width: 768px) {
      .outfit-cards {
        flex-direction: column;
        align-items: center;
      }
  
      .outfit-card {
        width: 80%;
      }
    }
  </style>
  