/**
 * Cache configuration utilities for Cloudflare CDN
 * Following best practices for optimal caching
 */

export interface CacheConfig {
  cacheControl: string
  cacheTtl?: number
  cacheTtlByStatus?: Record<string, number>
}

/**
 * Get cache configuration based on file path and type
 */
export function getCacheConfig(url: URL): CacheConfig {
  const pathname = url.pathname
  const extension = pathname.split('.').pop()?.toLowerCase()

  // Static assets - long cache with immutable
  if (
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/_build/') ||
    extension === 'js' ||
    extension === 'css' ||
    extension === 'woff' ||
    extension === 'woff2' ||
    extension === 'ttf' ||
    extension === 'otf' ||
    extension === 'eot'
  ) {
    return {
      cacheControl: 'public, max-age=31536000, immutable',
      cacheTtl: 31_536_000 // 1 year
    }
  }

  // Images - long cache
  if (
    extension === 'png' ||
    extension === 'jpg' ||
    extension === 'jpeg' ||
    extension === 'gif' ||
    extension === 'webp' ||
    extension === 'svg' ||
    extension === 'ico' ||
    extension === 'avif'
  ) {
    return {
      cacheControl: 'public, max-age=31536000, immutable',
      cacheTtl: 31_536_000 // 1 year
    }
  }

  // Fonts - long cache
  if (extension === 'woff' || extension === 'woff2' || extension === 'ttf') {
    return {
      cacheControl: 'public, max-age=31536000, immutable',
      cacheTtl: 31_536_000 // 1 year
    }
  }

  // Manifest and robots.txt - moderate cache
  if (pathname === '/manifest.json' || pathname === '/robots.txt') {
    return {
      cacheControl: 'public, max-age=3600', // 1 hour
      cacheTtl: 3600
    }
  }

  // HTML pages - short cache with revalidation
  // This allows Cloudflare to cache but revalidate frequently
  if (extension === 'html' || !extension || pathname === '/') {
    return {
      cacheControl: 'public, max-age=3600, must-revalidate',
      cacheTtl: 3600, // 1 hour
      cacheTtlByStatus: {
        '200': 3600, // 1 hour for successful responses
        '404': 60, // 1 minute for 404s
        '500-599': 0 // Don't cache errors
      }
    }
  }

  // Default: moderate cache
  return {
    cacheControl: 'public, max-age=3600',
    cacheTtl: 3600
  }
}

/**
 * Apply cache headers to a Response
 */
export function applyCacheHeaders(
  response: Response,
  url: URL,
  options?: { cf?: RequestInitCfProperties }
): Response {
  const cacheConfig = getCacheConfig(url)

  // Clone response to modify headers
  const newResponse = new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  })

  // Set Cache-Control header
  newResponse.headers.set('Cache-Control', cacheConfig.cacheControl)

  // Set Cloudflare cache TTL via cf property
  if (options?.cf) {
    if (cacheConfig.cacheTtl) {
      options.cf.cacheTtl = cacheConfig.cacheTtl
    }
    if (cacheConfig.cacheTtlByStatus) {
      options.cf.cacheTtlByStatus = cacheConfig.cacheTtlByStatus
    }
    // Enable Cloudflare edge caching
    options.cf.cacheEverything = true
  }

  return newResponse
}
