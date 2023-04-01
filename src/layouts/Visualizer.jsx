import React, { Suspense } from "react";
import { useLoader, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { Stats, OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";

export const Visualizer = () => {
  const gltf = useLoader(GLTFLoader, "/gator.glb");

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* <div> */}
      <Canvas
        dpr={window.devicePixelRatio}
        camera={{
          position: [0, 40, 80],
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
          position={new THREE.Vector3(0, -10, 0)}
          scale={new THREE.Vector3(0.4, 0.4, 0.4)}
        />
        ;
        <primitive
          object={new THREE.AxesHelper(10)}
          position={new THREE.Vector3(0, -10, 0)}
        />
        <primitive
          object={new THREE.GridHelper(10)}
          position={new THREE.Vector3(0, -10, 0)}
        />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};
