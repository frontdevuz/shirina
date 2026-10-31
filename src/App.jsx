import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import DoveScene from './components/DoveScene/DoveScene'
import Letter from './components/Letter/Letter'
import HerWorld from './components/HerWorld/HerWorld'
import WishCards from './components/WishCards/WishCards'
import FinalScene from './components/FinalScene/FinalScene'
import './styles/global.css'

export default function App() {
  const [showMainSite, setShowMainSite] = useState(false)
  const [started, setStarted] = useState(false)

  const handleRestart = () => {
    setShowMainSite(false)
    setStarted(false)
  }

  return (
    <>
      <AnimatePresence>
        {!showMainSite && (
          <motion.div
            key="dove"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            style={{ position: 'fixed', inset: 0, zIndex: 100 }}
          >
            <DoveScene onLetterOpened={() => setShowMainSite(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {showMainSite && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <Letter onStart={() => setStarted(true)} />
          {started && (
            <>
              <HerWorld />
              <WishCards />
              <FinalScene onRestart={handleRestart} />
            </>
          )}
        </motion.main>
      )}
    </>
  )
}
