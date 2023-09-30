import Link from 'next/link'

export function NavLink({
  href,
  children,
  color = 'default',
}: {
  href: string
  children: React.ReactNode
  color?: 'default' | 'white'
}) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const targetId = href.substring(1) // Remove the leading '#' character
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      })
    }

    // Optionally, you can close a mobile menu or perform other actions here.
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={
        color === 'default'
          ? 'inline-block rounded-lg px-2 py-1 font-medium text-default transition hover:text-main-500'
          : 'inline-block rounded-lg px-2 py-1 font-medium text-white transition hover:text-main-100'
      }
    >
      {children}
    </Link>
  )
}
