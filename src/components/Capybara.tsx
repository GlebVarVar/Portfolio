/*
    Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';

const Capybara = ({ ...props }) => {
  const [hovered, setHovered] = useState(false);

  

  const targetRef = useRef();


  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(targetRef.current.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        // x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  const { scene } = useGLTF(
    'models/capybara.gltf',
  );

  return (
    // <Float floatIntensity={2}>
    //   <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
    //     <mesh
    //       ref={cubeRef}
    //       castShadow
    //       receiveShadow
    //       geometry={nodes.Cube.geometry}
    //       material={nodes.Cube.material}
    //       onPointerEnter={() => setHovered(true)}>
    //       <meshMatcapMaterial  toneMapped={false} />
    //       {/* <meshMatcapMaterial matcap={texture} toneMapped={false} /> */}
    //     </mesh>
    //   </group>
    // </Float>
    //       
<mesh {...props} onPointerEnter={() => setHovered(true)} ref={targetRef} rotation={[0, Math.PI * 3 + Math.PI / 2, 0]} scale={0.75}>
<primitive object={scene} />
</mesh>
  );
};

useGLTF.preload('models/capybara.glb');

export default Capybara;
