import { Player } from '@lottiefiles/react-lottie-player';

export default function About01() {

    return (
        <>
            <Player
                autoplay
                loop
                speed={1}
                src='/assets/images/about/about-1-fp.json'
                style={{height:300}}
                className='aboutLottie'
            >
            </Player>
        </>
    )
}