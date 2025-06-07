import { log } from '@clack/prompts'
import { execSync } from 'child_process'

export default function push(args) {
  try {
    const isForce =
      args.includes('-f') || args.includes('--force') || args.includes('-force')
    log.step('🚀 Pushing changes to remote...')
    execSync(`git push ${isForce ? '-f ' : ''}origin HEAD`, { stdio: 'inherit' })
    log.success(`✅ Changes pushed ${isForce ? 'forcefully ' : ''}successfully!`)
  } catch (error) {
    log.error(`❌ Error: ${error.message}`)
  }
}
