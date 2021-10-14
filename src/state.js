import { writable } from "svelte/store";

export const user = writable(false);
export const account = writable(null);
export const posts = writable([]);
export const users = writable([]);
