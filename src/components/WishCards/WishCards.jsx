import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { girlProfile } from '../../data/girlProfile'
import styles from './WishCards.module.css'

function WishCard({ wish, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.12,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -6, boxShadow: '0 20px 45px rgba(70, 53, 58, 0.14)' }}
    >
      <div className={styles.cardInner}>
        <div className={styles.ornamentTop}>✦</div>
        <p className={styles.wishText}>{wish}</p>
        <div className={styles.ornamentBottom}>♡</div>
      </div>
    </motion.div>
  )
}

export default function WishCards() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className={styles.eyebrow}>Yurakdan</span>
        <h2 className={styles.title}>Sizga atalgan eng samimiy tilaklar</h2>
        <div className={styles.divider}>✦ ❀ ✦</div>
      </motion.div>

      <div className={styles.grid}>
        {girlProfile.wishes.map((wish, i) => (
          <WishCard key={i} wish={wish} index={i} />
        ))}
      </div>
    </section>
  )
}
