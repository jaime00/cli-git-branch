import { select, intro, outro, cancel } from '@clack/prompts';
import chalk from 'chalk';
import createOriginalBranch from './src/actions/git/createOriginalBranch.js';
import createTemporalBranch from './src/actions/git/createTemporalBranch.js';
import getCurrentPackageVersion from './src/getters/git/getCurrentPackageVersion.js';

const args = process.argv.slice(2);

if (args.includes('-v') || args.includes('--version')) {
  console.log("eazy-git version:", getCurrentPackageVersion());
  process.exit(0);
}

// Welcome banner
intro(
  chalk.hex('#57d7c4')(`
    Welcome to

    ██████╗ ██╗████████╗   ███████╗██╗      ██████╗ ██╗    ██╗           ██╗███████╗
    ██╔════╝ ██║╚══██╔══╝   ██╔════╝██║     ██╔═══██╗██║    ██║           ██║██╔════╝
    ██║  ███╗██║   ██║█████╗█████╗  ██║     ██║   ██║██║ █╗ ██║█████╗     ██║███████╗
    ██║   ██║██║   ██║╚════╝██╔══╝  ██║     ██║   ██║██║███╗██║╚════╝██   ██║╚════██║
    ╚██████╔╝██║   ██║      ██║     ███████╗╚██████╔╝╚███╔███╔╝      ╚█████╔╝███████║
     ╚═════╝ ╚═╝   ╚═╝      ╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝        ╚════╝ ╚══════╝
    
    ${chalk.hex('#9ca3af')("your trusted CLI for GIT branch management")}
  `)
);

const action = await select({
  message: chalk.hex('#199288')('What would you like to do?'),
  options: [
    { value: 'CRO', label: '🌱 Create Original Branch' },
    { value: 'CRT', label: '🌿 Create Temporal Branch' },
  ],
  required: true,
  initialValue: 'CRO',
});

if (action === 'CRO') await createOriginalBranch();
else if (action === 'CRT') await createTemporalBranch();
else {
  cancel('❌ The operation was cancelled. Exiting...');
  process.exit(0);
}

outro(chalk.hex('#06D6A0')('Operation completed!'));
