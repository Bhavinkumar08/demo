import React, { useEffect, useRef } from 'react'

export default function Parallax() {
	const ref1 = useRef(null)
	const ref2 = useRef(null)

	useEffect(() => {
		let ticking = false

		function mapRange(value, inMin, inMax, outMin, outMax) {
			const t = Math.max(0, Math.min(1, (value - inMin) / (inMax - inMin)))
			return outMin + t * (outMax - outMin)
		}

		function onScroll() {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const s = window.scrollY || window.pageYOffset
					const y1 = mapRange(s, 0, 800, 0, -40)
					const y2 = mapRange(s, 0, 800, 0, -80)
					if (ref1.current) ref1.current.style.transform = `translateY(${y1}px)`
					if (ref2.current) ref2.current.style.transform = `translateY(${y2}px)`
					ticking = false
				})
				ticking = true
			}
		}

		window.addEventListener('scroll', onScroll, { passive: true })
		onScroll()
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<div className="parallax" aria-hidden>
			<div ref={ref1} className="parallax-layer layer-1" />
			<div ref={ref2} className="parallax-layer layer-2" />
		</div>
	)
}
