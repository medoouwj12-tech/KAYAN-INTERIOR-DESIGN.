import { cp, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const output = new URL('./dist/', import.meta.url);
if (existsSync(output)) await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of ['index.html', 'styles.css', 'src', 'assets']) {
  await cp(new URL(`./${entry}`, import.meta.url), new URL(`./dist/${entry}`, import.meta.url), { recursive: true });
}
console.log('Static production site built in dist/.');
