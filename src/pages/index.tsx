import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";
import * as THREE from "three";
import { Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      {/* <Main></Main> */}
      {/* <DarkModeSwitch /> */}
      <Canvas
        shadows={false}
        dpr={[1, 2]}
        camera={{ near: 0.1, far: 200, position: [-4, 3, 6] }}
        // gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default Index;
