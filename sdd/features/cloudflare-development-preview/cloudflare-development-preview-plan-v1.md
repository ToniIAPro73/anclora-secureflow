# Cloudflare development preview — Plan v1

1. Record the existing Vercel production host and Cloudflare development-only preview in the runtime contract.
2. Configure Wrangler to publish Vite's `dist/` directory with SPA fallback and a dedicated development Worker name.
3. Add a GitHub Actions workflow triggered only by pushes to `development`.
4. Run the repository's existing lint, test, and build gates before deployment.
5. Validate local configuration without publishing. After Toni reviews and validates the changes, commit and push to `development` so the workflow can publish the preview.
6. Review the resulting `workers.dev` site. Leave Vercel production and DNS unchanged.
