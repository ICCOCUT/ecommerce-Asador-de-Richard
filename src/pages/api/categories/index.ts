import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '../../../lib/prisma';
import { TApiAllCategoriesResp, TApiErrorResp } from '../../../types';

/**
 * Esta función recupera todas las categorías y sus productos asociados de una base de datos utilizando
 * Prisma ORM y los devuelve como una respuesta JSON.
 * @param {NextApiRequest} request - El parámetro `request` es del tipo NextApiRequest, que es una interfaz
 * para las solicitudes HTTP entrantes en las rutas API de Next.js. Contiene información sobre la
 * solicitud, como el método HTTP, los encabezados y los parámetros de consulta.
 * @param {NextApiResponse} response - El parámetro `response` es el objeto de respuesta que se devolverá al cliente.
 * Es de tipo NextApiResponse<TApiAllCategoriesResp | TApiErrorResp>, lo que significa que puede devolver una
 * respuesta exitosa con la forma de `TApiAllCategoriesResp` o un error
 * @returns Esta función devuelve una respuesta JSON con una matriz de categorías y sus productos
 * asociados, o un mensaje de error si algo sale mal.
 */
const getCategories = async (
	request: NextApiRequest,
	response: NextApiResponse<TApiAllCategoriesResp | TApiErrorResp>,
) => {
	try {
		const categories = await prisma.category.findMany({
			select: {
				id: true,
				name: true,
				products: {
					orderBy: {
						createdAt: 'desc',
					},
					take: 8,
					select: {
						title: true,
						description: true,
						image: true,
						price: true,
					},
				},
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
		return response.status(200).json({ categories });
	} catch (error) {
		return response.status(500).json({
			message: 'Something went wrong!! Please try again after sometime',
		});
	}
};

const handler = nc({ attachParams: true }).get(getCategories);

export default handler;
