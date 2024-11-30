import { writable } from 'svelte/store';

interface Notification {
  id: string;
  message: string;
  type: 'info' | 'success' | 'error';
  duration?: number; // Duration in milliseconds
}

const { subscribe, update } = writable<Notification[]>([]);

function addNotification(notification: Notification) {
  update((notifications) => {
    const newNotifications = [...notifications, notification];
    if (notification.duration) {
      setTimeout(() => {
        removeNotification(notification.id);
      }, notification.duration);
    }
    return newNotifications;
  });
}

function removeNotification(id: string) {
  update((notifications) => notifications.filter((n) => n.id !== id));
}

export const notificationStore = {
  subscribe,
  addNotification,
  removeNotification,
};
