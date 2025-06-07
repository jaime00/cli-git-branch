import { log } from '@clack/prompts'
import pull from './src/git-actions/pull.js'
import push from './src/git-actions/push.js'
import removelast from './src/git-actions/removelast.js'
import mergewith from './src/git-actions/mergewith.js'
import commit from './src/git-actions/commit.js'

const gitCommand = process.argv[1].split('/').pop()
const args = process.argv.slice(2)

const commands = {
  pull,
  push: () => push(args),
  removelast,
  mergewith: () => mergewith(args),
  commit: () => commit(args),
}

async function main() {
  try {
    const command = commands[gitCommand]
    if (!command) {
      log.error(`Unknown command: ${gitCommand}`)
      process.exit(1)
    }

    await command()
    process.exit(0)
  } catch (error) {
    log.error(`Error executing command: ${error.message}`)
    process.exit(1)
  }
}

main()
