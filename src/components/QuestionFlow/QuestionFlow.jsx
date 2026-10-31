import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, SkipForward } from 'lucide-react'
import { questions } from '../../data/questions'
import styles from './QuestionFlow.module.css'

const STORAGE_KEY = 'shirina_answers'

function loadAnswers() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : {}
  } catch {
    return {}
  }
}

function saveAnswers(answers) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
  } catch {}
}

export default function QuestionFlow() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(loadAnswers)
  const [direction, setDirection] = useState(1)
  const [done, setDone] = useState(false)
  const [textInput, setTextInput] = useState('')

  const question = questions[current]
  const total = questions.length

  const setAnswer = (value) => {
    const updated = { ...answers, [question.id]: value }
    setAnswers(updated)
    saveAnswers(updated)
  }

  const goNext = () => {
    if (current < total - 1) {
      setDirection(1)
      setTextInput('')
      setCurrent(c => c + 1)
    } else {
      setDone(true)
    }
  }

  const goPrev = () => {
    if (current > 0) {
      setDirection(-1)
      setTextInput('')
      setCurrent(c => c - 1)
    }
  }

  const skip = () => goNext()

  const handleTextSubmit = () => {
    if (textInput.trim()) setAnswer(textInput.trim())
    goNext()
  }

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 })
  }

  if (done) {
    return (
      <section className={styles.section}>
        <motion.div
          className={styles.doneBox}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.doneIcon}>🌸</div>
          <h2 className={styles.doneTitle}>Rahmat, Shirina!</h2>
          <p className={styles.doneDesc}>
            Javoblaringiz saqlanib qoldi. Ularni faqat siz ko'rishingiz mumkin.
          </p>
          <p className={styles.privacyNote}>
            🔒 Javoblaringiz faqat sizning qurilmangizda saqlanadi.
          </p>
          <motion.button
            className={styles.restartBtn}
            onClick={() => { setCurrent(0); setDone(false); setTextInput('') }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Qayta javob berish
          </motion.button>
        </motion.div>
      </section>
    )
  }

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className={styles.eyebrow}>Sizni yaxshiroq tanish uchun...</span>
        <h2 className={styles.sectionTitle}>Sizga bir nechta samimiy savol</h2>
      </motion.div>

      <div className={styles.flowWrapper}>
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progressFill}
            animate={{ width: `${((current + 1) / total) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <p className={styles.progressLabel}>{current + 1} / {total}</p>

        <div className={styles.questionArea}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={question.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={styles.questionCard}
            >
              <p className={styles.questionText}>{question.text}</p>

              {question.type === 'choice' && (
                <div className={styles.options}>
                  {question.options.map(opt => (
                    <motion.button
                      key={opt}
                      className={`${styles.optionBtn} ${answers[question.id] === opt ? styles.optionSelected : ''}`}
                      onClick={() => { setAnswer(opt); setTimeout(goNext, 350) }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
              )}

              {question.type === 'text' && (
                <div className={styles.textInputArea}>
                  <textarea
                    className={styles.textarea}
                    placeholder="Bu yerga yozing..."
                    value={textInput || answers[question.id] || ''}
                    onChange={e => setTextInput(e.target.value)}
                    rows={3}
                  />
                  <motion.button
                    className={styles.submitBtn}
                    onClick={handleTextSubmit}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Keyingisi →
                  </motion.button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.navRow}>
          <button className={styles.navBtn} onClick={goPrev} disabled={current === 0}>
            <ChevronLeft size={18} /> Orqaga
          </button>
          <button className={styles.skipBtn} onClick={skip}>
            <SkipForward size={16} /> O'tkazib yuborish
          </button>
          {current < total - 1 ? (
            <button className={styles.navBtn} onClick={goNext}>
              Keyingisi <ChevronRight size={18} />
            </button>
          ) : (
            <button className={styles.navBtn} onClick={goNext}>
              Tugatish ✓
            </button>
          )}
        </div>

        <p className={styles.privacyNote}>
          🔒 Javoblaringiz faqat sizning qurilmangizda saqlanadi.
        </p>
      </div>
    </section>
  )
}
