const Header = ({ language, onLanguageChange, mode, onModeChange }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zaneo-green-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex justify-between items-center">
        {/* Logo - Left */}
        <img 
          src="/logo.png" 
          alt="Zaneo Logo" 
          className="h-32 sm:h-40 lg:h-20 w-auto"
        />

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          {/* Mode Toggle - For PTs | For coaches */}
          <div className="inline-flex rounded-full bg-zaneo-green-light p-1 shadow-soft">
            <button
              onClick={() => onModeChange('pt')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                mode === 'pt'
                  ? 'bg-zaneo-green text-white shadow-soft'
                  : 'text-zaneo-green-dark hover:text-zaneo-green'
              }`}
            >
              For PTs
            </button>
            <button
              onClick={() => onModeChange('coach')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                mode === 'coach'
                  ? 'bg-zaneo-green text-white shadow-soft'
                  : 'text-zaneo-green-dark hover:text-zaneo-green'
              }`}
            >
              For coaches
            </button>
          </div>

          {/* Language Toggle */}
          <button
            onClick={onLanguageChange}
            className="px-3 sm:px-4 py-2 rounded-full bg-zaneo-green-light hover:bg-zaneo-green text-xs sm:text-sm font-medium text-zaneo-green-dark transition-colors duration-200 shadow-soft"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

