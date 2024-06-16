import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import Scene from './scene'
import React from 'react'
import ImportContainer from './importcontainer';
import { importModel } from './import';


export default function App() {
  return (
    <>
      <div className='scene'>

        <div className='viewport'>
        <Canvas camera={{ position: [2,2,2] }}>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <Scene />
          <OrbitControls />
        </Canvas>
        </div>
      </div> 
    </>
  )
}