import { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Anime = ({ isMobile }) => {
  const gaming_setup = useMemo(() => useGLTF('./gaming_setup/scene.gltf'), []);

  return (
    <mesh>
      {/* Reduced light intensity for optimization */}
      <hemisphereLight intensity={0.6} groundColor="black" />
      <pointLight intensity={0.7} />
      <spotLight
        position={[-20, 10, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.8}  // Lowered the intensity to reduce calculations
      />
      <primitive
        object={gaming_setup.scene}
        scale={isMobile ? 0.3 : 0.5}
        position={isMobile ? [1, -3, -0.2] : [2, -2, 0]}
        rotation={[0, -0.2, -0.15]}
      />
    </mesh>
  );
};

const PCCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div
    style={{
      width: isMobile ? '600px' : '900px', // Different width for mobile and desktop
      height: isMobile ? '600px' : '900px', // Different height for mobile and desktop
      margin: 'auto',
      maxWidth: '100%', // Ensures canvas doesn't overflow on smaller screens
    }}
  >
    <Canvas
      frameloop="demand"
      dpr={isMobile ? [1, 1.5] : [1, 2]} // Adjust DPR for mobile devices
      camera={{ position: [20, 2, 5], fov: 20 }}
      gl={{ antialias: false, preserveDrawingBuffer: true }}
      performance={{ min: 0.5, max: 1 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Anime isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  </div>
  );
};

export default PCCanvas;
