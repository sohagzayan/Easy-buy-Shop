import axios from "axios";
import chest from "../assets/images/chest.png";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";
import swal from "sweetalert";

const AddTools = () => {
  const imagebbKey = "0b8c4fea4eba3001acb5a66d0574e4b5";

  const schema = yup
    .object({
      name: yup.string().required(),
      details: yup.string().required(),
      quantity: yup.number().required(),
      price: yup.number().required(),
      minimumOrder: yup.number().required(),
    })
    .required();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const images = data.image[0];
    const formData = new FormData();
    formData.append("image", images);
    const url = `https://api.imgbb.com/1/upload?key=${imagebbKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log(result.data.url);
          const newPost = {
            name: data.name,
            details: data.details,
            quantity: data.quantity,
            price: data.price,
            minimumOrder: data.minimumOrder,
            image: result.data.url,
          };
          try {
            axios.post(
              "https://easy-buy-shop-server.onrender.com/api/tools",
              newPost
            );
            console.log("success");
            swal("Good job!", "Your New Tools Added SuccessFully", "success");
            reset();
          } catch (error) {
            console.log(error);
          }
        }
      });
  };

  const handleUser = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <div>
          <div className="hero mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <div className="">
                  <img className="w-[200px] mx-auto" src={chest} alt="" />
                </div>
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-own-secondary dark:text-own-white">
                    Add Products/tools
                  </h1>
                  <p className="py-3 text-own-secondary dark:text-own-white">
                    excepturi exercitationem quasi. In deleniti eaque aut
                    repudiandae et a id nisi.
                  </p>
                </div>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-own-ternary">
                <div className="card-body  ">
                  {/* <img width="300px" src={item ? MF + item.image : null } alt="" /> */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      required
                      className="mb-4 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-own-primary cursor-pointer text-own-primary focus:outline-none bg-[#141A28] dark:border-gray-600 dark:placeholder-gray-400  "
                      type="file"
                      {...register("image")}
                    />

                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Title"
                      className="input text-own-primary font-semibold text-lg bg-[#141a28] placeholder:text-own-primary placeholder:font-light w-full focus:outline-own-secondary mb-2 "
                    />
                    <ErrorMessage
                      errors={errors}
                      name="name"
                      render={({ message }) => (
                        <p className="text-[#F23030] mb-1">{message}</p>
                      )}
                    />
                    <input
                      {...register("minimumOrder")}
                      type="number"
                      placeholder="Minimum Order Quantity"
                      className="input text-own-primary font-semibold text-lg bg-[#141a28] placeholder:text-own-primary placeholder:font-light w-full focus:outline-own-secondary mb-3 "
                    />
                    <ErrorMessage
                      errors={errors}
                      name="minimumOrder"
                      render={({ message }) => (
                        <p className="text-[#F23030] mb-1">{message}</p>
                      )}
                    />
                    <input
                      {...register("quantity")}
                      type="number"
                      placeholder="Available Quantity"
                      className="input text-own-primary font-semibold text-lg bg-[#141a28] placeholder:text-own-primary placeholder:font-light w-full focus:outline-own-secondary mb-3 "
                    />
                    <ErrorMessage
                      errors={errors}
                      name="quantity"
                      render={({ message }) => (
                        <p className="text-[#F23030] mb-1">{message}</p>
                      )}
                    />
                    <input
                      {...register("price")}
                      type="number"
                      placeholder="Price"
                      className="input text-own-primary font-semibold text-lg bg-[#141a28] placeholder:text-own-primary placeholder:font-light w-full focus:outline-own-secondary mb-3 "
                    />
                    <ErrorMessage
                      errors={errors}
                      name="price"
                      render={({ message }) => (
                        <p className="text-[#F23030] mb-1">{message}</p>
                      )}
                    />
                    <textarea
                      {...register("details")}
                      className="input text-own-primary font-semibold text-lg bg-[#141a28] placeholder:text-own-primary placeholder:font-light w-full focus:outline-own-secondary mb-3 "
                      placeholder="Bio"
                    ></textarea>
                    <ErrorMessage
                      errors={errors}
                      name="details"
                      render={({ message }) => (
                        <p className="text-[#F23030] mb-1">{message}</p>
                      )}
                    />
                    <button className="btn bg-own-primary text-own-secondary dark:text-own-white border-transparent text-white">
                      ADD PRODUCT
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTools;
