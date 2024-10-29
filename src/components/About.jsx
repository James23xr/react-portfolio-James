import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'
import {motion} from "framer-motion"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Laptop3D from './Laptop3D'

const About = () => {
  return (
    <div className='border-b bordernu900 pb-4'>
      <h2 className="my-20 text-center text-4xl">
        About
        <span className='text-neutral-500'> Me</span> 
      </h2>
      <div className='flex flex-wrap'>
        <motion.div
        whileInView = {{opacity:1,x:0}}
        initial = {{opacity:1,x:-100}}
        transition={{duration:0.5}}
        className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className='rounded-2xl' src= {aboutImg} alt="about" />
          </div>   
        </motion.div>
        <motion.div
        whileInView = {{opacity:1,x:0}}
        initial = {{opacity:0,x:100}}
        transition={{duration:0.5}}
         className="w-full lg:w-1/2">
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'> {ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-[500px] my-8">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <ambientLight intensity={0.5} />
          {/* eslint-disable-next-line react/no-unknown-property */}
          <pointLight position={[10, 10, 10]} />
          <Laptop3D />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default About
