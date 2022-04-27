import { runMain } from "module";
import { type } from "os";

export default function location(state = "London, UK", action) {
  switch (action.type) {
    case "ADD_TODO":
      return Object.assign({}, state, {
        todos: [
          {
            title: action.title,
            completed: false,
            id: getId(state),
          },
          ...state.todos,
        ],
      });
    case "COMPLETE_TODO":
      return;
    default:
      return state;
  }
}

// every reducer take in current state, then it'll take an action.
// that action must have a type.
// take the type and return payload. and what they return will be the new state.

// this reducer (location reducer) will get called with every single action.
// (if I change animal action, this reducer is still going to run. this is why they need to have default state)
