import { motion } from 'framer-motion'

const TeamMember = ({ name, role, description, image, linkedin, website }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-4">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-soft-lg border-4 border-zaneo-green-light"
        />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-zaneo-black mb-1">{name}</h3>
      <p className="text-sm sm:text-base font-medium text-zaneo-green-dark mb-2">{role}</p>
      <p className="text-xs sm:text-sm text-gray-600 mb-4 max-w-xs">{description}</p>
      <div className="flex gap-3 items-center justify-center">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zaneo-green hover:text-zaneo-green-dark transition-colors"
            aria-label={`${name} LinkedIn`}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zaneo-green hover:text-zaneo-green-dark transition-colors"
            aria-label={`${name} Website`}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default TeamMember

