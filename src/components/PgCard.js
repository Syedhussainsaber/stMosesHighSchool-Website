import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const PgCard = ({imgSrc}) => {
  return (
    <>
     <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
    <div className="images">
<Image src={imgSrc} width={"300"} height={"300"} alt='Photo Gallery' className='pg-img'/>
    </div>
    </motion.div>
    </>
  )
}

export default PgCard