import React from "react";

import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as THREE from "three";
import { GroundPlane } from "./GroundPlane";
import { Backdrop } from "./Backdrop";
import { KeyLight } from "./Lights";

import { FillLight } from "./FillLight";

export const Alligator = (props) => {
  const model = useLoader(GLTFLoader, "/gator_withoutanim.glb"); // *** this requires scale adjust must to  0.3,0.3,0.3
  // const model = useLoader(GLTFLoader, "/gator_rel.glb"); // *** this requires scale adjust must to  10,10,10

  // const model = useLoader(GLTFLoader, "/gator_animfix.glb"); // *** this requires scale adjust must to  0.3,0.3,0.3

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
      <GroundPlane />
      <primitive
        object={model.scene}
        scale={props.scale}
        position={props.position}
      />

      {/* <Backdrop /> */}
      <KeyLight brightness={5.6} color="#ffbdf4" />
      {/* <FillLight brightness={2.6} color="#bdefff" /> */}
    </>
  );
};
