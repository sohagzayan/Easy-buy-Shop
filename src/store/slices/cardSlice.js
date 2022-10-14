import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
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
      state.cardProduct = action.payload;
      if (state.cardProduct.length > 0) {
        state?.cardProduct?.map((r) => {
          state.subTotal = state.subTotal + r.subTotal;
          state.productIds.push(r?.productId);
        });
      }
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
      const data = await axios.get("http://localhost:5000/api/v1/addToCard", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      // if (
      //   data?.data.message === "jwt expired" ||
      //   data?.data.message === "jwt malformed"
      // ) {
      //   Cookies.remove("id");
      //   Cookies.remove("token");
      //   // Navigate("/login");
      //   toast.error(data?.data.message, {
      //     position: toast.POSITION.BOTTOM_CENTER,
      //   });
      // } else {
      //   dispatch(setProduct(data?.data));
      //   dispatch(setStatus(STATUS.IDLE));
      // }
      dispatch(setProduct(data?.data));
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
