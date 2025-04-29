import { spinner, log } from '@clack/prompts';

import { execSync } from 'child_process';
import createBranchName from './createBranchName.js';

const createOriginalBranch = async () => {
  const branchName = await createBranchName();
  const s = spinner();
  // Ejecutar comandos git
  try {
    s.start('Creando...');
    execSync(`git checkout -b ${branchName} origin/master`, { stdio: 'inherit' });
    s.stop(`Rama creada correctamente (${branchName})`);
    log.success(`Rama: ${branchName} creada correctamente.`);

  } catch (error) {
    s.stop();
    log.error(error.message);
  }
};

export default createOriginalBranch;
