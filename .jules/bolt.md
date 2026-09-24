## 2025-05-18 - Set vs Array for Store Listeners
**Learning:** Store listeners stored in an array with `.filter()` unsubscribe logic cause $O(N)$ array allocations and linear scans on every unsubscribe call. Using `Set<ListenerCallback>` optimizes subscribe and unsubscribe to $O(1)$ without allocating temporary arrays.
**Action:** Use `Set` for event subscription lists when order uniqueness and $O(1)$ unsubscribe operations with zero allocations are desired.
