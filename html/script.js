const counter = document.getElementById("counter");

const incrementInput = document.getElementById("increment");
const decrementInput = document.getElementById("decrement");

//initial state
const initialState = {
  value: 0,
};

console.log(initialState.value);
// console.log("Hello");

function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 2,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counter.innerText = state.value.toString();
  console.log(state.value);
};

counter;

store.subscribe(render);

incrementInput.addEventListener("enter", () => {
  store.dispatch({
    type: "increment",
  });
});

decrementInput.addEventListener("input", () => {
  store.dispatch({
    type: "decrement",
  });
});
