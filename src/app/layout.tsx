import React from "react";

import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeToggle from "@/components/ThemeToggle";
import Config from "@/app/config";
import Providers from "@/components/Providers";

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

  return <Config>
     <body className={`${inter.className} h-screen flex justify-center items-center`} suppressHydrationWarning={true}>
     <Providers>
       <ThemeToggle/>
       {children}
     </Providers>
     </body>
  </Config>

}
