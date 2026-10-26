import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import modelUrl from "../assets/models/radio.glb?url";

export default function Radio(props: ThreeElements["group"]) {
  const { scene } = useGLTF(modelUrl);

  return (
    <group {...props}>
      <primitive object={scene} />
    </group>
  );
}
