/**
 * Animation variants for Framer Motion
 * Usable in Astro when rendering React components as islands (e.g. <MyComp client:visible />)
 */

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/**
 * Factory for directional fade-in variants
 * @param {'up'|'down'|'left'|'right'} direction
 * @param {number} distance
 */
export const fadeIn = (direction = 'up', distance = 20) => {
  const y = direction === 'up' ? distance : direction === 'down' ? -distance : 0
  const x = direction === 'left' ? distance : direction === 'right' ? -distance : 0
  return {
    hidden: { opacity: 0, y, x },
    show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }
}
