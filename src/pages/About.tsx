import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import SobreN from '../components/SobreN';

const Contacto = () => {
	return (
		<div>
			<Head>
				<title>Sobre Nosotros</title>
				<meta name='description' content='Sobre Nosotros' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div className='bg-primaryGray'>
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
