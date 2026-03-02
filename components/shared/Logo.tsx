'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Predefined logo size presets (width in px).
 * Height is derived automatically for an industry-standard 3:1 aspect ratio.
 */
const LOGO_SIZES = {
    sm: 120,
    md: 160,
    lg: 200,
    xl: 240,
} as const

type LogoSize = keyof typeof LOGO_SIZES

interface LogoProps {
    /** Predefined size variant (default: 'md') */
    size?: LogoSize
    /** Custom width override in px — bypasses size preset */
    width?: number
    /** Additional CSS classes applied to the SVG element */
    className?: string
    /** Render as a plain SVG without a link wrapper */
    asImage?: boolean
    /** Link destination (default: '/') */
    href?: string
}

/**
 * Brand logo rendered as inline SVG for:
 * - Crisp rendering at every size (no raster blur)
 * - Automatic dark-mode adaptation via `currentColor`
 * - Zero layout shift (explicit width/height)
 * - No extra network request
 */
export default function Logo({
    size = 'md',
    width,
    className = '',
    asImage = false,
    href = '/',
}: LogoProps) {
    const w = width ?? LOGO_SIZES[size]
    const pathname = usePathname()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // On the home page, prevent navigation and scroll to top instead
        if (pathname === '/') {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        // On sub-pages, the Link navigates to '/' normally
    }

    const svg = (
        <svg
            width={w}
            height={w / 3}
            viewBox="0 -32.26152 618.03559 206.01186"
            fill="none"
            role="img"
            aria-label="Zyk Labs logo"
            className={`block ${className}`}
        >
            <g transform="translate(-14.014382,-117.12547)">
                {/* "Z" icon — brand gradient */}
                <path
                    d="m 15.267238,117.71261 v 20.79484 h 58.846248 l -60.099104,72.94758 v 16.54539 H 109.7819 v -20.8012 H 47.474486 l 59.959894,-72.94121 v -16.5454 z"
                    fill="url(#zyk-logo-gradient)"
                />
                {/* "yk" text — same gradient as Z icon */}
                <path
                    d="m 132.068,258.3 c -4.2,0 -8.35,-0.65 -12.45,-1.95 -4.1,-1.3 -7.45,-3.1 -10.05,-5.4 l 8.55,-16.65 c 1.8,1.6 3.85,2.85 6.15,3.75 2.4,0.9 4.75,1.35 7.05,1.35 3.3,0 5.9,-0.8 7.8,-2.4 2,-1.5 3.8,-4.05 5.4,-7.65 l 4.2,-9.9 1.8,-2.55 28.95,-69.6 h 22.5 l -36.45,85.65 c -2.6,6.5 -5.6,11.6 -9,15.3 -3.3,3.7 -7,6.3 -11.1,7.8 -4,1.5 -8.45,2.25 -13.35,2.25 z m 13.8,-27.15 -36,-83.85 h 24.15 l 27.9,67.5 z m 87.999,-19.65 0.6,-28.5 37.65,-35.7 h 27.9 l -36.15,36.75 -12.15,9.9 z M 214.517,228 V 116.7 h 23.4 V 228 Z m 60.15,0 -27.3,-33.9 14.7,-18.15 40.95,52.05 z"
                    fill="url(#zyk-logo-gradient)"
                />
                {/* "labs" text — follows theme via currentColor */}
                <path
                    d="M 316.54,228 V 116.7 h 23.4 V 228 Z m 97.617,0 v -15.75 l -1.5,-3.45 v -28.2 c 0,-5 -1.55,-8.9 -4.65,-11.7 -3,-2.8 -7.65,-4.2 -13.95,-4.2 -4.3,0 -8.55,0.7 -12.75,2.1 -4.1,1.3 -7.6,3.1 -10.5,5.4 l -8.4,-16.35 c 4.4,-3.1 9.7,-5.5 15.9,-7.2 6.2,-1.7 12.5,-2.55 18.9,-2.55 12.3,0 21.85,2.9 28.65,8.7 6.8,5.8 10.2,14.85 10.2,27.15 V 228 Z m -24.6,1.2 c -6.3,0 -11.7,-1.05 -16.2,-3.15 -4.5,-2.2 -7.95,-5.15 -10.35,-8.85 -2.4,-3.7 -3.6,-7.85 -3.6,-12.45 0,-4.8 1.15,-9 3.45,-12.6 2.4,-3.6 6.15,-6.4 11.25,-8.4 5.1,-2.1 11.75,-3.15 19.95,-3.15 h 21.45 v 13.65 h -18.9 c -5.5,0 -9.3,0.9 -11.4,2.7 -2,1.8 -3,4.05 -3,6.75 0,3 1.15,5.4 3.45,7.2 2.4,1.7 5.65,2.55 9.75,2.55 3.9,0 7.4,-0.9 10.5,-2.7 3.1,-1.9 5.35,-4.65 6.75,-8.25 l 3.6,10.8 c -1.7,5.2 -4.8,9.15 -9.3,11.85 -4.5,2.7 -10.3,4.05 -17.4,4.05 z m 118.379,0 c -7.1,0 -13.2,-1.5 -18.3,-4.5 -5.1,-3 -9,-7.55 -11.7,-13.65 -2.7,-6.2 -4.05,-14 -4.05,-23.4 0,-9.5 1.4,-17.3 4.2,-23.4 2.9,-6.1 6.9,-10.65 12,-13.65 5.1,-3 11.05,-4.5 17.85,-4.5 7.6,0 14.4,1.7 20.4,5.1 6.1,3.4 10.9,8.2 14.4,14.4 3.6,6.2 5.4,13.55 5.4,22.05 0,8.4 -1.8,15.7 -5.4,21.9 -3.5,6.2 -8.3,11.05 -14.4,14.55 -6,3.4 -12.8,5.1 -20.4,5.1 z m -47.7,-1.2 V 116.7 h 23.4 v 46.95 l -1.5,23.85 0.45,24 V 228 Z m 43.65,-18 c 3.9,0 7.35,-0.9 10.35,-2.7 3.1,-1.8 5.55,-4.35 7.35,-7.65 1.9,-3.4 2.85,-7.4 2.85,-12 0,-4.7 -0.95,-8.7 -2.85,-12 -1.8,-3.3 -4.25,-5.85 -7.35,-7.65 -3,-1.8 -6.45,-2.7 -10.35,-2.7 -3.9,0 -7.4,0.9 -10.5,2.7 -3.1,1.8 -5.55,4.35 -7.35,7.65 -1.8,3.3 -2.7,7.3 -2.7,12 0,4.6 0.9,8.6 2.7,12 1.8,3.3 4.25,5.85 7.35,7.65 3.1,1.8 6.6,2.7 10.5,2.7 z m 90.064,19.2 c -6.9,0 -13.55,-0.8 -19.95,-2.4 -6.3,-1.7 -11.3,-3.8 -15,-6.3 l 7.8,-16.8 c 3.7,2.3 8.05,4.2 13.05,5.7 5.1,1.4 10.1,2.1 15,2.1 5.4,0 9.2,-0.65 11.4,-1.95 2.3,-1.3 3.45,-3.1 3.45,-5.4 0,-1.9 -0.9,-3.3 -2.7,-4.2 -1.7,-1 -4,-1.75 -6.9,-2.25 -2.9,-0.5 -6.1,-1 -9.6,-1.5 -3.4,-0.5 -6.85,-1.15 -10.35,-1.95 -3.5,-0.9 -6.7,-2.2 -9.6,-3.9 -2.9,-1.7 -5.25,-4 -7.05,-6.9 -1.7,-2.9 -2.55,-6.65 -2.55,-11.25 0,-5.1 1.45,-9.6 4.35,-13.5 3,-3.9 7.3,-6.95 12.9,-9.15 5.6,-2.3 12.3,-3.45 20.1,-3.45 5.5,0 11.1,0.6 16.8,1.8 5.7,1.2 10.45,2.95 14.25,5.25 l -7.8,16.65 c -3.9,-2.3 -7.85,-3.85 -11.85,-4.65 -3.9,-0.9 -7.7,-1.35 -11.4,-1.35 -5.2,0 -9,0.7 -11.4,2.1 -2.4,1.4 -3.6,3.2 -3.6,5.4 0,2 0.85,3.5 2.55,4.5 1.8,1 4.15,1.8 7.05,2.4 2.9,0.6 6.05,1.15 9.45,1.65 3.5,0.4 7,1.05 10.5,1.95 3.5,0.9 6.65,2.2 9.45,3.9 2.9,1.6 5.25,3.85 7.05,6.75 1.8,2.8 2.7,6.5 2.7,11.1 0,5 -1.5,9.45 -4.5,13.35 -3,3.8 -7.35,6.8 -13.05,9 -5.6,2.2 -12.45,3.3 -20.55,3.3 z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <linearGradient
                    id="zyk-logo-gradient"
                    x1="8"
                    y1="174.5"
                    x2="636"
                    y2="174.5"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(1.0431858,0,0,1.0503431,-0.60522226,-11.478247)"
                >
                    <stop stopColor="#00C2B2" />
                    <stop offset="1" stopColor="#009C90" />
                </linearGradient>
            </defs>
        </svg>
    )

    if (asImage) return svg

    return (
        <Link
            href={href}
            onClick={handleClick}
            className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label="Zyk Labs — Go to homepage"
        >
            {svg}
        </Link>
    )
}
