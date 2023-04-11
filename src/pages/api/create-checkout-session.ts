import currency from 'currency.js';
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { stripeServerSide } from '../../lib/stripe';
import { TApiErrorResp } from '../../types';

/**
 * Esta función crea una sesión de pago de Stripe para un producto y devuelve la identificación de la
 * sesión.
 * @param {NextApiRequest} req - El objeto NextApiRequest, que representa la solicitud HTTP entrante.
 * Contiene información sobre la solicitud, como encabezados, parámetros de consulta y cuerpo de la
 * solicitud.
 * @param res - El parámetro `res` es el objeto de respuesta que se devolverá al cliente que realiza la
 * solicitud. Es del tipo `NextApiResponse`, que es una interfaz integrada de Next.js para manejar
 * respuestas HTTP.
 * @returns Esta función devuelve una respuesta JSON con un ID de sesión si la creación de la sesión se
 * realiza correctamente o una respuesta JSON con un mensaje de error si hay un error.
 */
const checkoutSession = async (
	req: NextApiRequest,
	res: NextApiResponse<any | TApiErrorResp>,
) => {
	try {
		const host = req.headers.origin;
		const referer = req.headers.referer;
		const body = JSON.parse(req.body);
		const formatedPrice = currency(body.price, {
			precision: 2,
			symbol: '',
		}).multiply(100);
		const session = await stripeServerSide.checkout.sessions.create({
			mode: 'payment',
			payment_method_types: ['card'],
			line_items: [
				{
					price_data: {
						currency: 'usd',
						product_data: {
							name: body?.title,
							images: [body.image],
							description: body?.description,
						},
						unit_amount_decimal: formatedPrice.toString(),
					},
					quantity: 1,
				},
			],
			success_url: `${host}/thank-you`,
			cancel_url: `${referer}?status=cancel`,
		});
		return res.status(200).json({ id: session.id });
	} catch (error) {
		return res.status(500).json({
			message: 'Something went wrong!! Please try again after sometime',
		});
	}
};

const handler = nc({ attachParams: true }).post(checkoutSession);

export default handler;
