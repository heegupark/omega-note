import type { AppProps } from 'next/app';
import 'quill/dist/quill.snow.css';
import '../static/styles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
