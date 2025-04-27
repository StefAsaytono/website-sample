import React from 'react'
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { EffectComposer } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";

const FluidEffect = () => {
  return (
    <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background: "#000000",
        }}
      >
        <EffectComposer>
          <Fluid />
        </EffectComposer>
      </Canvas>
  )
}

export default FluidEffect