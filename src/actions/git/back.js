import { log } from '@clack/prompts'
import { execSync } from 'child_process'

export default function back() {
  try {
    log.step('🔄 Switching to previous branch...')
    execSync('git checkout -', { stdio: 'inherit' })
    log.success('✅ Successfully switched to previous branch!')
  } catch (error) {
    log.error(`❌ Error: ${error.message}`)
    process.exit(1)
  }
}
