import { useEffect } from "react";
import { getAllNFTs, isWallectConnected } from "./Blockchain.services";
import { MainLayout } from "./layouts/MainLayout";
import { AboutLayout } from "./layouts/AboutLayout";
import { Visualizer } from "./layouts/Visualizer";
import { Routes, Route, Outlet } from "react-router-dom";

export const App = () => {
  useEffect(async () => {
    // await isWallectConnected()
    // await getAllNFTs()
  }, []);

  return (
    <>
      <Routes>
        <Route path="/3d/:modelParam" element={<Visualizer />} />
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<AboutLayout />} />
        <Route path="*" element={<>Not Found</>} />
        {/* <Route path="" element={<Home />} /> */}
        {/* <Route path="/dashboard/" element={<TopHeaderWithDynamicPage />}> */}
        {/* <Route path="" element={<Container />} /> */}
        {/* <Route path="" element={<Main />} /> */}
        {/* <Route path="contract/:address" element={<Contract />} /> */}
        {/* </Route> */}
        {/* <Route path="*" element={<>Not Found</>} /> */}
      </Routes>
    </>
  );
};
