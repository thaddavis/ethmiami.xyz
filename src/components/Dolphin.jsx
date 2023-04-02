import React from "react";

import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Sky } from "@react-three/drei";
import * as THREE from "three";

export const Dolphin = (props) => {
  const model = useLoader(GLTFLoader, "/dolphin_fix01.glb");

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
      {/* <Sky
      distance={45000}
      sunPosition={[5, 1, 8]}
      inclination={0}
      azimuth={0.25}
      {...props}
      /> */}

      <primitive
        object={model.scene}
        scale={props.scale}
        position={props.position}
      />

      {/* <ambientLight intensity={0.5} color={[0, 0, 255]} /> */}
      <color attach="background" args={["#009dc4"]} />
    </>
  );
};
