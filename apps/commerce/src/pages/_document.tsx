import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from 'stitches.config';

const Document = () => (
  <Html>
    <Head>
      {/* eslint-disable-next-line react/no-danger */}
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
