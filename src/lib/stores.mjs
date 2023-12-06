import { writable } from "svelte/store";
export const route = writable("#home");
export const userStore = writable({ isLoggedIn: false, user: null });
export const currentImage = writable(null);
export const favorites = writable(
  JSON.parse(localStorage.getItem("favorites")) || []
);
