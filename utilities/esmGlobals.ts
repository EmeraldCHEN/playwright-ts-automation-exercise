// Centralize the ES module workaround in a utility module, so you don’t have to repeatedly reimplement it in multiple files like `test.config.ts`

import { fileURLToPath } from 'url';
import path from 'path';

// Recreate `__dirname` in ESM
export const __filename = fileURLToPath(import.meta.url); // `import.meta.url` gives you the current module’s URL and `fileURLToPath()` converts it to a usable file path

export const __dirname = path.dirname(__filename); // `path.dirname()` gives you the directory — just like `__dirname` in CommonJS
