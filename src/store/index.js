import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "../redux/features/cakeSlice";
import IceCreamReducer from "../redux/features/icecreamSlice";
import TodoReducer from "../redux/features/todoSlice";
const store = configureStore({
  reducer: {
    cake: CakeReducer,
    iceCream: IceCreamReducer,
    todo: TodoReducer,
  },
});

export default store;
