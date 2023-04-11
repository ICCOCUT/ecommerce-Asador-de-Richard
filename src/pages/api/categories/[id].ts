import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '../../../lib/prisma';
import {
	TApiErrorResp,
	TApiSingleCategoryWithProductResp,
} from '../../../types';

/**
 * Esta es una función asíncrona que recupera una sola categoría con sus productos de una base de datos
 * y la devuelve como una respuesta JSON, con un cursor opcional para la paginación.
 * @param {NextApiRequest} req - El objeto NextApiRequest, que representa la solicitud HTTP entrante.
 * Contiene información sobre la solicitud, como la URL, los encabezados y los parámetros de consulta.
 * @param res - El parámetro `res` es el objeto de respuesta que se enviará de vuelta al cliente que
 * realiza la solicitud de API. Es de tipo `NextApiResponse<TApiSingleCategoryWithProductResp |
 * TApiErrorResp>`, lo que significa que puede devolver una respuesta exitosa con datos de tipo
 * `TApiSingle
 * @returns Esta función devuelve una sola categoría con sus productos e información de paginación (si
 * corresponde) en respuesta a una solicitud GET. La respuesta es una respuesta de éxito con los datos
 * de la categoría o una respuesta de error con un mensaje de error.
 */
const getSingleCategory = async (
	req: NextApiRequest,
	res: NextApiResponse<TApiSingleCategoryWithProductResp | TApiErrorResp>,
) => {
	try {
		const id = req.query.id as string;
		const cursorId = req.query.cursorId;
		if (cursorId) {
			const categoriesData = await prisma.category.findUnique({
				where: {
					id,
				},
				select: {
					id: true,
					name: true,
					products: {
						orderBy: {
							createdAt: 'desc',
						},
						take: 12,
						skip: 1,
						cursor: {
							id: cursorId as string,
						},
						select: {
							id: true,
							title: true,
							description: true,
							image: true,
							price: true,
							quantity: true,
						},
					},
				},
			});

			if (!categoriesData) {
				return res.status(404).json({ message: 'Category not found' });
			}

			let hasMore = true;
			if (categoriesData.products.length === 0) {
				hasMore = false;
			}

			return res.status(200).json({ category: { ...categoriesData, hasMore } });
		}

		const categoriesData = await prisma.category.findUnique({
			where: {
				id,
			},
			select: {
				id: true,
				name: true,
				products: {
					orderBy: {
						createdAt: 'desc',
					},
					take: 12,
					select: {
						id: true,
						title: true,
						description: true,
						image: true,
						price: true,
						quantity: true,
					},
				},
			},
		});
		if (!categoriesData) {
			return res.status(404).json({ message: 'Category not found' });
		}

		let hasMore = true;
		if (categoriesData.products.length === 0) {
			hasMore = false;
		}

		return res.status(200).json({ category: { ...categoriesData, hasMore } });
	} catch (error) {
		return res.status(500).json({
			message: 'Something went wrong!! Please try again after sometime',
		});
	}
};

const handler = nc({ attachParams: true }).get(getSingleCategory);

export default handler;
