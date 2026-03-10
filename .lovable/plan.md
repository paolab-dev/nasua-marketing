

## Agregar `@vercel/node` al proyecto

Agregar `@vercel/node` como dependencia de desarrollo en `package.json` para resolver el error de TypeScript en `api/posts.ts`.

### Cambio

En `package.json`, agregar en `devDependencies`:

```json
"@vercel/node": "^3.0.0"
```

Esto eliminará el error `TS2307: Cannot find module '@vercel/node'`.

