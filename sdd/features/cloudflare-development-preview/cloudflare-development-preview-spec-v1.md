# Cloudflare development preview — Specification v1

**Status:** Draft — local review pending  
**Date:** 2026-10-25  
**Repository:** `anclora-secureflow`

## Objective

Add a Cloudflare Workers Static Assets preview for SecureFlow while retaining its current Vercel production hosting.

## Scope

- Build the existing Vite application and publish `dist/` to a dedicated Cloudflare Worker from `development` only.
- Use the Worker `workers.dev` hostname and SPA fallback.
- Use the existing Cloudflare GitHub Actions credential names: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
- Keep `staging`, `production`, `main`, Vercel configuration, domains, and DNS outside this pilot.

## Acceptance criteria

1. Only a successful push to `development` can deploy the Cloudflare preview.
2. The Worker serves `dist/` and supports SPA fallback.
3. The Worker has the distinct name `anclora-secureflow-development` and uses `workers.dev` without a custom domain.
4. Vercel remains the production host; no DNS or application behavior changes are made.
5. No database, storage, API, authentication, or secret is introduced. The access form remains non-persistent and does not send user data.
6. The workflow runs this repository's existing lint, test, and build gates.

## Out of scope

- Moving or changing production hosting.
- Custom domains, DNS changes, or Cloudflare production environments.
- Enabling submission or persistence for the access form.

## Risks

- The preview is public on `workers.dev`; its current form is non-persistent and the site contains no user data.
- Cloudflare GitHub credentials may not be configured for this repository; deployment must fail if they are unavailable.
