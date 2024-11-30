<script lang="ts">
  import { UserMemory } from '../../lib/memory/UserMemory';

  const memory = new UserMemory();
  let eventDescription = '';
  let eventType = '';
  let lifestyleEvents = memory.events;

  function addEvent() {
    const newEvent = {
      type: eventType,
      date: new Date(),
      description: eventDescription,
      impact: {
        styleNeeds: [],
        urgency: 'medium'
      }
    };
    memory.addLifestyleEvent(newEvent);
    lifestyleEvents.push(newEvent);
    eventDescription = '';
    eventType = '';
  }
</script>

<div class="max-w-6xl mx-auto p-6">
  <h2 class="text-2xl font-bold mb-6">Add Lifestyle Event</h2>

  <input 
    type="text" 
    bind:value={eventDescription} 
    placeholder="Event description"
    class="mt-1 block w-full border rounded-md p-2"
  />

  <select bind:value={eventType} class="mt-1 block w-full border rounded-md p-2">
    <option value="">Select Event Type</option>
    <option value="wedding">Attending a Wedding</option>
    <option value="new_job">Starting a New Job</option>
    <option value="vacation">Going on Vacation</option>
    <!-- Add more event types as needed -->
  </select>

  <button 
    class="mt-4 bg-black text-white py-2 px-4 rounded"
    on:click={addEvent}
  >
    Add Event
  </button>

  <h3 class="text-xl font-semibold mt-6">Upcoming Events</h3>
  <ul>
    {#each lifestyleEvents as event}
      <li>{event.description} on {event.date.toLocaleDateString()}</li>
    {/each}
  </ul>
</div>
