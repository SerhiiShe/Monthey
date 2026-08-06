'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Header as HeaderType } from '@/payload-types'
import { MontheyLogoSymbol } from './ui/icons/MontheyLogoSymbol'
import { MenuIcon } from './ui/icons/MenuIcon'
import { AccessibilityIcon } from './ui/icons/AccessibilityIcon'

export default function Navbar({ navLinks, isDraftMode }: HeaderType & { isDraftMode: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 bg-transparent flex justify-between items-start">
      {/* Left side: Logo */}
      <Link href="/" className="flex items-center gap-3 group max-w-[30vw]">
        <MontheyLogoSymbol />
      </Link>

      {isDraftMode && (
        <div className="bg-yellow-100 text-yellow-800 p-3 px-4 gap-4 rounded-md mb-8 text-sm font-bold flex justify-between items-center shadow-sm border border-yellow-200">
          <span>Note: You are in draft preview mode.</span>
          <a
            href="/api/disable-preview"
            className="bg-yellow-200 hover:bg-yellow-300 text-yellow-900 px-3 py-1 rounded transition-colors"
          >
            Exit Preview Mode
          </a>
        </div>
      )}

      {/* Right side: Buttons and drop-down menu */}
      <div className="relative flex items-center gap-4">
        {/* Menu button (hamburger) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center w-11 h-11 bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Toggle menu"
        >
          <MenuIcon />
        </button>

        {/* Accessibility button */}
        <button
          className="flex items-center justify-center w-11 h-11 bg-white rounded-xl shadow-sm hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Accessibility options"
        >
          <AccessibilityIcon />
        </button>

        {/* Drop-down menu */}
        {isMenuOpen && (
          <div className="absolute top-14 right-16 w-48 bg-white rounded-2xl shadow-xl py-2 flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks?.map((navLink, index) => {
              return (
                <Link
                  key={index}
                  href={navLink.url}
                  className="px-5 py-3 text-slate-700 hover:bg-slate-50 hover:text-sky-600 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {navLink.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}
