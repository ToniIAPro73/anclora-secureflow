# Anclora SecureFlow

Landing pública responsive para la línea de microSaaS SecureFlow de Anclora Group.

## Desarrollo local

```bash
npm install
npm run dev
```

Validaciones disponibles:

```bash
npm run lint
npm run build
npm test
```

El catálogo de productos vive en `src/data/products.ts`, los packs en `src/data/plans.ts` y las traducciones en `src/i18n/`. La capa `src/services/accessRequestService.ts` está preparada para conectar con la whitelist real; actualmente no persiste ni envía solicitudes.
