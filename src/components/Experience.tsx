import { useThree, useFrame, extend } from "@react-three/fiber";
import { useRef } from "react";
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
  useHelper,
  BakeShadows,
  softShadows,
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
  Sky,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";
import * as THREE from "three";
// import CustomObject from "./CustomObject";

// extend({ OrbitControls });

// softShadows({
//   frustum: 3.75,
//   size: 0.005,
//   near: 9.5,
//   samples: 17,
//   rings: 11,
// });

export const Experience = () => {
  //   const { camera, gl } = useThree();
  const cubeRef = useRef();
  const sphereRef = useRef();
  const directionalLight = useRef();

  //   useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#1d8f75",
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  const { sunPosition } = useControls("sky", {
    sunPosition: { value: [1, 2, 3] },
  });
  const { envMapIntensity } = useControls("environment map", {
    envMapIntensity: { value: 3.5, min: 0, max: 12 },
  });
  //   const { position, color } = useControls("sphere", {
  //     position: {
  //       value: { x: -2, y: 0 },
  //       joystick: "invertY",
  //       step: 0.01,
  //     },
  //     color: "#ff0000",
  //   });

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
    // const time = state.clock.elapsedTime;
    // cubeRef.current.position.x = 2 + Math.sin(time);
    cubeRef.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      {/* <BakeShadows /> */}

      <Environment
        // background
        // files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}

        preset="sunset"
        ground={{
          height: 7,
          radius: 28,
          scale: 100,
        }}
        // files={[
        //   "./environmentMaps/2/px.jpg",
        //   "./environmentMaps/2/nx.jpg",
        //   "./environmentMaps/2/py.jpg",
        //   "./environmentMaps/2/ny.jpg",
        //   "./environmentMaps/2/pz.jpg",
        //   "./environmentMaps/2/nz.jpg",
        // ]}
      >
        {/* <color args={["black"]} attach="background" />
        <Lightformer position-z={-5} scale={10} color={"red"} intensity={10} /> */}
        {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={"red"} />
        </mesh> */}
      </Environment>

      <color args={["ivory"]} attach={"background"} />

      <Perf position="top-left" />
      <OrbitControls makeDefault />
      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color={"#316d39"}
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      <ContactShadows
        position={[0, 0, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
      />

      {/* <directionalLight
        ref={directionalLight}
        position={sunPosition}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      /> */}
      {/* <ambientLight intensity={0.5} /> */}

      {/* <Sky sunPosition={sunPosition} /> */}

      {/* <group ref={groupeRef}> */}
      {/* <PivotControls anchor={[0, 0, 0]} depthTest={false}> */}
      <mesh castShadow position-x={-2} ref={sphereRef} position-y={1}>
        <sphereGeometry />
        <meshStandardMaterial
          color={"orange"}
          envMapIntensity={envMapIntensity}
        />
      </mesh>
      {/* </PivotControls> */}
      <mesh
        ref={cubeRef}
        castShadow
        scale={1.5}
        position-x={2}
        position-y={1}
        // rotation-y={Math.PI * 0.25}
      >
        <boxGeometry scale={1.5} />
        <meshStandardMaterial
          color="mediumpurple"
          envMapIntensity={envMapIntensity}
        />
      </mesh>
      {/* <TransformControls object={cubeRef} /> */}
      {/* </group> */}
      {/* <mesh
        // receiveShadow
        position-y={0}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry scale={1.5} />
        <meshStandardMaterial
          color="greenyellow"
          envMapIntensity={envMapIntensity}
        />
      </mesh> */}
      {/* <MeshReflectorMaterial
          blur={[1000, 1000]}
          mixBlur={1}
          resolution={512}
          mirror={0.5}
        /> */}
      {/* <Float>
        <Text
          fontSize={1}
          position-y={2}
          color={"salmon"}
          font="./Bangers-Regular.ttf"
        >
          I LOVE R3F
        </Text>
      </Float> */}
      {/* <CustomObject /> */}
    </>
  );
};
