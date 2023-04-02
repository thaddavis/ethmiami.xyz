import React from "react";

import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as THREE from "three";

export const Alligator = (props) => {
  //   const model = useLoader(GLTFLoader, "/gator.glb");
  // const model = useLoader(GLTFLoader, "/gator_anim.glb");
  // const model = useLoader(GLTFLoader, "/gator_anim_B.glb");
  const model = useLoader(GLTFLoader, "/gator_anim_02.gltf", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

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
    <primitive
      object={model.scene}
      scale={props.scale}
      position={props.position}
    />
  );
};
