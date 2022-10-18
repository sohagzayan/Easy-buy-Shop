import axios from "axios";
import cookie from "js-cookie";
const token = cookie.get("token");

export const getBookMarkData = async () => {
  const { data } = await axios.get(
    "https://easy-buy-shop-backend.vercel.app/api/v1/bookmark",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const getAddToCard = async () => {
  const { data } = await axios.get(
    "https://easy-buy-shop-backend.vercel.app/api/v1/addToCard",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const addToCardPost = async (id) => {
  const res = await axios.post(
    `https://easy-buy-shop-backend.vercel.app/api/v1/addToCard/${id}`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const deleteFormCard = async (id) => {
  const res = await axios.delete(
    `https://easy-buy-shop-backend.vercel.app/api/v1/addToCard/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
