import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useCurrentUserQuery } from "../../store/API/user";
import BookmarkSingleData from "../BookmarkSingleData/BookmarkSingleData";
import OurPartsProducts from "../OurPartsProducts/OurPartsProducts";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import { getBookMarkData } from "../../Querys/BookmarkQuery";
import { useNavigate } from "react-router-dom";
import LoadingSpener from "../LoadingSpener/LoadingSpener";

const MyBookMarkD = () => {
  const [loading, setLoading] = useState(false);
  const [bookmark, setBookmark] = useState([]);
  const userid = Cookies.get("id");
  const token = Cookies.get("token");
  const response = useCurrentUserQuery(userid);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/v1/bookmark`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBookmark(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpener />;
  }

  return (
    <div>
      <div>
        <div className="container_c mx-auto mt-10  grid grid-cols-3 gap-12">
          {bookmark?.map((p) => (
            <BookmarkSingleData data={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookMarkD;
