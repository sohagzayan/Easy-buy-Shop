import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { useCurrentUserQuery } from "../API/user";
const token = Cookies.get("token");
const userId = Cookies.get("id");

const initialState = {
  myProduct: [],
  status: "",
};

const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

export const myProductSlice = createSlice({
  name: "my_product",
  initialState,
  reducers: {
    setMyProduct(state, action) {
      state.myProduct = action.payload;
    },
    setMyStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setMyProduct, setMyStatus } = myProductSlice.actions;
export default myProductSlice.reducer;

export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setMyStatus(STATUS.LOADING));
    try {
      const { data } = await axios.get(
        `https://easy-buy-shop-server.onrender.com/api/v1/tools?currentUser/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setMyProduct(data));
      dispatch(setMyStatus(STATUS.IDLE));
    } catch (error) {
      console.log(
        `Error Form our Card reducer Slice error is ${error.message}`
      );
      dispatch(setMyStatus(STATUS.ERROR));
    }
  };
}
