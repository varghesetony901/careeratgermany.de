import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import { Toaster } from "@/components/ui/sonner";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Locale, i18n } from '@/i18n.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'C@G Recruting UG',
  description: 'Beyond Hiring, Building Teams - Connecting Talent to Opportunity - Your Success, Our Expertise! Your trusted partner in recruiting.',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang={params.lang}>
        <body className={inter.className}>
          <Toaster />
          <Navbar locale={params.lang}/>
          {children}
          <Footer locale={params.lang}/>
        </body>
      </html>
    </SessionProvider>
  )
}