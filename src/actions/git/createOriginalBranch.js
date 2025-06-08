import { spinner, log } from '@clack/prompts';

import { execSync } from 'child_process';
import createBranchName from './createBranchName.js';

const createOriginalBranch = async () => {
  const branchName = await createBranchName();
  const s = spinner();
  try {
    s.start('🌱 Creating original branch...');
    execSync(`git checkout -b ${branchName} origin/master`, { stdio: 'inherit' });
    execSync(`git push origin ${branchName}`, { stdio: 'inherit' });
    s.stop(`✅ Branch "${branchName}" created and pushed to remote successfully!`);
    log.success(`🎉 Branch "${branchName}" created successfully!`);

  } catch (error) {
    s.stop();
    log.error(`❌ Error: ${error.message}`);
  }
};

export default createOriginalBranch;
