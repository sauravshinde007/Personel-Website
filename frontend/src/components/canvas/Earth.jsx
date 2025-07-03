import { Suspense,useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const ship = useMemo(()=>useGLTF('./planet/scene.gltf'),[]);
  return(
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <primitive 
        object={ship.scene}
        scale={1}
        position={[0,0,0]}
        rotation-y={0} 
    />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{antialias: false, preserveDrawingBuffer: true}}
      camera={{ position: [20, 1, 5], fov: 10 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas;