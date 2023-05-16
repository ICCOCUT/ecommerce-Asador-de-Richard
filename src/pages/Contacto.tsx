import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import Contact from '../components/Contact';

/**
 * Este es un componente funcional que muestra una página de contacto con una barra de navegación, un
 * formulario de contacto, un mensaje de alerta y un pie de página.
 * @returns Se devuelve el componente Contacto, que incluye un componente Head con título, descripción
 * y metaetiquetas de favicon, un componente Navbar, un elemento principal con un componente Contact,
 * un componente Alert y un componente Footer.
 */
const Contacto = () => {
	return (
		<div>
			<Head>
				<title>Contacto</title>
				<meta name='description' content='Contactanos' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div className='bg-primaryGray border-2 border-t-primaryOrange border-transparent'>
				<main className='container mx-auto'>
					<Contact />
				</main>
				<Alert />
			</div>
			<Footer />
		</div>
	);
};

export default Contacto;
