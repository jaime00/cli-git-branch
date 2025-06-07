import { log } from '@clack/prompts'
import { execSync } from 'child_process'

export default function commit(args) {
  try {
    const commitMsg = args[0]
    if (!commitMsg) {
      log.error('❌ Please provide a commit message')
      process.exit(1)
    }

    log.step('📦 Staging changes...')
    execSync('git add .', { stdio: 'inherit' })
    log.step('💾 Creating commit...')
    execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit' })
    log.success('✅ Commit created successfully!')
  } catch (error) {
    log.error(`❌ Error: ${error.message}`)
  }
}
