import React, { Suspense } from "react";
import { useLoader, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useParams } from "react-router-dom";

import { getGlobalState } from "../store";

import { Stats, OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";

export const Visualizer = () => {
  const { model } = useParams();
  const gltf = useLoader(GLTFLoader, `/${model}.glb`);

  const nfts = getGlobalState("nfts") || [];

  const modelInfo = nfts.find((obj) => {
    return obj.id === model;
  });

  console.log("model", model, modelInfo);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* <div> */}
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
        <primitive
          object={gltf.scene}
          position={modelInfo.position}
          scale={modelInfo.scale}
        />
        ;
        <primitive
          object={new THREE.AxesHelper(10)}
          position={modelInfo.position}
        />
        <primitive
          object={new THREE.GridHelper(10)}
          position={modelInfo.position}
        />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};
