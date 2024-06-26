import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="shortcut icon" href="../../public/icon.png" />
      <body className="bg-blue-600 bg-opacity-25">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
