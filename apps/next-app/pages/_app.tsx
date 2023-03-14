import { AppProps } from 'next/app';
import { NextUiBanner } from '@storybook-nx-show/next/ui/banner';
import { NextUiButton } from '@storybook-nx-show/next/ui/button';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUiBanner
        backgroundColor="#FF00FF66"
        text="This is a banner"
        borderColor="#FF00FF"
        width={350}
        height={50}
        borderWidth={2}
      />

      <NextUiButton text="Click me" color="#f300fe" disabled={false} />
    </>
  );
}

export default CustomApp;
