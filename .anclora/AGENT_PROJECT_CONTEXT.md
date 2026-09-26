# Anclora SecureFlow — contexto de proyecto

**Estado:** activo  
**Tipo:** showcase web / landing comercial  
**Familia:** Anclora SecureFlow  
**Repositorio canónico:** `anclora-secureflow`

## Propósito

SecureFlow es la landing pública del flujo de datos seguro de Anclora. Presenta cuatro
capacidades SaaS coordinadas —Prepare, Protect, Extract y Automate— y recoge solicitudes
de acceso anticipado sin persistir datos en este repositorio.

## Mapa técnico

| Área | Ubicación | Responsabilidad |
|---|---|---|
| Aplicación | `src/App.tsx` | Estado de idioma, tema, FAQ y formulario |
| Componentes | `src/components/` | Header, hero, catálogo, seguridad, FAQ y acceso |
| Catálogo | `src/data/products.ts`, `src/data/plans.ts` | Productos y packs comerciales |
| Traducciones | `src/i18n/index.ts` | Copia ES/EN de la landing |
| Servicio | `src/services/accessRequestService.ts` | Frontera preparada para whitelist; actualmente no envía ni guarda |
| Identidad visual | `src/styles.css`, `src/components/BrandMark.tsx` | Tokens, layout y marca SecureFlow |
| Activos | `public/assets/` | Imagen hero y logos del ecosistema |

## Enrutamiento para agentes

1. Leer este archivo, `PRODUCTION_RUNTIME.md` y `AOS_ADOPTION.md` antes de modificar código.
2. Preservar el carácter público, estático y sin secretos de la landing.
3. Mantener el catálogo alineado con el contrato comercial de SecureFlow.
4. No inventar persistencia, autenticación ni integraciones backend en el frontend.
5. Ejecutar las puertas de CI (`npm run lint`, `npm test`, `npm run build`) tras cambios significativos.
6. Para cambios visuales, verificar escritorio y móvil con el runtime de QA visual Anclora.

## Fuentes de autoridad

- Política global del workspace: `../ANCLORA_WORKSPACE_AGENT_POLICY.md`.
- Runtime y modelo Git: `.anclora/PRODUCTION_RUNTIME.md`.
- Adopción AOS: `.anclora/AOS_ADOPTION.md`.
- Contratos del ecosistema: `anclora-vault` y `anclora-group` cuando estén disponibles en el workspace.
