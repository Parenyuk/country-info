"use client"
import { useState, useEffect } from 'react'

import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

export const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div onClick={e => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
      {theme === 'dark' ? <FaMoon size={'2em'} /> : <FaSun size={'2em'} />}
    </div>
  )
}
