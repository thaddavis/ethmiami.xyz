import { createGlobalState } from "react-hooks-global-state";
import GatorV1 from "../assets/AlligatorV1.png";
import Flamingo from "../assets/flamingo.png";
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
      metadataURI: GatorV1,
      title: "Florida Gator",
      description: "Green",
      aspectRatio: "aspect-[2142/1710]",
      model: "gator.glb",
      position: new THREE.Vector3(0, -10, 0),
      scale: new THREE.Vector3(0.4, 0.4, 0.4),
      cameraPosition: [0, 40, 80],
      cost: 100,
    },
    {
      id: "flamingo",
      metadataURI: Flamingo,
      title: "Okeechobee Flamingo",
      description: "Pink",
      aspectRatio: "aspect-[1240/1240]",
      model: "flamingo.glb",
      position: new THREE.Vector3(0, 0, 0),
      scale: new THREE.Vector3(0.4, 0.4, 0.4),
      cameraPosition: [0, 40, 80],
      cost: 100,
    },
    {
      id: "dolphin",
      metadataURI: Dolphin,
      title: "Miami Dolphin",
      description: "Grey",
      aspectRatio: "aspect-[2228/1340]",
      model: "dolphin.glb",
      position: [],
      scale: [],
      cameraPosition: [],
      cost: 100,
    },
    {
      id: "panther",
      metadataURI: Panther,
      title: "Florida Panther",
      description: "Beige",
      aspectRatio: "aspect-[1168/1442]",
      model: "panther.glb",
      position: [],
      scale: [],
      cameraPosition: [],
      cost: 100,
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
