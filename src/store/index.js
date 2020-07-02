import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
// import { createStore, applyMiddleware, compose } from "redux";

// // middlewares
// import thunkMiddleware from "redux-thunk";

// // Import custom components
// import rootReducer from "./reducers";

// function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("state", serializedState);
//   } catch (e) {
//     console.log(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem("state");
//     if (serializedState === null) return undefined;
//     return JSON.parse(serializedState);
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// }

// const persistedState = loadFromLocalStorage();

// /**
//  * Create a Redux store that holds the app state.
//  */
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunkMiddleware),

//     //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
//     window.__REDUX_DEVTOOLS_EXTENSION__
//       ? window.__REDUX_DEVTOOLS_EXTENSION__()
//       : function(f) {
//           return f;
//         }
//   )
// );

// const unsubscribe = store.subscribe(() => {
//   const state = store.getState();
//   saveToLocalStorage(state);
// });