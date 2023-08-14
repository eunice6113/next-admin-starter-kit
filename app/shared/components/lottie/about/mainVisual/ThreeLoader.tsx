import { useProgress } from '@react-three/drei'

export default function ThreeLoader() {
  const { progress } = useProgress()
  return (
    <div>{progress} % loaded</div>
  )
}