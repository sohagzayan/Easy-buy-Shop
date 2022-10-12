import React from "react";
import cappabolitis from "../../assets/images/capa.jpg";
import Signature from "../../assets/images/Signature.png";

const Capabilities = () => {
  return (
    <div className="hero mt-10 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={cappabolitis} className="max-w-lg rounded-lg " alt="img" />
        <div>
          <h2 className="text-3xl mb-3 font-bold text-secondary">
            Our Capabilities
          </h2>
          <p className="text-md mb-3">
            We Are Restocking as Quickly as Possible. Come Back 7/30 to Order,
            more of These Flavors Inspired by the Places You Call Home!
          </p>

          <img width="100px" className="my-6" src={Signature} alt="" />

          <button className="btn btn-secondary text-white">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
