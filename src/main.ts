interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T>{
  (state: T, action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'PLUS':
      return state + action.payload;
    default:
      return state;
  }
};

class Store<T>{
  private _state: T;
  // Bolt optimization: Use a Set for listener management instead of Array.
  // This improves subscription adding/removal from O(N) linear filter with array allocation to O(1) set operations.
  private _listeners: Set<ListenerCallback> = new Set<ListenerCallback>();
  constructor(
    private reducer: Reducer<T>,
    initialState: T) {
    this._state = initialState;
  }
  getState(): T {
    return this._state;
  }
  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
    this._listeners.forEach((listener: ListenerCallback) => listener());
  }
  subscribe(listener: ListenerCallback): UnsubscribeCallback {
    this._listeners.add(listener);
    return () => {
      this._listeners.delete(listener);
    };
  }

}

interface ListenerCallback{
  (): void;
}


interface UnsubscribeCallback{
  (): void;
}



// let store = new Store<number>(reducer, 0);
// console.log(store.getState());
// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());

// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());

// store.dispatch({ type: 'DECREMENT' });
// console.log(store.getState());



// let incrementAction: Action = { type: 'INCREMENT' };
// let decrementAction: Action = { type: 'DECREMENT' };
// let unknownAction: Action = { type: 'UNKNOWN' };

// let plusSevenAction = { type: 'PLUS', payload: 7 };

// console.log(reducer(0,incrementAction));
// console.log(reducer(0, incrementAction));

// console.log(reducer(100, decrementAction));
// console.log(reducer(100, unknownAction));
// console.log(reducer(3, { type: 'PLUS', payload: 7 }));
// console.log(reducer(3, { type: 'PLUS', payload: 9000 }));
// console.log(reducer(3, { type: 'PLUS', payload: -2 }));

let store = new Store<number>(reducer, 0);
console.log(store.getState());

let unsubscribe=store.subscribe(()=>{
  console.log('subscribed:', store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
unsubscribe();
store.dispatch({ type: 'DECREMENT' });

console.log(store.getState());




















































































































