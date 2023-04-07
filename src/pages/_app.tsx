import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import queryClient from '../lib/query';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<Component {...pageProps} />
			<Analytics />
		</QueryClientProvider>
	);
}

export default MyApp;
