import React from 'react'

/** Smooth-scroll to an anchor section; noop for non-hash hrefs. */
export function handleScrollTo(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    onComplete?: () => void,
) {
    if (!href.startsWith('#')) return

    e.preventDefault()
    const el = document.getElementById(href.substring(1))
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        onComplete?.()
    }
}
