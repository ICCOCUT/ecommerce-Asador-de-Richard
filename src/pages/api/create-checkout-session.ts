import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import currency from 'currency.js';
import { stripeServerSide } from '../../lib/stripe';
import { TApiErrorResp } from '../../types';

/**
 * La función crea una sesión de pago de Stripe para un producto y devuelve el ID de la sesión.
 * @param {NextApiRequest} req - El objeto NextApiRequest, que representa la solicitud HTTP entrante.
 * Contiene información sobre la solicitud, como los encabezados, el cuerpo y los parámetros de
 * consulta.
 * @param res - El parámetro `res` es el objeto de respuesta que se devolverá al cliente que realiza la
 * solicitud. Es del tipo `NextApiResponse`, que es una interfaz integrada de Next.js para manejar
 * respuestas HTTP.
 * @returns un objeto JSON con una única propiedad "id" que contiene el ID de la sesión de pago creada.
 * Si hay un error, la función devuelve un objeto JSON con una propiedad de "mensaje" que contiene un
 * mensaje de error.
 */
const checkoutSession = async (
	req: NextApiRequest,
	res: NextApiResponse<any | TApiErrorResp>,
) => {
	try {
		const hostUrl = req.headers.origin;
		const refererUrl = req.headers.referer;
		const requestBody = JSON.parse(req.body);
		const formattedPrice = currency(requestBody.price, {
			precision: 2,
			symbol: '',
		}).multiply(100);
		const session = await stripeServerSide.checkout.sessions.create({
			mode: 'payment',
			payment_method_types: ['card'],
			line_items: [
				{
					price_data: {
						currency: 'mex',
						product_data: {
							name: requestBody?.title,
							images: [requestBody.image],
							description: requestBody?.description,
						},
						unit_amount_decimal: formattedPrice.toString(),
					},
					quantity: 1,
				},
			],
			success_url: `${hostUrl}/thank-you`,
			cancel_url: `${refererUrl}?status=cancel`,
		});
		return res.status(200).json({ id: session.id });
	} catch (error) {
		return res.status(500).json({
			message: 'Oops! Something went wrong. Please try again later.',
		});
	}
};

/* `const handler = nc({ addedParams: true }).post(checkoutSession);` está creando un controlador de
ruta API Next.js usando la biblioteca `next-connect`. Adjunta la opción `attachParams` al
controlador, lo que le permite acceder a los parámetros de la solicitud. Luego establece el método
HTTP en `POST` y especifica la función `checkoutSession` como el controlador de la ruta. Finalmente,
exporta el controlador como la exportación predeterminada del módulo. */
const handler = nc({ attachParams: true }).post(checkoutSession);

export default handler;
