// highlight-start
// Geometry
export function GroundPlane() {
  console.log("GroundPlane");

  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
