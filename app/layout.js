import './globals.css'
import {Inter} from 'next/font/google'
import {Providers} from "@/app/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import Script from 'next/script'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Han Concept & Design | Architecture and Visualisation',
  description: 'Weil wir uns Zeit nehmen, um die Bedürfnisse unserer Kunden zu verstehen und hart arbeiten, um ihnen den besten Service zu bieten. Die Priorität unseres Unternehmens ist die Kundenzufriedenheit, deshalb arbeiten wir eng mit unseren Kunden zusammen und geben unser Bestes, um ihre Projekte erfolgreich abzuschließen.',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <Head>
      <title>
        Han Concept & Design | Architecture and Visualisation
      </title>
      <meta
        name="description"
        content="Weil wir uns Zeit nehmen, um die Bedürfnisse unserer Kunden zu verstehen und hart arbeiten, um ihnen den besten Service zu bieten. Die Priorität unseres Unternehmens ist die Kundenzufriedenheit, deshalb arbeiten wir eng mit unseren Kunden zusammen und geben unser Bestes, um ihre Projekte erfolgreich abzuschließen."
        key="desc"
      />
      <meta property="og:title" content="Social Title for Cool Page"/>
      <meta
        property="og:description"
        content="Best Architecture and Visualisation for german speaking countries"
      />
      <meta
        property="og:image"
        content="https://www.devkaraoglan.website/img/han1.jpeg"
      />
    </Head>
    <body className={inter.className}>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-Q1XB9DTMHP"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q1XB9DTMHP', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Providers>
        <Header/>
        {children}
        <Footer/>
      </Providers>
    </body>
    </html>
  )
}
