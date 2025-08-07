import {Head, Html, Main, NextScript} from 'next/document';

// next/document <Head /> vs next/head <Head />
//
// next/document Head is rendered once on the server. This is different from next/head which will
// rebuild the next/head fields each time it's called, and won't overwrite next/document's Head.

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Analytics script loader */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QB280N4XKH"></script>

        {/* Inline config using dangerouslySetInnerHTML to avoid TS errors */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QB280N4XKH');
            `,
          }}
        />

        <meta charSet="utf-8" />
        <meta content="notranslate" name="google" />
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
