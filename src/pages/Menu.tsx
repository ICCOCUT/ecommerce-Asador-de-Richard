import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import ProductGrid from '../components/ProductGrid';
import Skelton from '../components/Skelton';

/**
 * Este es un componente de página de Next.js que obtiene todas las categorías con sus productos y los
 * muestra en una cuadrícula de productos.
 * @returns Se devuelve el componente Inicio, que contiene una llamada a una API para obtener todas las
 * categorías con sus productos y los muestra en un componente ProductGrid. También incluye un
 * componente de barra de navegación, pie de página y alerta. Si los datos aún se están cargando,
 * muestra un componente Skeleton.
 */
const Menu: NextPage = () => {
	/**
	 * Esta función recupera todas las categorías de un extremo de la API y las devuelve como un objeto
	 * JSON.
	 * @returns La función `getAllCategories` devuelve una Promesa que se resuelve en la respuesta JSON
	 * desde el extremo `/api/categories`.
	 */
	const getAllCategories = async () => {
		const respJSON = await fetch('/api/categories');
		const resp = await respJSON.json();
		return resp;
	};

	/* `const { isLoading, data } = useQuery()` utiliza el enlace `useQuery` de la biblioteca
	`@tanstack/react-query` para obtener datos de un extremo de la API y administrar el estado de los
	datos. */
	const { isLoading, data } = useQuery(
		['AllCategoreiesWithProducts'],
		getAllCategories,
	);

	const categories = data?.categories;

	return (
		<div>
			<Head>
				<title>All Products</title>
				<meta name='description' content='All Products' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<main className='container mx-auto'>
				{isLoading ? (
					<Skelton />
				) : (
					categories &&
					categories?.length > 0 && (
						<ProductGrid showLink categories={categories} />
					)
				)}
				<Alert />
			</main>
			<Footer />
		</div>
	);
};

export default Menu;
