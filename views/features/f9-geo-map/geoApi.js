export async function fetchGeoListings({ lat, lng, radius = 15, category = 'All', condition = 'All' }) {
  try {
    const params = new URLSearchParams({
      lat: lat.toString(),
      lng: lng.toString(),
      radius: radius.toString(),
      category,
      condition
    });
    const response = await fetch(`/api/geo/listings?${params.toString()}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch geo listings.');
    }
    return data;
  } catch (error) {
    console.error('[GeoApi] fetchGeoListings error:', error);
    throw error;
  }
}

export async function fetchAllProductLocations() {
  try {
    const response = await fetch('/api/geo/product-locations');
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch product locations.');
    }
    return data;
  } catch (error) {
    console.error('[GeoApi] fetchAllProductLocations error:', error);
    throw error;
  }
}
