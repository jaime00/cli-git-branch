import { execSync } from 'child_process';

const getCurrentBranch = () => {
  return execSync('git rev-parse --abbrev-ref HEAD').toString().trim(); // Elimina el salto de línea al final
};

export default getCurrentBranch;
