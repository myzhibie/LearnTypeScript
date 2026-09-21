## 2025-05-20 - Store Listener Unsubscribe Performance
**Learning:** Using `Array.prototype.filter` to remove listeners in event stores or state stores results in O(N^2) total execution time and frequent array allocations for repeated subscribe/unsubscribe cycles. Replacing the array with ES6 `Set` improves unsubscribe complexity to O(1) time and eliminates array reallocation overhead.
**Action:** Prefer `Set<ListenerCallback>` over arrays for subscriber collections in pub/sub or state management stores.
