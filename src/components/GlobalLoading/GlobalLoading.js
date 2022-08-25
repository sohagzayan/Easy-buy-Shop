import { RotatingSquare } from "react-loader-spinner";

const GlobalLoading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#000] flex-col ">
      <RotatingSquare
        height="100"
        width="100"
        color="#EF584E"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p className="text-white text-2xl">Loading.</p>
    </div>
  );
};

export default GlobalLoading;
