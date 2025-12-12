import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { computed } from '@angular/core';

// Define the state interface
interface CounterState {
  count: number;
}

// Initial state
const initialState: CounterState = {
  count: 0,
};

// Create the counter store
export const CounterStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    // Computed value: double the count
    doubleCount: computed(() => store.count() * 2),
    // Computed value: check if count is positive
    isPositive: computed(() => store.count() > 0),
  })),
  withMethods((store) => ({
    // Method to increment the counter
    increment() {
      patchState(store, (state) => ({ count: state.count + 1 }));
    },
    // Method to decrement the counter
    decrement() {
      patchState(store, (state) => ({ count: state.count - 1 }));
    },
    // Method to reset the counter
    reset() {
      patchState(store, { count: 0 });
    },
    // Method to set a specific value
    setValue(value: number) {
      patchState(store, { count: value });
    },
  }))
);
