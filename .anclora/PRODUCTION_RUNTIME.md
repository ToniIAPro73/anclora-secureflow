PROMOTION_MECHANISM=NONE
PROMOTION_FLOW=NOT_CONFIGURED
PROMOTION_SUPPORTED=false
SECRET_COMMIT_FORBIDDEN=true
SECRET_OUTPUT_FORBIDDEN=true
PROMOTION_FORCE_PUSH_ALLOWED=false
PROMOTION_AUTHORIZATION_CLEAR_ON_UNAUTHORIZED_PROMPT=true
PROMOTION_AUTHORIZATION_CLEAR_ON_NEW_SESSION=true
PROMOTION_AUTHORIZATION_SCOPE=CURRENT_TASK_OR_CONVERSATION
AUTO_PROMOTE=false
TEST_EXECUTION_POLICY=BATCHED
STOP_WHEN_SUFFICIENT_EVIDENCE=true
CAVEMAN_GRANULARITY=TASK
CAVEMAN_MODE_DEFAULT=AUTO
TOKEN_ECONOMY_POLICY=ADAPTIVE
QA_MODE_DEFAULT=AUTO
STOP_AFTER_DEVELOPMENT_PUSH=true
PUSH_TARGET=origin/development
FEATURE_BRANCHES=DISALLOWED
DEFAULT_BRANCH=development
WORKING_BRANCH=development
ANCLORA_FLOW_CONTRACT_VERSION=2.0
ANCLORA_FLOW_VERSION=1
# Anclora SecureFlow — runtime y Git

## Contrato operativo

```text
PROJECT_ID=anclora-secureflow
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
PROMOTION_REQUIRES_PRE_STEP_GATES=true
PROMOTION_STOP_ON_GATE_FAILURE=true
PROMOTION_OLD_AUTHORIZATION_PERSISTS=false
```

> [!NOTE]
> Actualizado 2026-09-26: el repo se bootstrapeó con todo el trabajo real en una rama
> llamada `anclora-secureflow` en lugar de `development`, y `main` solo tenía el commit
> inicial vacío. Se crearon `development`, `staging` y `production` a partir de esa rama
> (mismo commit en las tres) y se adoptó el modelo `FULL_PROMOTION` explícitamente pedido
> por Toni. La rama `anclora-secureflow` queda obsoleta y se elimina tras verificar que
> `development` contiene el mismo contenido.

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

<!-- ANCLORA-MODS:START -->
ANCLORA_MODS_COMMON_CONTRACT_VERSION=1.0.0
Canonical shared rules: [Anclora Common Agent Contract](../anclora-mods/contracts/ANCLORA_COMMON_AGENT_CONTRACT_V1.md) and [Flow Amendment v2](../anclora-mods/ANCLORA_FLUJO_UNICO_V2.md). Repository-specific facts remain in this repository's `.anclora/` contracts.
<!-- ANCLORA-MODS:END -->
