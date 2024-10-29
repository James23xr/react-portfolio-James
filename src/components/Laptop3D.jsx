import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const Laptop3D = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} scale={[2, 2, 2]}>
      {/* Screen */}
      <mesh
        // eslint-disable-next-line react/no-unknown-property
        position={[0, 0.5, 0]}
      >
        <boxGeometry
          // eslint-disable-next-line react/no-unknown-property
          args={[2, 1.2, 0.1]}
        />
        <meshStandardMaterial color="#555555" />
      </mesh>
      {/* Keyboard */}
      <mesh
        // eslint-disable-next-line react/no-unknown-property
        position={[0, -0.2, 0.4]}
      >
        <boxGeometry
          // eslint-disable-next-line react/no-unknown-property
          args={[2, 0.1, 1.6]}
        />
        <meshStandardMaterial color="#333333" />
      </mesh>
      {/* Text */}
      <Text
        position={[0, 0.5, 0.06]}
        rotation={[0, 0, 0]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        I am very happy you are viewing my website!
      </Text>
    </group>
  );
};

export default Laptop3D;
