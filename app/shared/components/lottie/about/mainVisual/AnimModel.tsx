import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function AnimModel({ glbPath, position, rotation, ...props }) {
  const group = useRef();
  
  // Load your .glb model
  const { scene, animations } = useGLTF(glbPath, true);
  
  // Use the animations from your model
  const { actions, mixer } = useAnimations(animations, group);
  
  useEffect(() => {
    if(animations.length > 0)
      actions[animations[0].name]?.play(); 
  }, [mixer]);

  useEffect(() => {
    scene.position.set(position[0], position[1], position[2]);
    scene.rotation.set(rotation[0], rotation[1], rotation[2]);
  }, [scene]);

  return (<>
  {
    scene && <primitive ref={group} object={scene} dispose={null} />
  }
  </>)
}

// Model.preload("path_to_your_model.glb"); // Preload your model

export default AnimModel;
