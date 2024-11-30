<script lang="ts">
    // Sample data for wardrobe usage
    export let wardrobeData = [
      {
        item: "Black Blazer",
        usage: 5,
        lastWorn: "2024-10-15"   
      },
      {
        item: "Blue Jeans",
        usage: 12,
        lastWorn: "2024-11-10"
      },
      {
        item: "White Shirt",
        usage: 8,
        lastWorn: "2024-11-12"
      }
    ];
  </script>
  
  <div class="analytics-container">
    <h2 class="analytics-heading text-center">Wardrobe Analytics</h2>
    <p class="analytics-description text-center">
      Gain valuable insights into your wardrobe! Track the frequency of usage, see when you last wore your favorite items, and identify underutilized pieces. Wardrobe Analytics helps you maximize your style potential while promoting sustainable fashion choices.
    </p>
    
    <div class="analytics-list">
      {#each wardrobeData as item}
        <div class="analytics-item">
          <h3 class="analytics-item-title">{item.item}</h3>
          <p class="analytics-item-usage">Worn {item.usage} times</p>
          <p class="analytics-item-last-worn">Last worn on {item.lastWorn}</p>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .analytics-container {
      padding: 50px 20px;
      background: linear-gradient(135deg, #9c27b0 30%, #6a1b9a 70%);
      color: white;
      position: relative;
      overflow: hidden;
    }
  
    .analytics-heading {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 5px;
      color: #fff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    }
  
    .analytics-description {
      font-size: .8rem;
      margin-bottom: 30px;
      max-width: 1000px;
      margin: 0 auto;
      color: #f3f3f3;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }
  
    .analytics-list {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  
    .analytics-item {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
      width: 250px;
      margin: 15px;
      padding: 20px;
      text-align: center;
      color: #333;
    }
  
    .analytics-item-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
  
    .analytics-item-usage, .analytics-item-last-worn {
      font-size: 1.1rem;
      color: #555;
    }
  
    @media (max-width: 768px) {
      .analytics-list {
        flex-direction: column;
        align-items: center;
      }
  
      .analytics-item {
        width: 80%;
      }
    }
  
  /* Add a vibrant AI and fashion-themed background */
.analytics-container::before {
  content: "";
  position: absolute;
  top: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 0, 150, 0.6), rgba(255, 255, 0, 0.3));
  border-radius: 50%;
  filter: blur(120px);
  animation: pulse 6s infinite alternate;
}

.analytics-container::after {
  content: "";
  position: absolute;
  bottom: -70px;
  right: -70px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.6), rgba(0, 0, 255, 0.3));
  border-radius: 50%;
  filter: blur(180px);
  animation: pulse 8s infinite alternate-reverse;
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.3);
  }
}

  </style>
  