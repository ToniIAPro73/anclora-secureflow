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
GIT_WORKFLOW_MODEL=MAIN_ONLY
AUTO_PROMOTE=false
```

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
