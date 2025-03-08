import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import Canvasloader from "../Loader";

const Robot = () => {
  // use gltf file in 3d pic
  const robot = useGLTF("./robot/scene.gltf");
  return (
    <primitive object={robot.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const RobotCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45, // Increase FOV for a wider view (default is usually 45)
        near: 0.1,
        far: 300,
        position: [0, 3, 15], // Move the camera back to zoom out
      }}
    >
      <Suspense fallback={<Canvasloader />}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robot />
      </Suspense>
    </Canvas>
  );
};

export default RobotCanvas;
