import React from 'react'; 
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">

      <motion.div initial={{
        x: -500,
        opacity: 0,
        scale: 0.5

      }}

      animate={{
        x:0,
        opacity:1,
        scale: 1
      }}

      transition={{
        duration: 1.5
      }}
        className="flex flex-row items-center">
         <SocialIcon url="https://linkedin.com/in/jaketrent"
         bgColor='transparent'
         fgColor='gray' />
         <SocialIcon url="https://linkedin.com/in/jaketrent"
         bgColor='transparent'
         fgColor='gray' />
      </motion.div>
      <div>
        <SocialIcon network='email'
        bgColor='transparent'
        fgColor='gray' />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-300">Get in Touch</p>
      </div>
    </header>
  )
}