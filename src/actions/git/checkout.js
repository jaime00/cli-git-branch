import { log } from '@clack/prompts'
import { execSync } from 'child_process'

export default function checkout(args) {
  try {
    const branch = args[0] || '-'
    const isPreviousBranch = branch === '-'
    if (isPreviousBranch) {
      log.step('🔄 Switching to previous branch...')
    }
    execSync(`git checkout ${branch}`, { stdio: 'inherit' })
    log.success(
      `✅ Successfully switched to ${isPreviousBranch ? 'previous' : branch} branch!`
    )
  } catch (error) {
    log.error(`❌ Error: ${error.message}`)
    process.exit(1)
  }
}
