import { useState, useEffect, useRef } from 'react';
import { Text } from '@react-three/drei';
import { gsap } from 'gsap';

const NumberMotion = ({ position }) => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    // const tween = gsap.to({}, {
    //   duration: 2,
    //   delay: 1,
    //   onComplete: () => tween.kill(),
    //   onUpdate: () => {
    //     setNumber(tween.progress() * 135)
    //     setNumber2(tween.progress() * 957)
    //     setNumber3(tween.progress() * 156)
    //   }
    // });
    
    const tween = gsap.to({}, {
        duration: 1,
        delay: 1,
        onComplete: () => tween.kill(),
        onUpdate: () => {
          setNumber(tween.progress() * 135)
        }
    });
    const tween2 = gsap.to({}, {
        duration: 1,
        delay: 2,
        onComplete: () => tween2.kill(),
        onUpdate: () => {
          setNumber2(tween2.progress() * 957)
        }
    });
    const tween3 = gsap.to({}, {
        duration: 1,
        delay: 3,
        onComplete: () => tween.kill(),
        onUpdate: () => {
          setNumber3(tween3.progress() * 156)
        }
    });

    ref.current.position.set(position[0] + 0.3, position[1] + 1.1, position[2]+1.5);
  }, []);

  return (
    <Text ref={ref} textAlign='right' color='#fff' fontSize={0.45}>
        {number3 > 1 && Math.round(number3)}{number3 > 1 && ','}{number2 > 1 && Math.round(number2)}{number2 > 1 && ','}{number > 1 && Math.round(number)} {number > 1 && 'FP'}
    </Text>
  );
};


export default NumberMotion;
