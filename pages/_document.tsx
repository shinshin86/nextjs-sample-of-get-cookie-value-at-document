import Document, { Html, Head, Main, NextScript } from 'next/document';

interface Props {
  hasCookie: boolean;
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    let hasCookie: boolean = false;

    if (ctx.req && ctx.req.headers.cookie) {
      console.log('cookie values: ', ctx.req.headers.cookie);
      hasCookie = true;
    }

    return { ...initialProps, hasCookie };
  }

  render() {
    console.log('hasCookie: ', this.props.hasCookie);

    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
