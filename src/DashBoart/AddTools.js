import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";

const AddTools = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [minimumOrder, setMinimumOrder] = useState("");
  const [file, setFile] = useState(null);
  const [toolsImage , setToolsImage] = useState('')
  const MF = "https://tranquil-shelf-42201.herokuapp.com/upload/";

  const handleUser = async (e) => {
    e.preventDefault();
    const newPost = {
      name,
      details,
      quantity,
      price,
      minimumOrder,
      image : toolsImage
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      // newPost.image = fileName;

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
      setToolsImage("")
      swal("Add Tools SuccessFull");

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <div>
          <div className="hero mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold">Add Products/tools</h1>
                <p className="py-3">
                  excepturi exercitationem quasi. In deleniti eaque aut
                  repudiandae et a id nisi.
                </p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  {/* <img width="300px" src={item ? MF + item.image : null } alt="" /> */}
                  <form onSubmit={handleUser}>
                 
                    <input
                      required
                      type="text"
                      placeholder="Title"
                      className="input w-full mb-2 input-bordered"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      required
                      type="number"
                      placeholder="Minimum Order Quantity"
                      className="input w-full mb-2 input-bordered"
                      value={minimumOrder}
                      onChange={(e) => setMinimumOrder(e.target.value)}
                    />
                    <input
                      required
                      type="number"
                      placeholder="Available Quantity"
                      className="input w-full mb-2 input-bordered"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <input
                      required
                      type="number"
                      placeholder="Price"
                      className="input w-full mb-2 input-bordered"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                      required
                      className="input w-full mb-2 input-bordered"
                      type="text"
                      placeholder="Image link Here"
                      onChange={(e) => setToolsImage(e.target.value)}
                      value={toolsImage}
                    />
                    
                    <textarea
                      required
                      className="textarea textarea-secondary w-full"
                      placeholder="Bio"
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                    ></textarea>
                    <button className="btn btn-secondary text-white">
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



