import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import FolloUser from "./FolloUser";

const MyFolloerD = () => {
  /** component needed state and data */
  const token = Cookies.get("token");

  /** component state and hocks */
  const [follower, setFollower] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://easy-buy.onrender.com/api/v1/user/user/follow_user?getMyFolloer=12",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
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
          setFollower(res.data);
          setLoading(false);
        }
      });
  }, [follower]);

  const handleRemoveFollowList = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Delete Your Follower form your list, ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Success Remove Follower form your Follower list!", {
          icon: "success",
        });
        axios.get(
          `https://easy-buy.onrender.com/api/v1/user/user/follow_user_remove?removeFollowList=${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div>
      <div className="mt-10">
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
            <ul className=" container_c mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
              {follower?.map((f, index) => (
                <FolloUser
                  handleRemoveFollowList={handleRemoveFollowList}
                  key={index}
                  item={f}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFolloerD;
