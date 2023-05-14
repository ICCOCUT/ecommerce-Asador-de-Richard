import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import Contact from '../components/Contact';

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
