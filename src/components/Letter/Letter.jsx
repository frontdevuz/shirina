import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import styles from './Letter.module.css'

export default function Letter({ onStart }) {
  return (
    <section className={styles.section} id="letter">
      <motion.div
        className={styles.parchment}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.ornament}>✦ ❀ ✦</div>

        <div className={styles.waxSeal}>
          <svg viewBox="0 0 80 80" width="70" height="70">
            <defs>
              <radialGradient id="waxGrad" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#9E556D" />
                <stop offset="45%" stopColor="#743D50" />
                <stop offset="100%" stopColor="#3D1A26" />
              </radialGradient>
            </defs>
            <path fill="url(#waxGrad)"
              d="M40,5 C47,5 51,8 57,10 C63,12 68,17 70,23 C72,29 75,33 75,40 C75,47 72,51 70,57 C68,63 63,68 57,70 C51,72 47,75 40,75 C33,75 29,72 23,70 C17,68 12,63 10,57 C8,51 5,47 5,40 C5,33 8,29 10,23 C12,17 17,12 23,10 C29,8 33,5 40,5 Z" />
            <circle cx="40" cy="40" r="24" fill="none" stroke="#C6A46A" strokeWidth="1.2" strokeOpacity="0.75" />
            <path d="M40,50 C40,50 28,42 28,34 C28,29.5 31.5,26.5 35.5,26.5 C38,26.5 39.5,28 40,29.5 C40.5,28 42,26.5 44.5,26.5 C48.5,26.5 52,29.5 52,34 C52,42 40,50 40,50 Z"
              fill="#C6A46A" fillOpacity="0.85" />
          </svg>
        </div>

        <h2 className={styles.dear}>Aziz Shirina,</h2>

        <p className={styles.body}>
          Ba'zi insonlar hayotimizga shunchaki kirib keladi, ammo ularning
          o'ziga xos dunyosi, tabassumi va fikrlari ularni boshqalardan
          ajratib turadi.
        </p>
        <p className={styles.body}>
          Bu kichik maktub esa ana shu go'zal dunyoni — sizning betakror
          olamingizni yaxshiroq kashf qilish uchun...
        </p>
        <p className={styles.body}>
          Har bir sahifa siz haqingizda — sizning go'zalligingiz, orzularingiz,
          qiziqishlaringiz va betakrorligingiz haqida bitilgan. Sayohatni
          boshlang va ushbu samimiy maktubni qabul qiling.
        </p>

        <motion.button
          className={styles.startBtn}
          onClick={onStart}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Sayohatni boshlash <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </section>
  )
}
