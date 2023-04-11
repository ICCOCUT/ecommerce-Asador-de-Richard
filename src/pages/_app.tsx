import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import queryClient from '../lib/query';
import '../styles/globals.css';

/**
 * Esta es una función que representa una aplicación React con un componente QueryClientProvider y
 * Analytics.
 * @param {AppProps}  - - `MyApp`: Este es el componente principal de la aplicación.
 * @returns Se devuelve la función `MyApp`, que toma `AppProps` como argumento y devuelve un elemento
 * JSX. El elemento JSX incluye el componente `QueryClientProvider` con una propiedad `client`
 * establecida en `queryClient`, el componente `ReactQueryDevtools` con una propiedad `initialIsOpen`
 * establecida en `false`, el `Component` con `pageProps` pasado
 */
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
