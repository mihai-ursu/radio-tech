import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Radio from "./radio";

export default function HeroBanner() {
  return (
    <Canvas camera={{ position: [0, 0.5, 12], fov: 30 }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Radio />
      {/* <OrbitControls makeDefault /> */}
    </Canvas>
  );
}
