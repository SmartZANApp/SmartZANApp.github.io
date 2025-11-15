import { useState } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import SolutionTeamToggle from './components/SolutionTeamToggle'
import TrustBanner from './components/TrustBanner'

function App() {
  const [language, setLanguage] = useState('en')
  const [mode, setMode] = useState('pt')

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  const content = {
    fr: {
      title: "OPTIMISONS L'ADHERENCE au digital dans la santé",
      text: "Zaneo AI, déclenche un boost massif de l'adoption digitale, en commençant par les physiothérapeutes.",
      team: "Notre Équipe",
      trust: "Ils nous font confiance",
    },
    en: {
      title: "OPTIMIZE ADHERENCE to digital in healthcare",
      text: "Zaneo AI, kick-starting a massive boost in digital adoption, starting with physiotherapists.",
      team: "Our Team",
      trust: "They trust us",
    },
  }

  const currentContent = content[language]

  // Show coach mode placeholder
  if (mode === 'coach') {
    return (
      <div className="min-h-screen bg-white">
        <Header 
          language={language} 
          onLanguageChange={toggleLanguage}
          mode={mode}
          onModeChange={setMode}
        />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zaneo-green mb-4">
              {language === 'fr' ? 'Bientôt disponible !' : 'Coming soon!'}
            </h2>
            <p className="text-xl sm:text-2xl text-zaneo-green-dark">
              {language === 'fr' ? 'La version pour les coaches arrive prochainement.' : 'The coach version is coming soon.'}
            </p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        language={language} 
        onLanguageChange={toggleLanguage}
        mode={mode}
        onModeChange={setMode}
      />
      
      <main className="pt-20">
        {/* Section 1: Title */}
        <Section index={0}>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-zaneo-black leading-tight">
              {language === 'fr' ? (
                <>
                  OPTIMISONS L'<span className="text-zaneo-green">ADHERENCE</span> au digital dans la santé
                </>
              ) : (
                <>
                  OPTIMIZE <span className="text-zaneo-green">ADHERENCE</span> to digital in healthcare
                </>
              )}
            </h1>
          </div>
        </Section>

        {/* Section 2: Single Image - physio_adoption_patient_benefit.png */}
        <Section index={1}>
          <div className="w-full">
            <div className="rounded-3xl overflow-hidden shadow-soft-lg">
              <img
                src="/physio_adoption_patient_benefit.png"
                alt={language === 'fr' ? "Bénéfice patient adoption physiothérapie" : "Physio Adoption Patient Benefit"}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Section 4: Solution/Team Toggle */}
        <SolutionTeamToggle language={language} />

        {/* Section 5: Video - pres_solution.mp4 */}
        <Section index={3}>
          <div className="w-full mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-soft-lg">
              <video
                src="/pres_solution.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              >
                {language === 'fr' ? 'Votre navigateur ne supporte pas la balise vidéo.' : 'Your browser does not support the video tag.'}
              </video>
            </div>
          </div>
        </Section>

        {/* Trust Banner at the bottom */}
        <TrustBanner language={language} />
      </main>
    </div>
  )
}

export default App

