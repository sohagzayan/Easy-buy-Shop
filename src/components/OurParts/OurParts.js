import { NavLink } from "react-router-dom";
import OurPartsProducts from "../OurPartsProducts/OurPartsProducts";
import { useToolsQuery } from "../../store/API/tools";
import { TailSpin } from "react-loader-spinner";

const OurParts = () => {
  const { data, isLoading } = useToolsQuery();
  return (
    <div className="mt-10  overflow-x-hidden dark:bg-own-dark-bg-special py-5 bg-own-white-special">
      <div>
        <h2 className=" text-own-secondary dark:text-own-white text-3xl  text-center block tracking-widest font-semibold ">
          Our Products
        </h2>
        <span className="text-own-secondary dark:text-own-white   text-center block tracking-widest font-semibold mb-6">
          Popular Items
        </span>
        {isLoading ? (
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <div className=" container_c mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
            {data?.map((item, index) => (
              <OurPartsProducts key={index} item={item} />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center ">
        <NavLink
          to="/shops"
          className="btn-animation flex justify-center items-center"
        >
          All Products
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </NavLink>
      </div>
    </div>
  );
};

export default OurParts;
