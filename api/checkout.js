const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports =  async(req, res) => {
  const { price_id, slug } = req.body;
  url = `https://${process.env.VERCEL_URL}`
  if (process.env.BASE_URL){
  url = `https://${process.env.BASE_URL}`
  }

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: price_id,
        quantity: 1
      }
    ],
    mode: 'payment',
    allow_promotion_codes: true,
    billing_address_collection: 'auto',
    shipping_rates: [process.env.STRIPE_SHIPPING_RATE],
    shipping_address_collection: {
      allowed_countries: [
        "AU", "BE", "CA", "ES", "HR", "DK", "FI", "FR", "DE", "IE",
        "JP", "MX", "NO", "SE", "GB", "US",
      ]
    },
    payment_method_types: ['card'],
    cancel_url: `${url}${slug}`,
    success_url: `${url}${slug}?session_id={CHECKOUT_SESSION_ID}`,
  });


  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  console.log(session);
  res.end(JSON.stringify({
    sessionId: session.id,
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  }))
};
