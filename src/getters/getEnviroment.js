import { select } from '@clack/prompts';

const getEnviroment = async () => {
  return await select({
    message: '🌍 ¿A qué rama deseas hacer merge?',
    options: [
      { value: 'develop', label: '🧪 develop (DEV)' },
      { value: 'release', label: '🚢 release (UAT)' },
    ],
    required: true,
    initialValue: 'develop',
  });
};
export default getEnviroment;
