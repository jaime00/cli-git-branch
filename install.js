import { existsSync } from 'fs'
import { log, cancel } from '@clack/prompts'
import { text } from '@clack/prompts'
import chalk from 'chalk'
import os from 'os'
import path from 'path'

import getLastConfig from './src/getters/install/config/getLastConfig.js'
import addnewConfig from './src/install-actions/addNewConfig.js'
import generateNpmrc from './src/install-actions/generateNpmrc.js'
import dropCurrentConfig from './src/install-actions/dropCurrentConfig.js'
import getCurrentConfig from './src/install-actions/getCurrentConfig.js'
import showCurrentConfig from './src/install-actions/showCurrentConfig.js'

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
    if (value.startsWith('http')) {
      return `❌ URL must not include 'http/https' protocol and must start with a letter`
    }
    if (value.startsWith('/')) {
      return `❌ URL must not start with '/' and must begin with a letter or number`
    }
    if (value.startsWith('www')) {
      return `❌ URL must not start with 'www' and must begin with a letter or number`
    }
  },
})

try {
  const configPath = path.join(os.homedir(), 'config.js')
  if (existsSync(configPath)) {
    const { endpoint, apikey, registryURL, registryName } = await getCurrentConfig()

    if (endpoint && apikey && registryURL && registryName) {
      showCurrentConfig({ endpoint, apikey, registryURL, registryName })
      const useTheLatestConfig = await getLastConfig()

      if (useTheLatestConfig) {
        await generateNpmrc({
          endpoint,
          apikey,
          registryName,
          registryURL,
        })
      } else {
        dropCurrentConfig()
        const config = await addnewConfig()
        await generateNpmrc(config)
      }
    } else {
      const config = await addnewConfig()
      await generateNpmrc(config)
    }
  } else {
    const config = await addnewConfig()
    await generateNpmrc(config)
  }
} catch (error) {
  log.error(chalk.hex('#9ca3af')('An unexpected error occurred:'), error)
  process.exit(1)
}
