import { writable } from 'svelte/store';

export const itemsInCart = writable();

if (typeof window !== "undefined") {
  itemsInCart = writable(JSON.parse(localStorage.getItem('itemsInCart')));
}

// export const itemsInCart = (key, initial) => 
// {
//     const persist = localStorage.getItem(key);
//     const data = persist ? JSON.parse(persist) : initial;

//     const store = writable(data, () => {
//         const unsubscribe = store.subscribe(value => {
//             localStorage.setItem(key, JSON.stringify(value))
//         });
//         return unsubscribe;
//     });

//     return store
// }