import React, { Suspense } from "react";
import { useLoader, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Stats, OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";

export const Visualizer = () => {
  const gltf = useLoader(GLTFLoader, "/gator_wip.glb");

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* <div> */}
      <Canvas
        // dpr={window.devicePixelRatio}
        camera={{
          position: [0, 2, 10],
          fov: 45,
        }}
      >
        <OrbitControls
          enableZoom={false}
          rotateSpeed={2}
          autoRotate={true}
          autoRotateSpeed={5}
        />
        <ambientLight />
        <primitive object={gltf.scene} />;
        <primitive object={new THREE.AxesHelper(10)} />
        <primitive object={new THREE.GridHelper(10)} />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};
