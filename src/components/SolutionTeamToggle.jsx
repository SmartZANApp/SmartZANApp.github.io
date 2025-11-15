import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import TeamMember from './TeamMember'

const SolutionTeamToggle = ({ language }) => {
  const [activeTab, setActiveTab] = useState('solution')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
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
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl mx-auto lg:ml-8 lg:mr-auto">
        {/* Text above toggle */}
        <div className="text-left mb-8">
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-zaneo-black leading-relaxed max-w-5xl">
            {language === 'fr' 
              ? "Zaneo, la solution qui fait décoller l’adoption du digital, en partant des kinés."
              : "Zaneo AI, kick-starting a massive boost in digital adoption, starting with physiotherapists."
            }
          </p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-start mb-12">
          <div className="inline-flex rounded-full bg-zaneo-green-light p-1 shadow-soft">
            <button
              onClick={() => setActiveTab('solution')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'solution'
                  ? 'bg-zaneo-green text-white shadow-soft'
                  : 'text-zaneo-green-dark hover:text-zaneo-green'
              }`}
            >
              {language === 'fr' ? 'Solution' : 'Solution'}
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'team'
                  ? 'bg-zaneo-green text-white shadow-soft'
                  : 'text-zaneo-green-dark hover:text-zaneo-green'
              }`}
            >
              {language === 'fr' ? 'Équipe' : 'Team'}
            </button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'solution' ? (
            <motion.div
              key="solution"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:ml-8 lg:mr-auto"
            >
              <div className="rounded-3xl overflow-hidden shadow-soft-lg">
                <video
                  src="/zaneo_ai.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="team"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full mx-auto lg:ml-auto lg:mr-8 text-center"
            >
              <div className="mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zaneo-black mb-4">
                  {language === 'fr' ? 'Notre Équipe' : 'Our Team'}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 justify-items-center">
                <TeamMember
                  name="Rémi THOUVENIN"
                  role="CEO & Sales"
                  description="10+ yrs DATA consulting"
                  image="/team/remi.png"
                  linkedin="#"
                />
                <TeamMember
                  name="Dr. Sabrina HALAIMIA"
                  role="Head Medical BU"
                  description="MD, leading 70 physio"
                  image="/team/sabrina.png"
                  linkedin="#"
                />
                <TeamMember
                  name="Kevin RIOU"
                  role="CSO"
                  description="PhD in AI"
                  image="/team/kevin.png"
                  linkedin="#"
                  website="#"
                />
                <TeamMember
                  name="Adrien GAILLARD"
                  role="CTO"
                  description="Full Stack DEV & DATA ENGINEER"
                  image="/team/adrien.png"
                  linkedin="#"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

export default SolutionTeamToggle

