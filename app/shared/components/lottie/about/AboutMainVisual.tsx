import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas, Camera } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import AnimModel from "./mainVisual/AnimModel";
import Model from "./mainVisual/Model";
import ThreeLoader from "./mainVisual/ThreeLoader";

export default function AboutMainVisual() {
  const glbPath = '/assets/images/about/mainVisual/'
  const cameraRef = useRef<Camera>(null);

  return (
    <Canvas> 
      <ambientLight />
      <directionalLight />
      {/* <PerspectiveCamera ref={cameraRef} makeDefault={true} position={[0, 0, 50]} /> */}
      {/* <OrbitControls camera={cameraRef.current} makeDefault={true} enableZoom={true} /> */}
      <Suspense fallback={ ThreeLoader }>
        <AnimModel glbPath={`${glbPath}bunny-pick-fruit.glb`} position={[7, -5, -3]} rotation={[0, -0.7, 0]} />

{/* gsap 용 포지션 */}
        <Model glbPath={`${glbPath}balance.glb`} name='balance' posFrom={[-3.5, -4, -1.5]} posTo={[-3.5, -4, -1.5]} scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[0, 0, 0]}    delayTime={0}   />
        <Model glbPath={`${glbPath}monitor.glb`} name='monitor' posFrom={[-3.5, -1.0, 0]}  posTo={[-3.5, -1.0, 0]}  scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[0, 0.05, 0]} delayTime={0.5} />
        <Model glbPath={`${glbPath}report.glb`}  name='report'  posFrom={[-2, -0.8, 0]}    posTo={[-2, -0.8, 0]}    scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[0, 0.1, 0]}  delayTime={0.7} />
        <Model glbPath={`${glbPath}search.glb`}  name='search'  posFrom={[0,0,0]}          posTo={[0,0,0]}          scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[0, 0.1, 0]}  delayTime={0.3} />
        <Model glbPath={`${glbPath}lock.glb`}    name='lock'    posFrom={[-3,-0.5,-1.5]}   posTo={[-3,-0.5,-1.5]}   scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[0, 0.1, 0]}  delayTime={0.5} /> {/* 기준이 XZY임 */}
        <Model glbPath={`${glbPath}cloud.glb`}   name='cloud'   posFrom={[-2,-1,-2]}       posTo={[-2,-1,-2]}       scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[0, 0.1, 0]}  delayTime={0.3} />
        <Model glbPath={`${glbPath}calc.glb`}    name='calc'    posFrom={[4,-2,0]}         posTo={[4,-2,0]}         scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[1.3, 3, 0]}  delayTime={0.3} />
        <Model glbPath={`${glbPath}pocket.glb`}  name='pocket'  posFrom={[2,-4,-1]}        posTo={[2,-4,-1]}        scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[0, 0, 0]}    delayTime={3.0} />
        <Model glbPath={`${glbPath}pocket2.glb`} name='pocket2' posFrom={[2,-4,-1]}        posTo={[2,-4,-3]}        scaleFrom={[0,0,0]} scaleTo={[1.2,1.2,1.2]} rotation={[0, 0, 0]}    delayTime={3.3} />
        <Model glbPath={`${glbPath}pocket3.glb`} name='pocket3' posFrom={[2,-4,-1]}        posTo={[4,-4,-4.5]}      scaleFrom={[0,0,0]} scaleTo={[1.7,1.7,1.7]} rotation={[0, 0, 0]}    delayTime={3.6} />
        <Model glbPath={`${glbPath}coin.glb`}    name='coin0'   posFrom={[0,-4,-2]}        posTo={[0,-4,-2]}        scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[0, 0, 0]}    delayTime={1} />
        <Model glbPath={`${glbPath}coin2.glb`}   name='coin1'   posFrom={[0,-4,-2]}        posTo={[0,-3.7,-2]}      scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[0, 0, 0]}    delayTime={1.3} />
        <Model glbPath={`${glbPath}coin3.glb`}   name='coin2'   posFrom={[0,-4,-2]}        posTo={[0,-3.4,-2]}      scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[0, 0, 0]}    delayTime={1.5} />
        <Model glbPath={`${glbPath}coin4.glb`}   name='coin3'   posFrom={[0,-4,-2]}        posTo={[0,-3.1,-2]}      scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[0, 0, 0]}    delayTime={1.7} />
        <Model glbPath={`${glbPath}coin5.glb`}   name='coin4'   posFrom={[0,-4,-2]}        posTo={[0,-2.8,-2]}      scaleFrom={[0,0,0]} scaleTo={[1,1,1]}       rotation={[0, 0, 0]}    delayTime={1.9} />
        <Model glbPath={`${glbPath}coin6.glb`}   name='coin5'   posFrom={[0,-4,-2]}        posTo={[0.2,-3.1,-3.5]}  scaleFrom={[0,0,0]} scaleTo={[1.2,1.2,1.2]} rotation={[0, 0, 0]}    delayTime={2.1} />
        <Model glbPath={`${glbPath}coin7.glb`}   name='coin6'   posFrom={[0,-4,-2]}        posTo={[0.2,-2.8,-3.5]}  scaleFrom={[0,0,0]} scaleTo={[1.2,1.2,1.2]} rotation={[0, 0, 0]}    delayTime={2.3} />
        <Model glbPath={`${glbPath}coin8.glb`}   name='coin7'   posFrom={[0,-4,-2]}        posTo={[0.2,-2.5,-3.5]}  scaleFrom={[0,0,0]} scaleTo={[1.2,1.2,1.2]} rotation={[0, 0, 0]}    delayTime={2.5} />
        <Model glbPath={`${glbPath}coin9.glb`}   name='coin8'   posFrom={[0,-4,-2]}        posTo={[0.2,-2.2,-3.5]}  scaleFrom={[0,0,0]} scaleTo={[1.2,1.2,1.2]} rotation={[0, 0, 0]}    delayTime={2.7} />

        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}