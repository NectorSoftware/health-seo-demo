import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Replace the src URL below with your actual Nytro SEO snippet */}
        <script src="https://cdn.nytroseo.com/YOUR-SITE-ID.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
