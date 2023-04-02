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
  //   const model = useLoader(GLTFLoader, "/gator.glb");
  const model = useLoader(GLTFLoader, "/gator_anim.glb");
  // const model = useLoader(GLTFLoader, "/gator_anim_B.glb");
  // const model = useLoader(GLTFLoader, "/gator_anim_02.gltf", (loader) => {
  //   const dracoLoader = new DRACOLoader();
  //   dracoLoader.setDecoderPath("/");
  //   loader.setDRACOLoader(dracoLoader);
  // });
  // const model = useLoader(GLTFLoader, "/gator_03.glb");
  // const model = useLoader(GLTFLoader, "/gator_animfix.glb");

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
