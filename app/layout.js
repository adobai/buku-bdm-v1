import { Raleway } from 'next/font/google'
import './ui/globals.css'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Buku Business Data Management',
  description: 'Buku Business Intelligence Systems',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
