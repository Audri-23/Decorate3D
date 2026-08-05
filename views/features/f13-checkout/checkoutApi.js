export async function createPaymentIntentApi(paymentData) {
  try {
    const response = await fetch('/api/stripe/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to initialize Stripe Payment Intent.');
    }

    return data;
  } catch (error) {
    console.error('API Error in createPaymentIntentApi:', error);
    throw error;
  }
}
