import { text } from '@clack/prompts'
import handleUserCancellation from '../../../utils/handleUserCancellation.js'

const getApiKey = async () => {
  const apikey = await text({
    message: '🔑 Enter your apikey:',
    placeholder: '',
    initialValue: '',
    required: true,
    validate(value) {
      if (!value?.trim()) return `⚠️ API key is required!`
      return undefined
    },
  })
  handleUserCancellation(apikey)
  return apikey
}

export default getApiKey
