import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const token = Cookies.get("token");

const initialState = {
  cardProduct: [],
  productIds: [],
  subTotal: 0,
  status: "",
};
const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.subTotal = 0;
      state.productIds = [];
      action?.payload?.map((r) => {
        state.subTotal = state.subTotal + r.subTotal;
        state.productIds.push(r?.productId);
      });
      state.cardProduct = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProduct, setStatus } = cardSlice.actions;
export default cardSlice.reducer;

export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const { data } = await axios.get(
        "https://easy-buy.onrender.com/api/v1/addToCard",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setProduct(data));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      console.log(error);
      console.log(
        `Error Form our Card reducer Slice error is ${error.message}`
      );
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
