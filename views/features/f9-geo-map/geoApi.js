/**
 * Geo Map Finder API Helper
 * Assigned to: Injamamul Haque Fahim
 * Connects the React frontend to the /api/geo backend endpoints.
 */

/**
 * Fetch all listings within a buyer's search radius.
 * @param {number} lat - Buyer's GPS latitude
 * @param {number} lng - Buyer's GPS longitude
 * @param {number} radius - Search radius in kilometres
 * @param {string} category - Optional category filter ('All' = no filter)
 * @param {string} condition - Optional condition filter ('All' = no filter)
 * @returns {Promise<Object>} API response with geo-enriched listings
 */
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

/**
 * Fetch all product seller pin locations (full map overview — no radius filter).
 * @returns {Promise<Object>} API response with all product location pins
 */
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
