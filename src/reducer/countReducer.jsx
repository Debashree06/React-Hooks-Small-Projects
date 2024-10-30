export function countReducer(state, action) {
  if (action.type == "inc") {
    return state + action.payload;
  } else if (action.type == "dec") {
    return state - action.payload;
  } else return state;
}
