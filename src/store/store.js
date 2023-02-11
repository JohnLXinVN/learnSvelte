import { writable } from 'svelte/store';

export const activeFeature = writable('booking');
export const activeModalNav = writable(false);
export const activeModalBlogNav = writable(false);
