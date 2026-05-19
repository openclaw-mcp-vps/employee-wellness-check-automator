import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Employee Wellness Check Automator',
  description: 'Automates employee wellness check-ins and alerts for HR teams at remote-first companies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5b1f0ce0-a337-4425-b7d1-69634dce5f6d"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
