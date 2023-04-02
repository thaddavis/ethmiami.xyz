import React, { Suspense } from "react";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Flamingo } from "../components/Flamingo";
import { Alligator } from "../components/Alligator";
import { Dolphin } from "../components/Dolphin";

import { useParams } from "react-router-dom";

import { getGlobalState } from "../store";

import { Stats, OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";

export const Visualizer = () => {
  const { modelParam } = useParams();
  // const gltf = useLoader(GLTFLoader, `/${pathParam}.glb`);

  const nfts = getGlobalState("nfts") || [];

  const modelInfo = nfts.find((obj) => {
    return obj.id === modelParam;
  });

  console.log("model", modelParam, modelInfo);

  let modelComponent;

  switch (modelParam) {
    case "flamingo":
      modelComponent = (
        <Flamingo position={modelInfo.position} scale={modelInfo.scale} />
      );
      break;
    case "gator":
      modelComponent = (
        <Alligator position={modelInfo.position} scale={modelInfo.scale} />
      );
      break;
    case "dolphin":
      console.log("case in point");
      modelComponent = (
        <Dolphin position={modelInfo.position} scale={modelInfo.scale} />
      );
      // modelComponent = (
      //   <Flamingo position={modelInfo.position} scale={modelInfo.scale} />
      // );
      break;
    case "":
      break;
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        dpr={window.devicePixelRatio}
        camera={{
          position: modelInfo.cameraPosition,
          fov: 45,
        }}
      >
        <OrbitControls
          enableZoom={true}
          rotateSpeed={2}
          autoRotate={true}
          autoRotateSpeed={5}
        />
        <ambientLight />

        {modelComponent}
        {/* <Flamingo /> */}

        {/* <primitive
          object={gltf.scene}
          position={modelInfo.position}
          scale={modelInfo.scale}
        /> */}
        {/* <primitive
          object={new THREE.AxesHelper(10)}
          position={modelInfo.position}
        />
        <primitive
          object={new THREE.GridHelper(10)}
          position={modelInfo.position}
        /> */}
      </Canvas>
    </div>
  );
};
