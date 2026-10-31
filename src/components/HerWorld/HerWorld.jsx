import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { girlProfile } from '../../data/girlProfile'
import styles from './HerWorld.module.css'

function AnimatedCard({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -10,
        boxShadow: '0 24px 50px rgba(70, 53, 58, 0.16), 0 8px 25px rgba(198, 164, 106, 0.25)'
      }}
    >
      {children}
    </motion.div>
  )
}

function SectionHeader({ eyebrow, title }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={styles.sectionHeader}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.divider}><span>✦ ❀ ✦</span></div>
    </motion.div>
  )
}

export default function HerWorld() {
  return (
    <div className={styles.world}>

      {/* Section A: Personality */}
      <section className={styles.section}>
        <SectionHeader eyebrow="Betakror fazilatlar" title="Sizning xarakteringiz" />
        <div className={styles.grid}>
          {girlProfile.personality.map((trait, i) => (
            <AnimatedCard key={trait.title} delay={i * 0.08}>
              <div className={styles.cardImageWrapper}>
                <img src={trait.image} alt={trait.title} className={styles.cardImg} loading="lazy" />
                <div className={styles.cardImageOverlay} />
                <div className={styles.cardIconBadge}>{trait.icon}</div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{trait.title}</h3>
                <p className={styles.cardDesc}>{trait.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Section B: Interests & Hobbies */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <SectionHeader eyebrow="Nimalarga qiziqasiz?" title="Sizning qiziqishlaringiz" />
        <div className={styles.grid}>
          {girlProfile.interests.hobbies.map((hobby, i) => (
            <AnimatedCard key={hobby.name} delay={i * 0.08}>
              <div className={styles.cardImageWrapper}>
                <img src={hobby.image} alt={hobby.name} className={styles.cardImg} loading="lazy" />
                <div className={styles.cardImageOverlay} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{hobby.name}</h3>
                <p className={styles.cardDesc}>{hobby.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Section C: Favorites */}
      <section className={styles.section}>
        <SectionHeader eyebrow="Siz yoqtirgan narsalar" title="Sizning sevimlilaringiz" />
        <div className={styles.grid}>
          {girlProfile.favorites.map((fav, i) => (
            <AnimatedCard key={fav.title} delay={i * 0.08}>
              <div className={styles.cardImageWrapper}>
                <img src={fav.image} alt={fav.title} className={styles.cardImg} loading="lazy" />
                <div className={styles.cardImageOverlay} />
                <div className={styles.cardIconBadge}>{fav.icon}</div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{fav.title}</h3>
                <p className={styles.cardDesc}>{fav.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Section D: Dreams */}
      <section className={`${styles.section} ${styles.dreamsSection}`}>
        <SectionHeader eyebrow="Yuksak maqsadlar sari" title="Sizning orzularingiz" />
        <div className={styles.grid}>
          {girlProfile.dreams.map((dream, i) => (
            <AnimatedCard key={dream.title} delay={i * 0.08}>
              <div className={styles.cardImageWrapper}>
                <img src={dream.image} alt={dream.title} className={styles.cardImg} loading="lazy" />
                <div className={styles.cardImageOverlay} />
                <div className={styles.cardIconBadge}>✨</div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{dream.title}</h3>
                <p className={styles.cardDesc}>{dream.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <motion.blockquote
          className={styles.quote}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          "{girlProfile.quote}"
        </motion.blockquote>
      </section>

    </div>
  )
}
