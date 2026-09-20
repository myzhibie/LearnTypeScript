## 2025-05-18 - In-place array mutation during listener notification iteration
**Learning:** Replacing `array.filter()` with `array.splice()` in event listeners/subscriptions improves allocation overhead, but mutating the active listener array in-place while iterating during `dispatch` can skip listener invocations if a callback unsubscribes during dispatch.
**Action:** Always slice a snapshot array before iterating over listeners during `dispatch` when using in-place `splice()` in `unsubscribe()`.
