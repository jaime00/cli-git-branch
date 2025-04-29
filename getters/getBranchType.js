import { select } from '@clack/prompts';

const getBranchType = async () => {
  return await select({
    message: 'Selecciona el tipo de rama',
    options: [
      { value: 'fix', label: 'Fix' },
      { value: 'improvement', label: 'Improvement' },
      { value: 'feature', label: 'Feature' },
      { value: 'refactor', label: 'Refactor' },
    ],
  });
};

export default getBranchType;
