'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'

export default function HiddenHeader() {
  const [scrollY, setScrollY] = useState(0) // Initial value set to 0

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Adding the event listener
    window.addEventListener('scroll', handleScroll)

    // Set the initial scroll position when component mounts
    setScrollY(window.scrollY)

    // Cleanup: remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Header
      fixed={true}
      hidden={scrollY < 900}
      offset={(scrollY - 900) / 3 > 76 ? 0 : -84 + (scrollY - 900) / 3}
    />
  )
}
