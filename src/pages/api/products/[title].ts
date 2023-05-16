import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { prisma } from '../../../lib/prisma';
import { TApiErrorResp, TApiSingleProductResp } from '../../../types';

/**
 * Esta es una función de TypeScript que recupera un solo producto de una base de datos en función de
 * su título y lo devuelve como una respuesta JSON, o devuelve un mensaje de error si no se encuentra
 * el producto o si se produce un error.
 * @param {NextApiRequest} req - NextApiRequest: este es el objeto de solicitud que contiene
 * información sobre la solicitud HTTP entrante.
 * @param res - El parámetro `res` es el objeto de respuesta que se devolverá al cliente. Es de tipo
 * `NextApiResponse<TApiSingleProductResp | TApiErrorResp>`, lo que significa que puede devolver una
 * respuesta exitosa con un objeto `TApiSingleProductResp` o una respuesta de error
 * @returns Esta función devuelve un solo producto con el título dado de la base de datos, si existe,
 * junto con su título, descripción, precio, cantidad e imagen. Si no se encuentra el producto,
 * devuelve un mensaje de error 404. Si hay algún otro error, devuelve un mensaje de error 500.
 */
const getSingleProduct = async (
	req: NextApiRequest,
	res: NextApiResponse<TApiSingleProductResp | TApiErrorResp>,
) => {
	try {
		const title = req.query.title as string;
		const product = await prisma.product.findUnique({
			where: {
				title,
			},
			select: {
				title: true,
				description: true,
				price: true,
				quantity: true,
				image: true,
			},
		});
		if (!product) {
			return res.status(404).json({ message: `Product not found` });
		}
		return res.status(200).json({ product });
	} catch (error) {
		return res.status(500).json({
			message: 'Something went wrong!! Please try again after sometime',
		});
	}
};

const handler = nc({ attachParams: true }).get(getSingleProduct);

export default handler;
