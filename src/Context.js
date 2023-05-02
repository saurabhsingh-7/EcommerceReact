import { createContext, useReducer } from "react";

export const Context = createContext();

function ContextProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempstate = state.filter((item) => action.payload.id === item.id);

        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };

  return <Context.Provider value={info}>{children}</Context.Provider>;
}

export default ContextProvider;
