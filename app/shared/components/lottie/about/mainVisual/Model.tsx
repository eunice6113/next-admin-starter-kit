import { useRef, useEffect } from 'react';
import { useLoader ,useFrame } from '@react-three/fiber'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { gsap } from 'gsap';
import NumberMotion from './NumberMotion';

interface ModelProps {
  name: string;
  glbPath: string;
  position?: number[];
  rotation?: number[];
  delayTime?: number;
  posFrom?: number[];
  posTo?: number[];
  scaleFrom?: number[];
  scaleTo?: number[];
}

const Model: React.FC<ModelProps> = ({ name, glbPath, position, rotation, delayTime, posFrom, posTo, scaleFrom, scaleTo, ...props }) => {

  const gltf = useLoader(GLTFLoader, glbPath)

  const mesh = useRef<THREE.Mesh>(null!);

  // you can only use this in the child component of 
  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime()
    // console.log(a) 
  // })

  useEffect(() => {

    gltf?.scene?.traverse((object) => {
      if (object.isMesh) {
        object.rotation.set(rotation[0], rotation[1], rotation[2])
      }
    })

    if(!mesh.current) return;
    
    gsap.fromTo(mesh.current.position, { x: posFrom[0], y: posFrom[1], z: posFrom[2]   }, { x: posTo[0], y: posTo[1], z: posTo[2], duration: 1, ease: 'elastic.out(1, 0.3)', delay: delayTime });
    gsap.fromTo(mesh.current.scale, { x: scaleFrom[0], y: scaleFrom[1], z: scaleFrom[2] }, { x: scaleTo[0], y:scaleTo[1], z:scaleTo[2], duration: 1, ease: 'elastic.out(1, 0.3)', delay: delayTime });
      
  }, [gltf]);


  return (<>
    <primitive object={gltf.scene} ref={mesh} />
    { name === 'balance' && <NumberMotion position={posTo} /> }
  </>)

}

export default Model;
