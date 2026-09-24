import { useEffect, useState } from 'react'

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)

        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    const links = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
    ]

    return (
        <nav
            className={`sticky top-4 z-10 mx-auto w-[calc(100%-2rem)] max-w-2xl rounded-full border border-emerald-200/80 px-4 py-3 font-sans shadow-lg shadow-emerald-900/10 backdrop-blur-md transition-all duration-200 ${isScrolled ? 'bg-emerald-50/70 shadow-emerald-900/15' : 'bg-emerald-50/90'}`}
            aria-label="Main navigation"
        >
            <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
                {links.map((link) => (
                    <li key={link.href}>
                        <a
                            className="text-sm font-medium text-emerald-800 transition-colors hover:text-emerald-600"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;