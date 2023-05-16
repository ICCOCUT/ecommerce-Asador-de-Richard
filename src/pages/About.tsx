import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import SobreN from '../components/SobreN';

/**
 * Este es un componente funcional en TypeScript React que muestra una página sobre la empresa con una
 * barra de navegación, contenido principal, alerta y pie de página.
 * @returns Se devuelve el componente Contacto, que incluye un componente Head con título, descripción
 * y favicon, un componente Navbar, un elemento principal con el componente SobreN, un componente Alert
 * y un componente Footer.
 */
const Contacto = () => {
	return (
		<div>
			<Head>
				<title>Sobre Nosotros</title>
				<meta name='description' content='Sobre Nosotros' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div className='bg-primaryGray border-2 border-t-primaryOrange border-transparent'>
				<main className='container mx-auto'>
					<SobreN />
				</main>
				<Alert />
			</div>
			<Footer />
		</div>
	);
};

export default Contacto;
