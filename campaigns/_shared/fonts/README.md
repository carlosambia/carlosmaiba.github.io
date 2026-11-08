# Shared fonts

Self-hosted so renders never depend on a font CDN (and so licensed, non-Google brand
fonts work the same way). Reference them from a brand's `fonts.files` in `brand.json`.

| File | Family | Weight | Licence |
|---|---|---|---|
| `poppins-latin-500/600/700/800.woff2` | Poppins | 500-800 | SIL Open Font License 1.1 |
| `dm-sans-latin-var.woff2` | DM Sans (variable) | 100-1000 | SIL Open Font License 1.1 |
| `oswald-latin-var.woff2` | Oswald (variable) | 200-700 | SIL Open Font License 1.1 |

To add a font: drop the `.woff2` here (or in `campaigns/<client>/assets/fonts/` for a
client-licensed typeface) and list it in that brand's `fonts.files`.
