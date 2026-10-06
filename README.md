# Pleasure Plug

Next.js storefront for Pleasure Plug. All orders go to WhatsApp (+234 703 524 9441).

```bash
npm run dev     # http://localhost:3000
npm run build && npm run start
```

## Where to edit things

| What | File |
| --- | --- |
| WhatsApp number, delivery cities | `src/lib/site.ts` |
| Products, prices, descriptions, categories (incl. BDSM Kits) | `src/lib/products.ts` |
| Daily themes (Magic & Money Mondays, etc.) | `src/lib/schedule.ts` |
| Real Talk articles | `src/lib/journal.ts` |
| FAQ (delivery, payment, returns) | `src/components/Faq.tsx` |
| How to Order / About pages | `src/app/how-to-order/page.tsx`, `src/app/about/page.tsx` |

### Product photos

Current photos are free stock photos from Pexels (credited on `/credits`). To swap in your own,
put the file in `public/products/` with a **new filename**, set `image` on the product in
`src/lib/products.ts`, and delete its `photo` line. (Reusing an old filename can show a cached version.)
