import React from "react";

import { useLoader, useFrame } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

// import { GroundPlane } from "./GroundPlane";

export const Flamingo = (props) => {
  console.log("Flamingo");

  const model = useLoader(GLTFLoader, "/flamingo.glb");

  // Here's the animation part
  // *************************
  let mixer;
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });
  // *************************

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return (
    <>
      {/* <hemisphereLight args={["#0ff", "#333", 1]} /> */}
      <Sky
      // distance={45000}
      // sunPosition={[5, 1, 8]}
      // inclination={0}
      // azimuth={0.25}
      // {...props}
      />
      <primitive
        object={model.scene}
        scale={props.scale}
        position={props.position}
      />
      {/* <GroundPlane /> */}
    </>
  );
};
