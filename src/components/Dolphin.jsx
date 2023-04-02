import React from "react";

import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as THREE from "three";

export const Dolphin = (props) => {
  //   const model = useLoader(GLTFLoader, "/dolphinA.glb");
  // const model = useLoader(GLTFLoader, "/dolphinB.glb");
  //   const model = useLoader(GLTFLoader, "/dolphinC.glb");
  // const model = useLoader(GLTFLoader, "/dolph_01.glb");
  const model = useLoader(GLTFLoader, "/dolphin_fix01.glb");
  // const model = useLoader(GLTFLoader, "/dolph01.glb", (loader) => {
  //   const dracoLoader = new DRACOLoader();
  //   dracoLoader.setDecoderPath("/draco-gltf/");
  //   loader.setDRACOLoader(dracoLoader);
  // });

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
