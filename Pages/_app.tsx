import type { AppProps} from 'next/app';

import '../styles/globals.css';
import '../Styles/main.less ';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
