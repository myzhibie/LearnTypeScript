## 2025-05-18 - Listener Registration in Event Stores
**Learning:** Using `Array.prototype.filter` for listener unsubscription in event store / subscriber implementations results in O(N) execution time and creates new array allocations per unsubscribe call. Replacing `Array` with `Set` reduces both subscribe and unsubscribe operations to O(1) time complexity with zero garbage collection overhead from array allocations.
**Action:** Use ES6 `Set` for subscriber and listener listener sets in event stores or pub/sub patterns.
