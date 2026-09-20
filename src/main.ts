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
  private _listeners: ListenerCallback[] = [];
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
    // Take a snapshot copy of listeners during dispatch to allow safe iteration
    // even if subscribers unsubscribe or subscribe during notification callback execution.
    const listeners = this._listeners.slice();
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }
  subscribe(listener: ListenerCallback): UnsubscribeCallback {
    this._listeners.push(listener);
    return () => {
      // Optimization: Use indexOf and splice for in-place removal instead of filter(),
      // avoiding unnecessary O(N) array reallocation on unsubscribe.
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
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




















































































































