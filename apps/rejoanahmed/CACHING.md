# CDN Caching Strategy

This project implements optimal CDN caching for Cloudflare Workers following best practices.

## Cache Configuration

### Static Assets (1 year cache)
- JavaScript files (`.js`)
- CSS files (`.css`)
- Images (`.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`, `.ico`, `.avif`)
- Fonts (`.woff`, `.woff2`, `.ttf`, `.otf`)
- Build assets in `/assets/` and `/_build/` directories

**Cache Headers:**
```
Cache-Control: public, max-age=31536000, immutable
```

### HTML Pages with ISR (Incremental Static Regeneration)
- Blog posts: 1 hour cache, stale-while-revalidate for 7 days
- Blog index: 1 hour cache, stale-while-revalidate for 24 hours
- Other pages: 1 hour cache with revalidation

**ISR Cache Headers (Blog Posts):**
```
Cache-Control: public, max-age=3600, s-maxage=3600, stale-while-revalidate=604800
CDN-Cache-Control: max-age=3600, stale-while-revalidate=604800
```

**Understanding ISR:**
- `max-age=3600`: Content is fresh for 1 hour
- `s-maxage=3600`: Overrides max-age for shared caches (CDNs)
- `stale-while-revalidate=604800`: Serve stale content while revalidating in background for up to 7 days
- This means users get instant responses from cache, while fresh content is generated in the background

### Manifest Files (1 hour cache)
- `/manifest.json`
- `/robots.txt`
- `/site.webmanifest`

**Cache Headers:**
```
Cache-Control: public, max-age=3600
```

## Implementation

### 1. TanStack Start Static Assets
TanStack Start automatically handles static assets when deployed to Cloudflare Workers. The framework bundles and serves static assets (JS, CSS, images) with proper cache headers. No manual configuration is needed in `wrangler.jsonc` - the basic configuration with `main: "@tanstack/react-start/server-entry"` is sufficient.

Reference: [TanStack Start on Cloudflare Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/tanstack-start/)

### 2. Cache Headers for Dynamic Content
For programmatic cache control, use the cache utilities in `src/lib/cache.ts` and `src/lib/cloudflare-cache.ts`. These can be used in route handlers or server functions to set appropriate cache headers.

### 3. Incremental Static Regeneration (ISR)
TanStack Start supports ISR through cache headers, allowing you to serve statically generated content from CDN while periodically regenerating it in the background.

**Blog Routes with ISR:**
- Blog posts: Cached for 1 hour, stale-while-revalidate for 7 days
- Blog index: Cached for 1 hour, stale-while-revalidate for 24 hours

This is implemented using the `headers` property in route definitions. See `src/routes/blog/$slug.tsx` for an example.

Reference: [TanStack Start ISR Documentation](https://tanstack.com/start/latest/docs/framework/react/guide/isr)

### 4. Static Prerendering (Optional)
Combine ISR with static prerendering for optimal performance. Configure in `vite.config.ts`:

```ts
tanstackStart({
  prerender: {
    routes: ['/blog', '/blog/*'],
    crawlLinks: true,
  },
})
```

This prerenders blog pages at build time for instant first load, then uses ISR for updates.

Reference: [Combining ISR with Static Prerendering](https://tanstack.com/start/latest/docs/framework/react/guide/isr#5-combine-with-static-prerendering)

**Important**: Since you're using Cloudflare Workers (not Pages), cache headers for static assets are automatically handled by TanStack Start. The cache utilities in `src/lib/cache.ts` and `src/lib/cloudflare-cache.ts` are available if you need programmatic cache control for dynamic routes or API responses.

## Best Practices

1. **Version your assets**: Use content hashes in filenames (e.g., `main-abc123.js`) to enable long-term caching
2. **Cache busting**: Vite automatically adds hashes to asset filenames during build
3. **ETags**: Automatically generated for better cache validation
4. **Vary header**: Set to `Accept-Encoding` for proper compression handling

## Cloudflare Dashboard Settings

For optimal performance, also configure in Cloudflare Dashboard:

1. **Caching → Configuration**:
   - Browser Cache TTL: 4 hours (for HTML)
   - Edge Cache TTL: Respect origin headers

2. **Caching → Cache Rules**:
   - Create rules for specific paths if needed
   - Bypass cache for authenticated routes

3. **Speed → Optimization**:
   - Enable Auto Minify
   - Enable Brotli compression

## Monitoring

Monitor cache performance via:
- Cloudflare Analytics → Caching tab
- Check cache hit ratio (aim for >90% for static assets)
- Review cache status headers in browser DevTools

## Cache Invalidation

To purge cache:
1. **Automatic**: New deployments automatically invalidate changed assets (via content hashes)
2. **Manual**: Use Cloudflare Dashboard → Caching → Purge Cache
3. **API**: Use Cloudflare API to purge specific URLs or tags
