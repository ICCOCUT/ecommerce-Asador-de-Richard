import Contactos from './Contacto/Contactos';

function Contact() {
	return (
		<div className='container  px-6 mx-auto'>
			<section className='text-gray-800'>
				<div className='relative overflow-hidden' style={{ height: '600px' }}>
					<iframe
						className='w-full h-full'
						title='Google Maps'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.95275300906!2d-103.23875028507466!3d20.589986986237644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b56d8cc4c519%3A0xcdb831beae44e9d4!2sEl%20asador%20de%20Richard!5e0!3m2!1ses-419!2smx!4v1682278703454!5m2!1ses-419!2smx
        '
						style={{ border: '0' }}
						allowFullScreen></iframe>
				</div>
				<div className='container text-gray-800 px-4 md:px-12'>
					<div
						className='block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6'
						style={{
							marginTop: '-100px',
							background: 'hsla(0, 0%, 100%, 0.8)',
							backdropFilter: 'blur(30px)',
						}}>
						<div className='flex flex-wrap'>
							<div className='grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0'>
								<form>
									<div className='form-group mb-6'>
										<input
											type='text'
											className='form-control block
												w-full
												px-3
												py-1.5
												text-base
												font-normal
												text-gray-700
												bg-white bg-clip-padding
												border border-solid border-gray-300
												rounded
												transition
												ease-in-out
												m-0
												focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
											id='exampleInput7'
											placeholder='Nombre completo'
										/>
									</div>
									<div className='form-group mb-6'>
										<input
											type='email'
											className='form-control block
												w-full
												px-3
												py-1.5
												text-base
												font-normal
												text-gray-700
												bg-white bg-clip-padding
												border border-solid border-gray-300
												rounded
												transition
												ease-in-out
												m-0
												focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
											id='exampleInput8'
											placeholder='Dirección de correo electrónico'
											required
										/>
									</div>
									<div className='form-group mb-6'>
										<textarea
											className='
											form-control
											block
											w-full
											px-3
											py-1.5
											text-base
											font-normal
											text-gray-700
											bg-white bg-clip-padding
											border border-solid border-gray-300
											rounded
											transition
											ease-in-out
											m-0
											focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
										'
											id='exampleFormControlTextarea13'
											rows={5}
											placeholder='Mensaje'></textarea>
									</div>
									<div className='form-group form-check text-center mb-6'>
										<input
											type='checkbox'
											className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer'
											id='exampleCheck87'
										/>
										<label
											className='form-check-label inline-block text-gray-800'
											htmlFor='exampleCheck87'>
											Mandarme una copia de este mensaje
										</label>
									</div>
									<button
										type='submit'
										className='
										w-full
										px-6
										py-2.5
										bg-blue-600
										text-white
										font-medium
										rounded-md
										hover:bg-blue-700
										focus:outline-none
										focus:ring-2
										focus:ring-blue-500
										focus:ring-offset-2
										transition
										duration-200
										ease-in-out
										mb-4
										md:mb-0
										md:w-auto
									'>
										Enviar mensaje
									</button>
								</form>
							</div>
							<div className='grow-0 shrink-0 basis-auto w-full xl:w-7/12'>
								<Contactos />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;
