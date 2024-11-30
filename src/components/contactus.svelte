<script lang="ts">
    export let title: string = "Contact Us";
  </script>
  
  <div class="contact-container">
    <h1 class="contact-title">{title}</h1>
    <p class="contact-description">
      We'd love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your queries.
    </p>
  
    <form class="contact-form">
      <label for="name">Your Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required />
  
      <label for="email">Your Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required />
  
      <label for="message">Your Message</label>
      <textarea id="message" name="message" placeholder="Write your message here" rows="5" required></textarea>
  
      <button type="submit">Send Message</button>
    </form>
  </div>
  
  <style>
    .contact-container {
      padding: 40px 20px;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
  
    .contact-title {
      font-size: 2rem;
      margin-bottom: 20px;
      text-align: center;
      color: #333;
    }
  
    .contact-description {
      font-size: 1.1rem;
      text-align: center;
      margin-bottom: 30px;
      color: #555;
    }
  
    .contact-form {
      display: flex;
      flex-direction: column;
    }
  
    .contact-form label {
      font-size: 1rem;
      margin-bottom: 5px;
    }
  
    .contact-form input,
    .contact-form textarea {
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
    }
  
    .contact-form button {
      background-color: #6c63ff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
    }
  
    .contact-form button:hover {
      background-color: #574bce;
    }
  </style>
  