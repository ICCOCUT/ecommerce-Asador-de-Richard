import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import NextImage from 'next/image';

const Contacto = () => {
	return (
		<div>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div className='bg-primaryGray'>
				<main className='mx-auto'>
					<div
						className='flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat'
						style={{
							backgroundImage:
								"url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')",
						}}>
						<div className='rounded-xl bg-gray-800 bg-opacity-50 px-20 py-16 shadow-lg backdrop-blur-md max-sm:px-8'>
							<div className='text-white'>
								<div className='mb-8 flex flex-col items-center'>
									<NextImage
										src='/logo.svg'
										width='150'
										height='150'
										alt='logo'
									/>
									<h1 className='mb-2 text-2xl'>El asador de Richard</h1>
									<span className='text-gray-300'>
										Introducir datos de acceso
									</span>
								</div>
								<form action='#'>
									<div className='mb-4 text-lg'>
										<input
											className='rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md'
											type='text'
											name='name'
											placeholder='example@email.com'
										/>
									</div>
									<div className='mb-4 text-lg'>
										<input
											className='rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md'
											type='Password'
											name='name'
											placeholder='*********'
										/>
									</div>
									<div className='mt-8 flex justify-center text-lg text-black'>
										<button
											type='submit'
											className='rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600'>
											Login
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</main>
				<Alert />
			</div>
			<Footer />
		</div>
	);
};

export default Contacto;
