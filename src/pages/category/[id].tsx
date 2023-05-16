import { useInfiniteQuery } from '@tanstack/react-query';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductGrid from '../../components/ProductGrid';
import Skelton from '../../components/Skelton';

/* Este es un componente funcional en una aplicación Next.js que muestra una lista de productos que
pertenecen a una categoría específica. Utiliza el enlace `useRouter` para obtener el ID de categoría
de la URL, y el enlace `useInfiniteQuery` de la biblioteca `@tanstack/react-query` para obtener los
datos de los productos desde un extremo de la API. El componente `ProductGrid` se usa para mostrar
la lista de productos, y se muestra un componente `Skelton` mientras se obtienen los datos. El
componente también incluye un componente `Head` para establecer el título de la página y la meta
descripción, y los componentes `Navbar` y `Footer` para la navegación del sitio. */
const SingleCategory = () => {
	/* `const router = useRouter();` está usando el enlace `useRouter` de Next.js para acceder al objeto
del enrutador. Esto permite que el componente acceda a los parámetros de consulta desde la URL, que
en este caso se utiliza para obtener el ID de la categoría que se va a mostrar. */
	const router = useRouter();

	/**
	 * Esta función recupera una sola categoría de un extremo de la API, con un parámetro de cursor
	 * opcional para la paginación.
	 * @param  - Esta es una función de JavaScript llamada `getSingleCategory` que usa la sintaxis
	 * async/await para hacer una llamada a la API para recuperar información sobre una sola categoría. La
	 * función toma un objeto como su parámetro, que puede incluir una propiedad `pageParam` que por
	 * defecto es `null`. Si `pageParam` es
	 * @returns La función `getSingleCategory` devuelve una Promesa que se resuelve en la respuesta JSON
	 * desde el extremo de la API `/api/categories/${router.query.id}`. Si se proporciona `pageParam`, la
	 * función añade `?cursorId=` a la URL.
	 */
	const getSingleCategory = async ({ pageParam = null }) => {
		let url = `/api/categories/${router.query.id}`;
		if (pageParam) {
			url += `?cursorId=${pageParam}`;
		}
		const respJSON = await fetch(url);
		const resp = await respJSON.json();
		return resp;
	};

	/* Este código utiliza el gancho `useInfiniteQuery` de la biblioteca `@tanstack/react-query` para
	obtener datos para una sola categoría de productos desde un extremo de la API. El gancho toma tres
	argumentos: */
	const { isLoading, data, fetchNextPage } = useInfiniteQuery(
		[`singleCategory ${router.query.id as string}`],
		getSingleCategory,
		{
			enabled: Boolean(router.query.id),
			getNextPageParam: lastPage => {
				const nextCursor =
					lastPage?.category?.products[lastPage?.category?.products?.length - 1]
						?.id;
				return nextCursor;
			},
		},
	);

	/* `const allProductsWithCategory` está inicializando un objeto con tres propiedades: `name`,
	`products` y `hasMore`. `name` se inicializa como una cadena vacía, `products` como una matriz
	vacía y `hasMore` como `true`. Este objeto se utiliza para almacenar los datos recuperados de la
	API para una sola categoría de productos. El tipo `cualquiera` se utiliza para permitir que se
	asigne cualquier tipo de valor a las propiedades del objeto. */
	const allProductsWithCategory: any = {
		name: '',
		products: [],
		hasMore: true,
	};

	data?.pages.map(page => {
		if (page?.category) {
			if (page.category?.name) {
				allProductsWithCategory.name = page.category?.name;
			}
			if (page.category?.products && page.category?.products.length > 0) {
				allProductsWithCategory.products.push(...page.category?.products);
			}
		}
		return page?.category;
	});

	if (data?.pages[data?.pages.length - 1]?.category?.products.length === 0) {
		allProductsWithCategory.hasMore = false;
	}

	return (
		<div>
			<Head>
				<title>
					{isLoading
						? 'Loading...'
						: `All ${allProductsWithCategory?.name} Product`}
				</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<section className='bg-primaryGray'>
				<main className='container mx-auto '>
					{isLoading ? (
						<Skelton />
					) : (
						<>
							{allProductsWithCategory &&
								allProductsWithCategory.products.length > 0 && (
									<ProductGrid
										hasMore={allProductsWithCategory.hasMore}
										showLink={false}
										categories={[allProductsWithCategory]}
										loadMoreFun={fetchNextPage}
									/>
								)}
						</>
					)}
				</main>
			</section>
			<Footer />
		</div>
	);
};

export default SingleCategory;
