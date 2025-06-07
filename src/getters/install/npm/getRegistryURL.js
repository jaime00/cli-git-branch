import { text } from '@clack/prompts'
import handleUserCancellation from '../../../utils/handleUserCancellation.js'

const getRegistryURL = async () => {
  const URL = await text({
    message: '🔗 Enter your NPM registry URL (without http/https):',
    placeholder: '',
    initialValue: '',
    required: true,
    validate(value) {
      if (!value?.trim()) return `⚠️ Endpoint URL is required!`

      if (!/^[a-zA-Z0-9]/.test(value[0].trim())) {
        return `❌ URL must start with a name only, avoid special characters`
      }
      if (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('/')) {
        return `❌ URL must not include http/https protocol and must start with a letter`
      }
    },
  })
  handleUserCancellation(URL)
  return URL
}

export default getRegistryURL
