import './globals.css'
import { Inter } from 'next/font/google'

import Navigation from "../components/organisms/Navigation/Navigation";
import WriteMe from "../components/templates/WriteMe/WriteMe";

import content from "../public/assets/content/content.json";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marco Mazzai | Personal Portfolio',
  description: 'Remote Frontend Developer Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navigationData = content.navigation;


  return (
    <html lang="en">
      <body className={inter.className}>
              <Navigation navigationData={navigationData} />

        {children}

      <WriteMe />
      </body>
    </html>
  )
}
