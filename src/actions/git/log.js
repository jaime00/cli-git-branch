import { log } from '@clack/prompts'
import { execSync } from 'child_process'

export default function consolelog() {
  try {
    execSync('git log;', { stdio: 'inherit' })
  } catch (error) {
    log.error(`❌ Error: ${error.message}`)
    process.exit(1)
  }
}
