import React from "react";
import Head from "next/head";

function SEO({ description, lang, meta, title }) {
  const metaDescription = description || "";

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e6005c" />
      <meta name="msapplication-TileColor" content="#e6005c" />
      <meta name="theme-color" content="#e6005c" />

      <meta
        property="description"
        content={metaDescription}
        key="description"
      />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={metaDescription}
        key="og:description"
      />
      <meta property="og:type" content="website" key="g:type" />
      <meta property="twitter:card" content="summary" key="twitter:card" />
      <meta
        property="twitter:creator"
        content="@ehsanpo"
        key="twitter:creator"
      />
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta
        property="twitter:description"
        content={metaDescription}
        key="twitter:description"
      />

      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}

export default SEO;
