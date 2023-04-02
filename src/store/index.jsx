import { createGlobalState } from "react-hooks-global-state";

import GatorCropped from "../assets/AlligatorCROPPED.png";
import FlamingoCropped from "../assets/FlamingoCROPPED.png";
import DolphinCropped from "../assets/DolphinCROPPED.png";
import Dolphin from "../assets/dolphin.png";
import Panther from "../assets/panther.png";

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
      position: new THREE.Vector3(0, -10, 0),
      scale: new THREE.Vector3(10, 10, 10),
      cameraPosition: [0, 40, 80],
      cost: 100,
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
      cost: 100,
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
      cost: 100,
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
