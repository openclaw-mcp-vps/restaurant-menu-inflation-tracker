import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Restaurant Menu Inflation Tracker',
  description: 'Track menu price changes for local restaurants. Get alerts when prices rise and find the best deals near you.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0db682fe-f86d-46f4-98b1-1aa68d868411"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
