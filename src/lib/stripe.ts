import Stripe from 'stripe';

const stripeSecretKey: string = process.env.STRIPE_SECRET_KEY!; // Eliminar el símbolo "?" si la variable no puede ser nula o indefinida
const stripeServerSide = new Stripe(stripeSecretKey, {
	apiVersion: '2022-11-15', // Corregir la opción apiVersion
});

export { stripeServerSide };
