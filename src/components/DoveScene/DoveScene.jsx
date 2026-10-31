import { useEffect, useRef } from 'react'
import styles from './DoveScene.module.css'

export default function DoveScene({ onLetterOpened }) {
  const iframeRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === 'LETTER_OPENED') {
        if (onLetterOpened) onLetterOpened()
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [onLetterOpened])

  return (
    <div className={styles.wrapper}>
      <iframe
        ref={iframeRef}
        src="/assets/dove/dove-scene.html"
        className={styles.iframe}
        title="Kabutar animatsiyasi"
        allow="autoplay"
      />
    </div>
  )
}
