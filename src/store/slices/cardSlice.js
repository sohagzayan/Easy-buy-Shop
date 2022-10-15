import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

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
      // console.log("action.payload", state.cardProducts);
      state.cardProduct = action.payload;
      // console.log(cardProducts.length);
      state?.cardProduct?.map((r) => {
        state.subTotal = state.subTotal + r.subTotal;
        state.productIds.push(r?.productId);
      });
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProduct, setStatus } = cardSlice.actions;
export default cardSlice.reducer;

export function fetchProducts(id) {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const data = await axios.get(
        `http://localhost:5000/api/v1/addToCard/${id}`
      );
      // console.log(data.data.product);
      dispatch(setProduct(data?.data?.product));
      dispatch(setStatus(STATUS.IDLE));
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
