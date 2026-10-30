PROMOTION_REPORT=SINGLE_SUMMARY_AT_END
PROMOTION_PARALLEL_ACROSS_REPOS=true
PROMOTION_MULTI_REPO_SCOPE_ALLOWED=true
PROMOTION_USER_VERIFIES_EACH_BRANCH=true
PROMOTION_AGENT_PER_HOP_VERIFICATION=false
PROMOTION_AGENT_POLLS_CI_OR_DEPLOYMENT=false
PROMOTION_DISPATCH_FULL_CHAIN_ONCE=true
PROMOTION_DISPATCH_IMMEDIATELY=true
PROMOTION_AGENT_WAITS_FOR_SOURCE_CI=false
PROMOTION_WAIT_FOR_WORKFLOW_COMPLETION=false
PROMOTION_STOP_ON_GATE_FAILURE=true
PROMOTION_REQUIRES_PRE_STEP_GATES=true
PROMOTION_AUTHORIZATION_TOKEN=PROMOTE=FULL
PROMOTION_MECHANISM=.github/workflows/promote.yml
PROMOTION_FLOW=development->staging->production->main
PROMOTION_SUPPORTED=true
SECRET_COMMIT_FORBIDDEN=true
SECRET_OUTPUT_FORBIDDEN=true
PROMOTION_FORCE_PUSH_ALLOWED=false
PROMOTION_AUTHORIZATION_CLEAR_ON_UNAUTHORIZED_PROMPT=false
PROMOTION_AUTHORIZATION_CLEAR_ON_NEW_SESSION=true
PROMOTION_AUTHORIZATION_SCOPE=CURRENT_TASK_OR_CONVERSATION
AUTO_PROMOTE=false
TEST_EXECUTION_POLICY=BATCHED
STOP_WHEN_SUFFICIENT_EVIDENCE=true
CAVEMAN_GRANULARITY=TASK
CAVEMAN_MODE_DEFAULT=AUTO
TOKEN_ECONOMY_POLICY=ADAPTIVE
QA_MODE_DEFAULT=AUTO
AUTO_PUSH_WORK_BRANCH=false
AUTO_COMMIT_AFTER_VALIDATION=false
COMMIT_PUSH_REQUIRES_EXPLICIT_USER_VALIDATION=true
DEVELOPMENT_VALIDATION_REQUIRED=true
STOP_AFTER_DEVELOPMENT_PUSH=true
PUSH_TARGET=origin/development
FEATURE_BRANCHES=DISALLOWED
DEFAULT_BRANCH=development
WORKING_BRANCH=development
ANCLORA_FLOW_CONTRACT_VERSION=2.0
ANCLORA_FLOW_VERSION=1
# Canonical user review and release protocol — workspace policy v2.2
CHANGES_REMAIN_UNCOMMITTED_UNTIL_VALIDATED=true
AUTO_PUSH_DEVELOPMENT=false
PROMOTION_PROTOCOL=Local changes -> explicit Toni validation in development -> commit/push development -> Toni Preview review -> PROMOTE=FULL + exact reviewed SHA -> one asynchronous full-chain workflow

Toni validates every change in the development environment before the agent commits or pushes it. After the push, the agent waits for Toni to review Preview. Only Toni's exact PROMOTE=FULL token authorizes the complete ordered staging -> production -> main chain, using the exact SHA reviewed in Preview. The agent dispatches one full-chain workflow per repository, does not wait for or poll CI/deployment/workflow completion, and does not verify individual target branches. That workflow rejects failed source status and branch divergence, permits pending checks, validates all target branches before writing, and updates all three refs sequentially with fast-forward pushes, and stops if development moved after Preview review. Toni reviews the resulting environments.

# Anclora SecureFlow — runtime y Git

## Contrato operativo

```text
PROJECT_ID=anclora-secureflow
APPLICATION_TYPE=frontend
PRODUCTION_HOSTING_PROVIDER=Cloudflare Workers Static Assets
PRODUCTION_DOMAIN=secureflow.anclora.com
PRODUCTION_CUTOVER_STATUS=PENDING_PROMOTION_AND_DEPLOYMENT
VERCEL_GIT_DEPLOYMENTS=DISABLED
VERCEL_PROJECT_PAUSE=AFTER_CLOUDFLARE_CUTOVER_VERIFICATION
DEVELOPMENT_PREVIEW_PROVIDER=Cloudflare Workers Static Assets
DEVELOPMENT_PREVIEW_STATUS=PUBLISHED_HTTP_200
DEVELOPMENT_PREVIEW_BRANCH=development
DEVELOPMENT_PREVIEW_WORKER=anclora-secureflow-development
PRODUCTION_WORKER=anclora-secureflow
PRODUCTION_WORKER_BRANCH=production
PRODUCTION_WORKER_HOST=secureflow.anclora.com
PRODUCTION_DNS_CHANGE=REPLACE existing Vercel CNAME with Cloudflare Worker Custom Domain
RUNTIME_KIND=STATIC_FRONTEND
LOCAL_RUNTIME_MODEL=STATIC_NO_DATABASE
PRODUCTION_BACKEND_REQUIRED=false
PRODUCTION_MIGRATIONS_ALLOWED=false
MIGRATION_CONFIRMATION_REQUIRED=false
SECRETS_REQUIRED_FOR_LOCAL_RUNTIME=false
QA_AUTH_MODEL=NOT_APPLICABLE
QA_DELETE_AFTER_TEST=NOT_APPLICABLE
VISUAL_QA_CAPABILITY_REQUIRED=true
VISUAL_QA_EXECUTION=BY_QA_MODE
GIT_WORKFLOW_MODEL=FULL_PROMOTION
WORK_BRANCH=development
EXPLICIT_PROMOTION_ALLOWED=true
PROMOTION_ORDER=development->staging->production->main
PROMOTION_OLD_AUTHORIZATION_PERSISTS=false
```

> [!NOTE]
> Actualizado 2026-09-26: el repo se bootstrapeó con todo el trabajo real en una rama
> llamada `anclora-secureflow` en lugar de `development`, y `main` solo tenía el commit
> inicial vacío. Se crearon `development`, `staging` y `production` a partir de esa rama
> (mismo commit en las tres) y se adoptó el modelo `FULL_PROMOTION` explícitamente pedido
> por Toni. La rama `anclora-secureflow` queda obsoleta y se elimina tras verificar que
> `development` contiene el mismo contenido.

La producción se está trasladando a Cloudflare Workers Static Assets. El Worker
`anclora-secureflow` servirá `secureflow.anclora.com`; el preview de desarrollo usa el Worker
`anclora-secureflow-development` en `workers.dev`. El CNAME que hoy apunta a Vercel debe retirarse
antes de crear el Custom Domain de Cloudflare. Vercel Git deployments quedarán desactivados y el
proyecto Vercel se pausará después de verificar el corte en Cloudflare.

## Runtime local

El runtime local está completamente contenido en Vite. No crea bases de datos, no ejecuta
migraciones y no necesita credenciales. La capa de solicitudes de acceso es una frontera
de servicio deliberadamente no persistente: cualquier integración futura deberá definirse
mediante un contrato separado y una revisión de seguridad.

```bash
npm ci
npm run dev
```

## CI y publicación

GitHub Actions ejecuta lint, tests y build con Node 20. La publicación o promoción queda
fuera del CI de calidad y requiere una acción explícita del mantenedor. El agente debe
detenerse después de dejar el commit y el push solicitado; no debe autopromocionar.

## Variables y secretos

No se requieren variables de entorno para el comportamiento actual. Los ficheros `.env*`,
tokens, credenciales y certificados están excluidos por `.gitignore` y nunca deben entrar
en commits, capturas ni documentación pública.

<!-- ANCLORA-AOS-RUNTIME:START -->
## 0. Runtime Semantics (generated from declared facts; UNKNOWN = not verifiable)

```text
SOURCE_BRANCH=development
EXECUTION_LOCATION=LOCAL
PREVIEW_REQUIRED=false
DOCKER_ROLE=NOT_USED
```
<!-- ANCLORA-AOS-RUNTIME:END -->

<!-- ANCLORA-AOS:START -->
ANCLORA_AOS_AUTHORITY=anclora-governance
Canonical rules: [AOS Adoption Standard](../../anclora-governance/standards/AOS_ADOPTION_STANDARD.md). Repository-specific facts remain in this repository's `.anclora/` contracts.
<!-- ANCLORA-AOS:END -->
