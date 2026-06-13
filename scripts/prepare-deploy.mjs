#!/usr/bin/env node
/**
 * Assembles a deploy-ready dist/ folder from the website UI kit.
 * Run from repo root: node scripts/prepare-deploy.mjs
 */
import { cpSync, rmSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const WEB = join(ROOT, 'ui_kits/website');
const DIST = join(ROOT, 'dist');

if (existsSync(DIST)) rmSync(DIST, { recursive: true });
mkdirSync(DIST, { recursive: true });

cpSync(WEB, DIST, { recursive: true });
cpSync(join(ROOT, 'assets'), join(DIST, 'assets'), { recursive: true });
cpSync(join(ROOT, 'styles.css'), join(DIST, 'styles.css'));
cpSync(join(ROOT, '_ds_bundle.js'), join(DIST, '_ds_bundle.js'));

// Patch HTML paths: ../../../styles.css -> /styles.css, ../../../_ds_bundle.js -> /_ds_bundle.js
import { readdirSync, readFileSync, writeFileSync } from 'fs';

function patchFile(file) {
  let src = readFileSync(file, 'utf8');
  src = src
    .replace(/\.\.\/\.\.\/\.\.\/styles\.css/g, '/styles.css')
    .replace(/\.\.\/\.\.\/styles\.css/g, '/styles.css')
    .replace(/\.\.\/\.\.\/\.\.\/_ds_bundle\.js/g, '/_ds_bundle.js')
    .replace(/\.\.\/\.\.\/_ds_bundle\.js/g, '/_ds_bundle.js')
    .replace(/\.\.\/\.\.\/\.\.\/assets\//g, '/assets/')
    .replace(/\.\.\/\.\.\/assets\//g, '/assets/');
  writeFileSync(file, src);
}

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith('.html')) patchFile(p);
  }
}

walk(DIST);

console.log('Deploy bundle ready at dist/');
console.log('Preview: npx serve dist');
