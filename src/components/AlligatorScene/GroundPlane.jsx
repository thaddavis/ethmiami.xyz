// highlight-start
// Geometry
export function GroundPlane() {
  console.log("GroundPlane");

  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <circleGeometry attach="geometry" args={[20, 200]} />
      <meshStandardMaterial attach="material" color="green" />
    </mesh>
  );
}
