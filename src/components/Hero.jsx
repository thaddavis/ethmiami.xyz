import Identicon from "react-identicons";
import { setGlobalState, useGlobalState, truncate } from "../store";
import NeonBox from "./NeonBox";

// import GatorV1 from "../assets/AlligatorV1.png";
import Alligator from "../assets/AlligatorCROPPED.png";

import { useNavigate } from "react-router-dom";

export const Hero = () => {
  //   const [connectedAccount] = useGlobalState('connectedAccount')
  const navigate = useNavigate();

  const onCreatedNFT = () => {
    setGlobalState("modal", "scale-100");
  };

  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto py-10"
    >
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-white text-5xl font-bold">
            <span className="text-[#e32970]">ETHMiami.xyz</span>
          </h1>
          <p className="text-gray-500 font-semibold text-sm mt-3">
            How much are you really trying to chill?
          </p>
        </div>

        {/* <div className="flex flex-row mt-5">
          <button
            className="shadow-sm shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f]
            rounded-full cursor-pointer px-4 py-2"
            onClick={onCreatedNFT}
          >
            Create NFT
          </button>
        </div> */}

        <div className="w-3/4 flex justify-between items-center mt-5 py-6">
          <div className="m-2">
            <p className="text-[#12c0f1] text-3xl font-bold">3</p>
            <small className="text-[#12c0f1] text-2xl">Gators</small>
            {/* <NeonBox number={3} name={"Gators"} /> */}
          </div>
          <div className="m-2">
            <p className="text-[#12c0f1] text-3xl font-bold">0</p>
            <small className="text-[#12c0f1] text-2xl">Flamingos</small>
            {/* <NeonBox number={0} name={"Flamingos"} /> */}
          </div>
          <div className="m-2">
            <p className="text-[#12c0f1] text-3xl font-bold">5</p>
            <small className="text-[#12c0f1] text-2xl">Dolphins</small>
            {/* <NeonBox number={5} name={"Dolphins"} /> */}
          </div>
        </div>
      </div>

      <div
        className="shadow-lg shadow-[#e32970] md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-md overflow-hidden bg-white"
        onClick={() => {
          console.log("___ ___ ___");
          navigate("/3d/gator");
        }}
      >
        <img
          src={Alligator}
          alt="NFT Art"
          className="h-auto w-full object-contain aspect-square"
        />
        <div className="flex justify-start items-center p-3">
          <Identicon
            // string={connectedAccount ? connectedAccount : 'Connect Your Wallet'}
            size={50}
            className="h-10 w-10 object-contain rounded-full mr-3"
          />
          <div>
            <p className="text-white font-semibold">
              {/* {connectedAccount
                ? truncate(connectedAccount, 4, 4, 11)
                : 'Connect Your Wallet'} */}
            </p>
            <small className="text-pink-800 font-bold">@VeX</small>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Hero
