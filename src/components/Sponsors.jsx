import { useEffect, useState } from "react";
import { setGlobalState, useGlobalState } from "../store";

import { useNavigate } from "react-router-dom";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

export const Sponsors = () => {
  const [sponsors] = useGlobalState("sponsors");

  return (
    <div className="bg-white gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5"> */}
        {/* <div className="container mx-auto px-4 py-8"> */}
        {/* <div className="bg-white shadow-md rounded-lg p-6 mx-2 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"> */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap m-2">
            {sponsors.map((nft, i) => (
              <Card key={i} sponsor={nft} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ sponsor }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className="bg-white shadow-lg shadow-[#e32970] rounded-lg p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto my-4"> */}
      <div className="bg-white shadow-lg shadow-[#e32970] rounded-lg p-6 w-[calc(full-1)] sm:w-[calc(1/2-1)] md:w-[calc(1/3-1)] lg:w-[calc(1/4-1)] xl:w-[calc(1/5-1)] mx-auto m-2">
        <img
          className="w-full h-48 object-contain aspect-square object-center mb-4 rounded"
          src={sponsor.image}
          alt={sponsor.name}
        />
        <h2 className="text-xl font-semibold mb-2">{sponsor.name}</h2>
      </div>
    </>
  );
};
