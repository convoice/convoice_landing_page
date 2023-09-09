import Link from 'next/link'

export function NavLink({
  href,
  children,
  color='default',
}: {
  href: string
  children: React.ReactNode
  color?: 'default' | 'white'
}) {
  return (
    color === 'default' ?
    <Link
      href={href}
      className="hover:text-main-500 inline-block rounded-lg px-2 py-1 font-medium text-default transition"
    >
      {children}
    </Link>
    :
    <Link
      href={href}
      className="hover:text-main-100 inline-block rounded-lg px-2 py-1 font-medium text-white transition"
    >
      {children}
    </Link>
  )
}
