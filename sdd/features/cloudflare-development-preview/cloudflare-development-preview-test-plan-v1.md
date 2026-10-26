# Cloudflare development preview — Test Plan v1

## Configuration checks

- Parse `wrangler.jsonc` and the GitHub Actions workflow.
- Confirm Wrangler points to `dist/`, enables SPA fallback, and names only the development Worker.
- Confirm the workflow deploy job is limited to `refs/heads/development` and receives Cloudflare credentials only in the deploy step.

## Application gates

- `npm run lint`
- `npm test`
- `npm run build`

## Deployment checks (after Toni validates and pushes)

- Confirm the workflow succeeds on the exact `development` commit.
- Open the resulting `workers.dev` URL and verify the landing page and static assets load.
- Verify the Vercel production site remains unchanged.
- Do not submit the access form or create external records; the form is intentionally non-persistent.
