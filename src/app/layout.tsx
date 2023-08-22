import React from "react";

import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface PropTypes {
  children: React.ReactNode
}

export const metadata: Metadata = {
  applicationName: 'Scrum Planner',
  title: 'Scrum Planner - Çok Yakında',
  description: 'Scrum Planner - Çok Yakında',
}

export default function RootLayout({ children }: PropTypes) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
