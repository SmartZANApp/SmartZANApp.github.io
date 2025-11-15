import { motion } from 'framer-motion'

const TrustBanner = ({ language }) => {
  // Liste des logos - à remplacer par les vrais logos
  const logos = [
    { name: 'Partner 1', image: '/partners/per_med.png' },
    { name: 'Partner 2', image: '/partners/gonesse.png' },
    { name: 'Partner 3', image: '/partners/logo3.png' },
    { name: 'Partner 4', image: '/partners/logo4.png' },
    { name: 'Partner 1', image: '/partners/per_med.png' },
    { name: 'Partner 2', image: '/partners/gonesse.png' },
    { name: 'Partner 3', image: '/partners/logo3.png' },
    { name: 'Partner 4', image: '/partners/logo4.png' },
    { name: 'Partner 1', image: '/partners/per_med.png' },
    { name: 'Partner 2', image: '/partners/gonesse.png' },
    { name: 'Partner 3', image: '/partners/logo3.png' },
    { name: 'Partner 4', image: '/partners/logo4.png' },
  ]

  // Dupliquer les logos plusieurs fois pour un défilement continu
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className="w-full bg-zaneo-green-light py-8 sm:py-12 overflow-hidden relative">
      <div className="mb-4 sm:mb-6 text-center">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-zaneo-green-dark">
          {language === 'fr' ? 'Ils nous font confiance' : 'They trust us'}
        </h3>
      </div>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 sm:gap-12 lg:gap-16"
          animate={{
            x: ['0%', '-33.333%'], // Défile de 0 à -33.333% (1/3 de la largeur totale)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ minWidth: '150px', width: '150px' }}
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default TrustBanner

