import { useEffect, useState } from "react";
import { setGlobalState, useGlobalState } from "../store";

import { useNavigate } from "react-router-dom";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

export const Artworks = () => {
  const [nfts] = useGlobalState("nfts");
  const [end, setEnd] = useState(4);
  const [count] = useState(4);
  const [collection, setCollection] = useState([]);

  const getCollection = () => {
    return nfts.slice(0, end);
  };

  useEffect(() => {
    setCollection(getCollection());
  }, [nfts, end]);

  return (
    <div className="bg-white gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-[#e32970] text-3xl font-bold uppercase">
          {collection.length > 0 ? "Featured" : "No Artwork Yet"}
        </h4>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5"> */}
        {/* <div className="container mx-auto px-4 py-8"> */}
        {/* <div className="bg-white shadow-md rounded-lg p-6 mx-2 my-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3"> */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap m-2">
            {collection.map((nft, i) => (
              <Card key={i} nft={nft} />
            ))}
          </div>
        </div>

        {/* {collection.length > 0 && nfts.length > collection.length ? (
          <div className="text-center my-5">
            <button
              className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f]
            rounded-full cursor-pointer p-2"
              onClick={() => setEnd(end + count)}
            >
              Load More
            </button>
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

const Card = ({ nft }) => {
  const navigate = useNavigate();

  const setNFT = () => {
    setGlobalState("nft", nft);
    setGlobalState("showModal", "scale-100");
  };

  return (
    <>
      <div className="bg-white shadow-lg shadow-[#e32970] rounded-lg p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto my-4">
        { (nft.crossmint_tesnet)? (
          <h2 className="text-[#e32970] text-md font-semibold">Goerly (Testnet)</h2>
        ):(
          <h2 className="text-[#e32970] text-md font-bold">Ethereum Mainnet</h2>
        )}
        <img
          className="w-full h-48 object-contain aspect-square object-center mb-4 rounded"
          src={nft.metadataURI}
          alt={nft.title}
        />
        <h2 className="text-xl font-semibold mb-2">{nft.title}</h2>

        <div className="flex flex-col justify-between items-center mt-3 text-[#e32970]">
          <div className="flex flex-col">
            <small className="text-xs">Current Price</small>
            <p className="text-sm font-semibold">{nft.cost} ETH</p>
          </div>

          <span className="flex">
            <button
              className="shadow-md shadow-black text-white text-sm bg-[#e32970]
            hover:bg-[#bd255f] cursor-pointer rounded-full px-4 py-2 m-1 font-extrabold"
              onClick={() => {
                if (
                  nft.id === "gator" ||
                  nft.id === "flamingo" ||
                  nft.id === "dolphin"
                ) {
                  navigate(`/3d/${nft.id}`);
                } else {
                }
              }}
            >
              View
            </button>

            {/* <button
            className="shadow-md shadow-black text-white text-sm bg-[#e32970]
            hover:bg-[#bd255f] cursor-pointer rounded-full px-4 py-2 m-1"
            onClick={setNFT}
          >
            Buy
          </button> */}

          { (nft.crossmint_tesnet)? (
            <CrossmintPayButton
            className="payButton"
            clientId={nft.crossmint_clientId}
            mintConfig={{
              type: `${nft.crossmint_type}`,
              totalPrice: `${nft.crossmint_totalPrice}`,
              quantity: `${nft.crossmint_quantity}`,
            }}
            environment="staging"
          />
          ) : (
            <CrossmintPayButton
              className="payButton"
              clientId={nft.crossmint_clientId}
              mintConfig={{
                type: `${nft.crossmint_type}`,
                totalPrice: `${nft.crossmint_totalPrice}`,
                quantity: `${nft.crossmint_quantity}`,
              }}
            />            
          ) }
          </span>
        </div>
      </div>
    </>
  );
};
