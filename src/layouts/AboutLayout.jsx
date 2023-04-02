import React from "react";

import { Alert } from "../components/Alert";
import { Artworks } from "../components/Artworks";
import { CreateNFT } from "../components/CreateNFT";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

import { Sponsors } from "../components/Sponsors";

export const AboutLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header />
      </div>
      {/* <div className="text-center">Strategic Sponsors</div> */}
      <Sponsors />
    </div>
  );
};
