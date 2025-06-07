import { select } from '@clack/prompts'
import handleUserCancellation from '../utils/handleUserCancellation.js'

const getEnviroment = async () => {
  const enviroment = await select({
    message: '🌍 ¿A qué rama deseas hacer merge?',
    options: [
      { value: 'develop', label: '🧪 develop (DEV)' },
      { value: 'release', label: '🚢 release (UAT)' },
    ],
    required: true,
    initialValue: 'develop',
  })
  handleUserCancellation(enviroment)
  return enviroment
}
export default getEnviroment
