import Image from "next/image";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co.com/g6JPtjJ/gradient-bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "1400px",
      }}
      className="flex justify-center items-center h-screen w-full"
    >
      <div
        className="
      relative
      w-[400px] h-[400px] rounded-[10px] 
      shadow-[16px_16px_20px_#0000008c]
      overflow-hidden 
      before:absolute
      before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%]
      before:bg-[conic-gradient(transparent,transparent,#E02EE2)]
      before:animate-spin-slow"
      >
        <div
          className="absolute
             flex justify-center align-middle
              top-[5px] right-[5px] bottom-[5px] left-[5px] rounded-[10px]
              bg-[#000c13]
           shadow-[16px_16px_20px_#0000008c_inset]
          "
        >
          <h3 className="text-center text-white flex items-center justify-center text-xl">
            TailwindCSS
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
