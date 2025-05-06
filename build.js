import { build } from 'esbuild';

build({
  entryPoints: ['index.js'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/index.js',
  minify: true,
  sourcemap: false,
  format: 'esm',
  banner: {
    js: '#!/usr/bin/env node',
  },
}).catch(() => process.exit(1));
