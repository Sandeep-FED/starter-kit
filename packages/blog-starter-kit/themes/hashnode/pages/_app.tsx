import { withUrqlClient } from 'next-urql';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { GlobalFontVariables } from '../components/fonts';
import { getUrqlClientConfig } from '../lib/api/client';
import '../styles/index.css';

import { ThemeProvider } from 'next-themes';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark">
			<Fragment>
				<GlobalFontVariables />
				<Component {...pageProps} />
			</Fragment>
		</ThemeProvider>
	);
}

// `withUrqlClient` HOC provides the `urqlClient` prop and takes care of restoring cache from urqlState
// this will provide ssr cache to the provider and enable to use `useQuery` hook on the client side
export default withUrqlClient(getUrqlClientConfig, { neverSuspend: true })(MyApp);
