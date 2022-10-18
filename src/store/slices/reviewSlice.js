import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
const token = Cookies.get("token");

const initialState = {
  review: [],
  pageSize: 0,
  status: "",
};

const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setReview(state, action) {
      state.review = action.payload;
      state.pageSize = Math.ceil(state.review.length / 2);
    },
    setMyStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setReview, setMyStatus } = reviewSlice.actions;
export default reviewSlice.reducer;

export function fetchProductReview(id, currentPage, pageSize) {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setMyStatus(STATUS.LOADING));
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/review?productId=${id}&page=${currentPage}&size=${pageSize}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setReview(data));
      dispatch(setMyStatus(STATUS.IDLE));
    } catch (error) {
      console.log(
        `Error Form our Review reducer Slice error is ${error.message}`
      );
      dispatch(setMyStatus(STATUS.ERROR));
    }
  };
}
