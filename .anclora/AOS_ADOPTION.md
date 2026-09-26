# Anclora SecureFlow — adopción AOS

**Modelo:** adopción ligera para showcase comercial  
**Fuente de verdad:** código, catálogo `src/data/` y contratos `.anclora/`

## Principios aplicados

- **Contrato antes que implementación:** la landing no asume backend ni persistencia que no exista.
- **Separación de responsabilidades:** catálogo, traducciones, presentación y servicio están aislados.
- **Determinismo:** el pipeline de CI usa lockfile y valida lint, tests y build.
- **Seguridad por defecto:** no se procesan credenciales ni se almacenan formularios.
- **Verificación visual:** los cambios de interfaz requieren revisión responsive en el runtime compartido.

## Invariantes del producto

1. La promesa de SecureFlow debe mantenerse en español e inglés.
2. Los cuatro productos se presentan con sus capacidades correctas: Prepare, Protect, Extract y Automate.
3. El formulario debe comunicar que actualmente no envía ni persiste solicitudes.
4. El tema claro/oscuro y el selector de idioma deben seguir el patrón visual del tier SaaS.
5. Los assets locales deben poder cargarse sin depender de una URL de desarrollo.

## Puerta de cambio

Antes de completar una modificación relevante:

```bash
npm run lint
npm test
npm run build
git diff --check
```

Los cambios de copy, producto o marca deben revisarse además contra el resto del
ecosistema SecureFlow para evitar divergencias comerciales.
