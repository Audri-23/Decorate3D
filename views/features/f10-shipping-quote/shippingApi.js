export async function fetchShippingQuote({ buyerLat, buyerLng, productId }) {
  try {
    const response = await fetch('/api/geo/shipping-quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ buyerLat, buyerLng, productId })
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch shipping quote.');
    }
    return data;
  } catch (error) {
    console.error('[ShippingApi] fetchShippingQuote error:', error);
    throw error;
  }
}
