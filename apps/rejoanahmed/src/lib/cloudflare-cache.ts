/**
 * Cloudflare-specific cache middleware
 * Adds cache headers and Cloudflare cache configuration to responses
 */

import { getCacheConfig } from './cache'

/**
 * Wrap a fetch handler to add cache headers
 * Use this in your Cloudflare Worker to add optimal caching
 */
export function withCache(
  handler: (request: Request) => Promise<Response>
): (request: Request) => Promise<Response> {
  return async (request: Request) => {
    const url = new URL(request.url)
    const response = await handler(request)

    // Skip cache for non-GET requests
    if (request.method !== 'GET') {
      return response
    }

    const cacheConfig = getCacheConfig(url)

    // Clone response to modify headers
    const newResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: new Headers(response.headers)
    })

    // Set Cache-Control header
    newResponse.headers.set('Cache-Control', cacheConfig.cacheControl)

    // Add ETag if not present (for better cache validation)
    if (!newResponse.headers.has('ETag') && cacheConfig.cacheTtl) {
      // Generate a simple ETag based on content hash or use timestamp
      const etag = `"${Date.now()}-${url.pathname}"`
      newResponse.headers.set('ETag', etag)
    }

    // Set Vary header for proper cache key generation
    if (!newResponse.headers.has('Vary')) {
      newResponse.headers.set('Vary', 'Accept-Encoding')
    }

    return newResponse
  }
}

/**
 * Get Cloudflare cache configuration for a request
 * Use this in your fetch calls with the `cf` property
 */
export function getCloudflareCacheConfig(url: URL): RequestInitCfProperties {
  const cacheConfig = getCacheConfig(url)

  const cf: RequestInitCfProperties = {
    cacheEverything: true
  }

  if (cacheConfig.cacheTtl) {
    cf.cacheTtl = cacheConfig.cacheTtl
  }

  if (cacheConfig.cacheTtlByStatus) {
    cf.cacheTtlByStatus = cacheConfig.cacheTtlByStatus
  }

  return cf
}
