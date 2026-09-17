# Bolt's Journal

## 2026-03-31 - Object.assign cannot replace for..in extend for class instances
**Learning:** `Object.assign` only copies *own* enumerable properties, whereas `for..in` traverses prototype chains. Functions like `extend` that merge class instances (e.g., `new ConsoleLogger()`) rely on `for..in` to copy methods defined on prototypes. Replacing `for..in` with `Object.assign` drops prototype methods, breaking runtime method calls.
**Action:** Do not replace `for..in` mixin/extend implementations with `Object.assign` when prototype properties need to be copied.
