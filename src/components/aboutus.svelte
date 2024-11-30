<script lang="ts">
    export let title: string = "About Us";
    export let description: string =
      "Welcome to Purple Pulsar, where we blend technology with fashion to redefine your personal style. Our mission is to make styling effortless and intelligent.";
    export let team = [
      { name: "John Doe", role: "Founder & CEO", image: "https://via.placeholder.com/150" },
      { name: "Jane Smith", role: "Chief Designer", image: "https://via.placeholder.com/150" },
      { name: "Alex Johnson", role: "Lead Developer", image: "https://via.placeholder.com/150" }
    ];
  </script>
  
  <div class="about-container">
    <h1 class="about-title">{title}</h1>
    <p class="about-description">{description}</p>
  
    <div class="team-section">
      <h2 class="team-title">Meet Our Team</h2>
      <div class="team-members">
        {#each team as member}
          <div class="team-member">
            <img src={member.image} alt={member.name} class="team-member-image" />
            <h3 class="team-member-name">{member.name}</h3>
            <p class="team-member-role">{member.role}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    .about-container {
      padding: 40px 20px;
      text-align: center;
      background-color: #f9f9f9;
    }
  
    .about-title {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: #333;
    }
  
    .about-description {
      font-size: 1.2rem;
      margin-bottom: 40px;
      color: #555;
    }
  
    .team-section {
      margin-top: 30px;
    }
  
    .team-title {
      font-size: 1.8rem;
      margin-bottom: 20px;
    }
  
    .team-members {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  
    .team-member {
      margin: 15px;
      text-align: center;
      width: 200px;
    }
  
    .team-member-image {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-bottom: 10px;
    }
  
    .team-member-name {
      font-size: 1.1rem;
      font-weight: bold;
    }
  
    .team-member-role {
      font-size: 0.9rem;
      color: #777;
    }
  </style>
  