import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import BookmarkSingleData from "../BookmarkSingleData/BookmarkSingleData";
import { useNavigate } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";

const MyBookMarkD = () => {
  /** component needed state and data */
  const token = Cookies.get("token");
  /** component state and hocks */
  const [loading, setLoading] = useState(true);
  const [bookmark, setBookmark] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://easy-buy.onrender.com/api/v1/bookmark`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (
          res.data.status === 500 ||
          res.data.message === "jwt expired" ||
          res.data.message === "jwt malformed"
        ) {
          Cookies.remove("id");
          Cookies.remove("token");
          navigate("/login");
          setLoading(false);
        } else {
          setBookmark(res.data);
          setLoading(false);
        }
      });
  }, [bookmark]);

  const handleRemoveBookmark = async (id) => {
    await axios
      .delete(`https://easy-buy.onrender.com/api/v1/bookmark/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res));
  };

  return (
    <div>
      <div>
        {loading ? (
          <div className="flex justify-center w-full h-[300px] items-center">
            <MutatingDots
              height="100"
              width="100"
              color="#4fa94d"
              secondaryColor="#4fa94d"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <div className="container_c mx-auto mt-10  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
            {bookmark?.map((p, index) => (
              <BookmarkSingleData
                key={index}
                data={p}
                handleRemoveBookmark={handleRemoveBookmark}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookMarkD;
