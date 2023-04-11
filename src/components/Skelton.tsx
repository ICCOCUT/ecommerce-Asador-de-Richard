/* Este código define un componente funcional llamado `Skelton` que devuelve una interfaz de usuario de
carga de esqueleto. La interfaz de usuario consta de un contenedor con un fondo gris y esquinas
redondeadas, seguido de una cuadrícula de 16 elementos, cada uno con un fondo negro y esquinas
redondeadas. Cada elemento tiene un rectángulo gris con esquinas redondeadas en la parte superior,
seguido de dos rectángulos grises más pequeños con esquinas redondeadas debajo. Esta interfaz de
usuario se usa comúnmente para indicar que el contenido se está cargando o para proporcionar un
marcador de posición mientras se recupera el contenido. El componente se exporta como la exportación
predeterminada del módulo. */
const Skelton = () => {
	return (
		<>
			<div className='mt-12 h-8 w-40 rounded-lg bg-gray-200' />
			<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
				{Array(16)
					.fill(0)
					.map((_val, index) => (
						<div className='rounded-2xl bg-black/5 p-4' key={index}>
							<div className='h-60 rounded-lg bg-gray-200' />
							<div className='space-y-4 mt-6 mb-4'>
								<div className='h-3 w-3/5 rounded-lg bg-gray-200' />
								<div className='h-3 w-4/5 rounded-lg bg-gray-200' />
							</div>
						</div>
					))}
			</div>
		</>
	);
};

export default Skelton;
