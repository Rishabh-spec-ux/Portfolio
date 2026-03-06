import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rishabh Rudani | Robotics Engineer',
  description: 'Premium robotics portfolio showcasing autonomous systems, perception, navigation, and control. Featuring the Space Rover Project.',
  keywords: 'robotics, autonomous systems, ROS 2, Nav2, perception, control, engineering',
  authors: [{ name: 'Rishabh Rudani' }],
  creator: 'Rishabh Rudani',
  openGraph: {
    title: 'Rishabh Rudani | Robotics Engineer',
    description: 'Premium robotics portfolio for autonomous systems developer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
        {children}
      </body>
    </html>
  )
}
