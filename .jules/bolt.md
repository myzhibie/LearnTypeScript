## 2025-03-09 - Store Listener Unsubscription in Place
**Learning:** Replacing `filter` with `indexOf` and `splice` in `Store.unsubscribe` avoids unnecessary array allocations per unsubscription, but `dispatch()` must iterate over a snapshot copy (`slice()`) to prevent array index shifting if a listener unsubscribes during callback execution.
**Action:** Always snapshot listener lists before dispatching callbacks when unsubscription mutates the listener array in-place.
