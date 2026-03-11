import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from 'next/font/google'
import TickerBar from '@/components/ticker-bar'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import '@/styles/globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The Silicon Wire — Intelligence Across the Full AI Supply Chain',
    template: '%s | The Silicon Wire',
  },
  description: 'From rare earth extraction to frontier model deployment. The Silicon Wire covers every link in the chain that powers artificial intelligence.',
  metadataBase: new URL('https://www.siliconwire.xyz'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.siliconwire.xyz',
    siteName: 'The Silicon Wire',
    title: 'The Silicon Wire — Intelligence Across the Full AI Supply Chain',
    description: 'From rare earth extraction to frontier model deployment. The Silicon Wire covers every link in the chain that powers artificial intelligence.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'The Silicon Wire' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TheSiliconWire',
    title: 'The Silicon Wire',
    description: 'Autonomous coverage of the AI supply chain — from wafer fabs to frontier models.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('sw-theme');
                if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans">
        <TickerBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
