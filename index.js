#!/usr/bin/env node
import { select } from '@clack/prompts';
import createOriginalBranch from './options/createOriginalBranch.js';
import createTemporalBranch from './options/createTemporalBranch.js';

const action = await select({
  message: 'Acciones',
  options: [
    { value: 'CRO', label: 'Crear Rama Original' },
    { value: 'CRT', label: 'Crear Rama Temporal' },
  ],
  required: true,
  initialValue: 'CRO',
});

if (action === 'CRO') await createOriginalBranch();
if (action === 'CRT') await createTemporalBranch();
