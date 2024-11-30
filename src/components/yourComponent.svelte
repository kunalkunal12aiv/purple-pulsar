<script lang="ts">
  // Update the import path if the notificationStore module is located elsewhere
  import { notificationStore } from '../../lib/stores/notificationStore'; // Ensure this path is correct

  interface WishlistItem {
    title: string;
  }

  function addToWishlist(item: WishlistItem) {
    // Logic to add item to wishlist
    notificationStore.addNotification({
      id: crypto.randomUUID(),
      message: `${item.title} has been added to your wishlist!`,
      type: 'success',
      duration: 3000, // 3 seconds
    });
  }
</script>
