import axios from "axios";
import React from "react";
import CardSingleProducts from "./CardSingleProducts";
import cookie from "js-cookie";
import { toast } from "react-toastify";

const Card = ({ card }) => {
  const token = cookie.get("token");

  const deleteFormCard = async (id) => {
    await axios
      .delete(`https://easy-buy.onrender.com/api/v1/addToCard/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Remove Form Your Card", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <>
      <ul className="absolute w-[350px] right-0 top-14 border-[1px] border-own-primary bg-own-white dark:bg-own-dark-bg px-5 py-3 rounded-md shadow-md">
        {card?.length > 0 ? (
          card?.map((p) => (
            <CardSingleProducts deleteFormCard={deleteFormCard} data={p} />
          ))
        ) : (
          <div className="text-center">
            <h3 className="text-2xl">Emty Card</h3>
            <p>Pleace Add Products</p>
            <span>{/* <GiEmptyHourglass /> */}</span>
          </div>
        )}
      </ul>
    </>
  );
};

export default Card;
