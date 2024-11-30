<script lang="ts">
  import { notificationStore } from '../../lib/stores/notificationStore';
  import { onMount } from 'svelte';

  interface Notification {
    id: string;
    message: string;
    type: 'info' | 'success' | 'error';
  }

  let notifications: Notification[] = []; // Explicitly define the type

  const unsubscribe = notificationStore.subscribe((value) => {
    notifications = value;
  });

  onMount(() => {
    return () => unsubscribe();
  });
</script>

<div class="fixed top-0 right-0 p-4">
  {#each notifications as notification (notification.id)}
    <div class="mb-2 p-4 rounded shadow-lg {notification.type === 'success' ? 'bg-green-200' : notification.type === 'error' ? 'bg-red-200' : 'bg-blue-200'}">
      <p>{notification.message}</p>
    </div>
  {/each}
</div>
