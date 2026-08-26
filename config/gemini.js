let currentKeyIndex = 0;

/**
 * Returns the next Gemini API Key from the configured pool (comma-separated keys in .env)
 * for load-balancing / rotating to bypass free tier rate limits.
 */
export function getGeminiApiKey() {
  const rawKeys = process.env.GEMINI_API_KEY;
  if (!rawKeys) {
    return '';
  }

  // Split by comma in case multiple keys are configured
  const keys = rawKeys
    .split(',')
    .map(key => key.trim())
    .filter(Boolean);

  if (keys.length === 0) {
    return '';
  }

  // Round-robin selection
  const selectedKey = keys[currentKeyIndex % keys.length];
  currentKeyIndex = (currentKeyIndex + 1) % keys.length;
  return selectedKey;
}
