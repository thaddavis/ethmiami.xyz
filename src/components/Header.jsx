import { useNavigate } from "react-router-dom";
import { connectWallet } from "../Blockchain.services";
import { useGlobalState, truncate } from "../store";

export const Header = () => {
  // const [connectedAccount] = useGlobalState("connectedAccount");

  const navigate = useNavigate();

  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div
        className="md:flex-[0.5] flex-initial justify-center items-center"
        onClick={() => {
          navigate("/");
        }}
      >
        <span className="text-[#e32970] w-32 cursor-pointer">ETHMiami.xyz</span>
      </div>

      <ul
        className="md:flex-[0.5] text-[#e32970] md:flex
        hidden list-none flex-row justify-end 
        items-center flex-initial"
      >
        {/* <li className="mx-4 cursor-pointer">Market</li>
        <li className="mx-4 cursor-pointer">Artists</li> */}
        <li
          className="mx-4 cursor-pointer"
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </li>
        {/* <li className="mx-4 cursor-pointer">Community</li> */}
      </ul>

      {/* {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )} */}
    </nav>
  );
};
