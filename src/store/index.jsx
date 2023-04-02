import { createGlobalState } from "react-hooks-global-state";

import GatorCropped from "../assets/AlligatorCROPPED.png";
import FlamingoCropped from "../assets/FlamingoCROPPED.png";
import DolphinCropped from "../assets/DolphinCROPPED.png";

import ETHMiami from "../assets/sponsors/ETHMiami.jpeg";
import CMD from "../assets/sponsors/cmd.png";
import Gitcoin from "../assets/sponsors/gitcoin.png";
import Web3Equity from "../assets/sponsors/web3equity.png";
import Algorand from "../assets/sponsors/Algorand.jpg";
import Quicknode from "../assets/sponsors/Quicknode.png";
import FIUBlockchain from "../assets/sponsors/FIUBlockchain.png";

import * as THREE from "three";

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
  modal: "scale-0",
  updateModal: "scale-0",
  showModal: "scale-0",
  alert: { show: false, msg: "", color: "" },
  loading: { show: false, msg: "" },
  connectedAccount: "",
  nft: null,
  nfts: [
    {
      id: "gator",
      metadataURI: GatorCropped,
      title: "Gator",
      description: "Green",
      model: "gator.glb",
      position: new THREE.Vector3(0, 0.1, 0),
      // scale: new THREE.Vector3(0.3, 0.3, 0.3), // gator_anim.glb
      // scale: new THREE.Vector3(10, 10, 10), // gator_rel.glb
      scale: new THREE.Vector3(10, 10, 10), // gator_withoutanim.glb
      cameraPosition: [0, 40, 80],
      cost: 0.03,
      crossmint_clientId: "db7f522b-3d9b-49ee-b55a-597fd53708ba",
      crossmint_type: "thirdweb-drop",
      crossmint_totalPrice: "0.03",
      crossmint_quantity: "1",
      crossmint_enviroment: "staging",
    },
    {
      id: "flamingo",
      metadataURI: FlamingoCropped,
      title: "Flamingo",
      description: "Pink",
      model: "flamingo.gltf",
      position: new THREE.Vector3(0, 0, 0),
      scale: new THREE.Vector3(0.3, 0.3, 0.3),
      cameraPosition: [0, -30, 120],
      cost: 0.03,
      crossmint_clientId: "64352cb2-a9e9-4bce-8a27-52d188e7e53d",
      crossmint_type: "thirdweb-drop",
      crossmint_totalPrice: "0.03",
      crossmint_quantity: "1",
      crossmint_enviroment: "staging",
    },
    {
      id: "dolphin",
      metadataURI: DolphinCropped,
      title: "Dolphin",
      description: "Grey",
      model: "dolphin.glb",
      position: new THREE.Vector3(0, -5, 0),
      scale: new THREE.Vector3(10, 10, 10),
      cameraPosition: [0, 10, 60],
      cost: 0.03,
      crossmint_clientId: "46fcbf6e-6365-41a6-983d-42f37f28910f",
      crossmint_type: "thirdweb-drop",
      crossmint_totalPrice: "0.03",
      crossmint_quantity: "1",
      crossmint_enviroment: "staging",
    },
    // {
    //   id: "panther",
    //   metadataURI: Panther,
    //   title: "Florida Panther",
    //   description: "Beige",
    //   aspectRatio: "aspect-[1168/1442]",
    //   model: "panther.glb",
    //   position: [],
    //   scale: [],
    //   cameraPosition: [],
    //   cost: 100,
    // },
  ],
  sponsors: [
    {
      name: "ETHMiami",
      image: ETHMiami,
    },
    {
      name: "cmdlabs.io",
      image: CMD,
    },
    {
      name: "Gitcoin",
      image: Gitcoin,
    },
    {
      name: "Web3 Equity",
      image: Web3Equity,
    },
    {
      name: "Algorand",
      image: Algorand,
    },
    {
      name: "Quicknode",
      image: Quicknode,
    },
    {
      name: "Blockchain at FIU",
      image: FIUBlockchain,
    },
  ],
  transactions: [
    {
      id: "0x1",
      title: "0x1",
      owner: "andrei.lens",
      cost: 100,
    },
    {
      id: "0x2",
      title: "0x2",
      owner: "dantrail.lens",
      cost: 100,
    },
    {
      id: "0x3",
      title: "0x3",
      owner: "silka.lens",
      cost: 100,
    },
  ],
  contract: null,
});

const setAlert = (msg, color = "green") => {
  setGlobalState("loading", false);
  setGlobalState("alert", { show: true, msg, color });
  setTimeout(() => {
    setGlobalState("alert", { show: false, msg: "", color });
  }, 6000);
};

const setLoadingMsg = (msg) => {
  const loading = getGlobalState("loading");
  setGlobalState("loading", { ...loading, msg });
};

const truncate = (text, startChars, endChars, maxLength) => {
  if (text.length > maxLength) {
    var start = text.substring(0, startChars);
    var end = text.substring(text.length - endChars, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
};

export {
  useGlobalState,
  setGlobalState,
  getGlobalState,
  setAlert,
  setLoadingMsg,
  truncate,
};
