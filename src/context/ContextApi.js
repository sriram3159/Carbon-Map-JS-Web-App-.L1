import React, { useReducer, useContext, useMemo } from "react";
import { MyContext } from "./MyContext.js";

const initialState = {
  location: {
    id: 1,
    cityName: "North Scotland",
    loc: { lat: 58.635, lng: -3.07 }, // Northern Scotland near John o' Groats
  },
  carbonData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_CARBON_DATA":
      return { ...state, carbonData: action.payload };
    default:
      return state;
  }
};

export const ContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  return context;
};

export default ContextApi;
