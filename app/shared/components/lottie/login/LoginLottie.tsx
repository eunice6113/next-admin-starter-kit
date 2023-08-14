import { Player } from '@lottiefiles/react-lottie-player';
import React, { Suspense, useRef, useState } from "react";
import ExcelFileMotion from '../about/ExcelFileMotion';
import FPCard from '../about/FPCard';
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas, Camera } from "@react-three/fiber";
import AnimModel from '../about/mainVisual/AnimModel';
import ThreeLoader from '../about/mainVisual/ThreeLoader';

export default function LoginLottie() {
    
    const [play, setPlay] = useState(true);
    
    const glbPath = '/assets/images/about/mainVisual/'
    let animFrame:number = 0;

    return (
        <div className='loginLottieContainer'>
            <div className='fpCardsContainer login'>
              <ExcelFileMotion motionStart={ true } />
              <div className='fpcard-arrow slideUp' >
                <img src='/assets/images/about/fp-cards/fpcard-arrow.png' alt='' />
              </div>
              <FPCard motionStart={ true } />
            </div>

            <div className='dancingBunny'>
                <Canvas> 
                    <ambientLight />
                    <directionalLight />
                    <Suspense fallback={ ThreeLoader }>
                        <AnimModel glbPath={`${glbPath}excited-bunny.glb`} position={[7, -5, -3]} rotation={[0, -0.7, 0]} />
                        <Environment preset="sunset" />
                    </Suspense>
                </Canvas>
            </div>

        {/* <div className='login-bg'>
            {
                play &&
                <Player
                    keepLastFrame={true}
                    autoplay
                    speed={1}
                    src='/assets/images/login/bg-lottie.json'
                    style={{width: '100%'}}
                    onEvent={event => {

                        animFrame++;

                        if(animFrame === 60) {
                            setPlay(false);
                            animFrame = 0;
                        }
                    }}
                >
                </Player>
            }
        </div>
        <div className='login-motion bounce'>
            <Player
                autoplay
                loop
                speed={1}
                src='/assets/images/login/fpmate-login-lottie.json'
                style={{width: 800}}
            >
            </Player>
        </div> */}
        </div>
    )
}