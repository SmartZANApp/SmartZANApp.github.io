import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Section = ({ children, index, className = '' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Alternate between left and right alignment
  const isLeft = index % 2 === 0
  const alignment = isLeft ? 'left' : 'right'

  const variants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={`min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div
        className={`w-full max-w-6xl ${
          alignment === 'left'
            ? 'mx-auto lg:ml-8 lg:mr-auto'
            : 'mx-auto lg:ml-auto lg:mr-8'
        }`}
      >
        {children}
      </div>
    </motion.section>
  )
}

export default Section

