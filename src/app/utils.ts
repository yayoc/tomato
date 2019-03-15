import moment from "moment";

/**
 * A function for creating a notification
 *
 * @param text body message
 */
export const createNotification = (text: string) => {
  if (!("Notification" in window)) {
    alert("This browser does not support notifications.");
    return;
  }
  if (Notification.permission === "granted") {
    notify(text);
  } else if (Notification.permission !== "denied") {
    // Otherwise, We need to ask the user for permission
    // Note, Chrome does not implement the permission static property
    // So we have to check for NOT 'denied' instead of 'default'
    Notification.requestPermission(permission => {
      // Whatever the user answers, we make sure Chrome stores the information
      if (!("permission" in Notification)) {
        (Notification as any).permission = permission;
      }
      // If the user is okay, Create a notification.
      if (permission === "granted") {
        notify(text);
      }
    });
  }
};

/**
 * Notify a message to the user
 *
 * @param text body message
 */
const notify = (text: string) => {
  // TODO: Add a image
  const img = "";
  new Notification("tomato", { body: text, image: img });
  window.navigator.vibrate(500);
};

export const toMIN = (ms: number): number => ms / (1000 * 60);
export const toMS = (min: number): number => min * 1000 * 60;

/**
 * Format a Date object to MMMM Do YYYY, h:mm:ss a
 * March 15th 2019, 10:45:09 pm
 *
 * @param date
 */
export const formatDate = (date: string): string => {
  return moment(date).format("MMMM Do YYYY, h:mm:ss a");
};
