import { useEffect, useState } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    const currentUser = { email: email };

    if (email) {
      fetch(`https://easy-buy-shop-backend.vercel.app/api/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const token = data.token;
          localStorage.setItem("accessToken", token);
          setToken(token)("hello", data.token);
        });
    }
  }, [user]);
  return [token, isLoading];
};

export default useToken;
