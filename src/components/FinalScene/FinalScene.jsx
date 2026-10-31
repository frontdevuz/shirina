import { motion } from 'framer-motion'
import { RotateCcw, Heart } from 'lucide-react'
import { girlProfile } from '../../data/girlProfile'
import FloatingParticles from '../FloatingParticles/FloatingParticles'
import styles from './FinalScene.module.css'

export default function FinalScene({ onRestart }) {
  return (
    <section className={styles.section}>
      <FloatingParticles />

      <div className={styles.content}>
        <motion.div
          className={styles.ornamentTop}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <svg width="160" height="30" viewBox="0 0 160 30" fill="none">
            <path d="M10 15 H62 M98 15 H150" stroke="#C6A46A" strokeWidth="1" />
            <circle cx="80" cy="15" r="5" fill="#C6A46A" />
            <circle cx="68" cy="15" r="2.5" fill="#D8A7AC" />
            <circle cx="92" cy="15" r="2.5" fill="#D8A7AC" />
          </svg>
        </motion.div>

        {/* Romantic Photo Frame */}
        <motion.div
          className={styles.photoFrame}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className={styles.photoInner}>
            <img
              src="/assets/images/romantic_love.jpg"
              alt="Romantic confession"
              className={styles.romanticImg}
            />
            <div className={styles.doveBadge}>🕊️</div>
          </div>
        </motion.div>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Aziz Shirina...
        </motion.h2>

        {/* Prominent Heartfelt Declaration */}
        <motion.div
          className={styles.loveBox}
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className={styles.loveSparkleTop}>✦ ❀ ✦</div>
          <h1 className={styles.loveText}>
            Sizni judayam qattiq sevaman ♡
          </h1>
          <div className={styles.loveSparkleBottom}>
            <Heart size={20} className={styles.heartIcon} fill="#743D50" />
          </div>
        </motion.div>

        <motion.p
          className={styles.message}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          {girlProfile.finalMessage}
        </motion.p>

        <motion.div
          className={styles.divider}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          ✦ ❀ ✦
        </motion.div>

        <motion.p
          className={styles.signature}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          {girlProfile.finalSignature}
        </motion.p>

        <motion.div
          className={styles.flowers}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          🌸 🌼 🌸
        </motion.div>

        <motion.button
          className={styles.restartBtn}
          onClick={onRestart}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <RotateCcw size={16} />
          Maktubni qayta o'qish
        </motion.button>
      </div>
    </section>
  )
}
