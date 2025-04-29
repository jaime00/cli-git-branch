import { log, select, text } from '@clack/prompts';
import { execSync } from 'child_process';
import getEnviroment from '../getters/getEnviroment.js';
import getCurrentBranch from '../getters/getCurrentBranch.js';

const createTemporalBranch = async () => {
  try {
    const enviroment = await getEnviroment();
    const branchName = getCurrentBranch();
    // Paso 1: Crear y cambiar a la nueva rama temporal
    const tempBranchName = `${branchName}-${enviroment}`;
    execSync(`git checkout -b ${tempBranchName} origin/${enviroment}`, {
      stdio: 'inherit',
    });
    log.success('Rama temporal creada correctamente');

    // Paso 2: Fusionar los cambios de la rama original
    execSync(`git merge origin/${branchName}`, { stdio: 'inherit' });
    log.success('Rama temporal fusionada correctamente');

    // Paso 3: Verificar si hay conflictos
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });
    if (status.includes('UU')) {
      // Paso 4: Resolver conflictos
      log.warn('Conflictos detectados. Por favor, resuélvelos manualmente.');
      return;
    }

    execSync(`git push origin ${tempBranchName}`, { stdio: 'inherit' });
    log.info('Rama acaba de ser pusheada al repositorio remoto');

    const hasToRemoveTemporalBranch = await select({
      message: '¿Deseas remover el branch temporal?',
      options: [
        { value: true, label: 'SI' },
        { value: false, label: 'No' },
      ],
    });

    if (hasToRemoveTemporalBranch) {
      execSync(`git checkout ${branchName}`, { stdio: 'inherit' });
      execSync(`git branch -D ${tempBranchName}`, { stdio: 'inherit' });
      log.info('Rama temporal eliminada correctamente');
    }
  } catch (error) {
    console.error('Error al crear la rama temporal:', error);
  }
};
export default createTemporalBranch;
