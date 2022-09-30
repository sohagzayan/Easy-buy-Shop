import axios from "axios";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import demouser from "../../assets/clock.png";
import { deleteFormCard, getAddToCard } from "../../Querys/BookmarkQuery";
import Loading from "../Loading/Loading";
import CardSingleProducts from "./CardSingleProducts";
import cookie from "js-cookie";
import { useEffect } from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { useState } from "react";

const Card = ({ card }) => {
  const token = cookie.get("token");

  const cache = useQueryClient();

  const {
    isLoading: loading,
    isError,
    mutateAsync,
    data: res,
  } = useMutation("deleteformcard", deleteFormCard, {
    onSuccess: () => {
      cache.invalidateQueries("addToCard");
    },
  });

  // if (isLoading) {
  //   return <Loading />;
  // }
  if (loading) {
    return <Loading />;
  }

  console.log(res);

  return (
    <>
      <ul className="absolute w-[350px] right-0 top-14 border-[1px] border-own-primary bg-own-white dark:bg-own-dark-bg px-5 py-3 rounded-md shadow-md">
        {card?.length > 0 ? (
          card?.map((p) => (
            <CardSingleProducts mutateAsync={mutateAsync} data={p} />
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
