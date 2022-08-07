# A Vite Bug Reproduction

1. `pnpm i`
2. `pnpm run build`

```
Unexpected early exit. This happens when Promises returned by plugins cannot resolve. Unfinished hook action(s) on exit:
(vite:worker) transform "vitebug/node_modules/.pnpm/monaco-editor@0.34.0/node_modules/monaco-editor/esm/vs/language/typescript/ts.worker.js?worker"
```

This error is unexpected because Vite is silencing an error that is arising from terser (when terser is disabled, no error occurs).