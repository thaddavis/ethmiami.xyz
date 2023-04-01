import { createGlobalState } from "react-hooks-global-state";
import GatorV1 from "../assets/AlligatorV1.png";
import Flamingo from "../assets/flamingo.png";

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
      // metadataURI: "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg",
      metadataURI: GatorV1,
      title: "Florida Gator",
      description: "Green",
      aspectRatio: "aspect-[2142/1710]",
      cost: 100,
    },
    {
      // metadataURI: "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg",
      metadataURI: Flamingo,
      title: "Okeechobee Flamingo",
      description: "Pink",
      aspectRatio: "aspect-[1240/1240]",
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
