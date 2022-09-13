import axios from "axios";
import React, { useState } from "react";

const AddTools = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [minimumOrder, setMinimumOrder] = useState("");
  const [file, setFile] = useState(null);
  const MF = "https://tranquil-shelf-42201.herokuapp.com/upload/";

  const handleUser = async (e) => {
    e.preventDefault();
    const newPost = {
      name,
      details,
      quantity,
      price,
      minimumOrder,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.image = fileName;

      try {
        const imgInfo = await axios.post(
          "https://tranquil-shelf-42201.herokuapp.com/upload",
          data
        );
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const data = await axios.post(
        "https://tranquil-shelf-42201.herokuapp.com/api/tools",
        newPost
      );
      setFile(null);
      setName("");
      setDetails("");
      setQuantity("");
      setPrice("");
      setMinimumOrder("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <div>
          <div class="hero mt-10">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <div class="text-center lg:text-left">
                <h1 class="text-4xl font-bold text-own-white">
                  Add Products/tools
                </h1>
                <p class="py-3 text-own-white">
                  excepturi exercitationem quasi. In deleniti eaque aut
                  repudiandae et a id nisi.
                </p>
              </div>
              <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-own-ternary">
                <div class="card-body  ">
                  {/* <img width="300px" src={item ? MF + item.image : null } alt="" /> */}
                  <form onSubmit={handleUser}>
                    <input
                      required
                      className="mb-4"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                      required
                      type="text"
                      placeholder="Title"
                      className="input text-own-primary font-semibold text-lg bg-[#141a28] placeholder:text-own-primary placeholder:font-normal w-full focus:outline-own-secondary mb-3 "
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      required
                      type="number"
                      placeholder="Minimum Order Quantity"
                      className="input text-own-primary font-semibold text-lg bg-[#141a28] placeholder:text-own-primary placeholder:font-normal w-full focus:outline-own-secondary mb-3 "
                      value={minimumOrder}
                      onChange={(e) => setMinimumOrder(e.target.value)}
                    />
                    <input
                      required
                      type="number"
                      placeholder="Available Quantity"
                      className="input text-own-primary font-semibold text-lg bg-[#141a28] placeholder:text-own-primary placeholder:font-normal w-full focus:outline-own-secondary mb-3 "
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <input
                      required
                      type="number"
                      placeholder="Price"
                      className="input text-own-primary font-semibold text-lg bg-[#141a28] placeholder:text-own-primary placeholder:font-normal w-full focus:outline-own-secondary mb-3 "
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <textarea
                      required
                      className="input text-own-primary font-semibold text-lg bg-[#141a28] placeholder:text-own-primary placeholder:font-normal w-full focus:outline-own-secondary mb-3 "
                      placeholder="Bio"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                    ></textarea>
                    <button class="btn bg-own-primary text-own-white border-transparent text-white">
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
