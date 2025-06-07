import { select, isCancel } from '@clack/prompts'
import handleUserCancellation from '../utils/handleUserCancellation.js'

const getBranchType = async () => {
  const branch = await select({
    message: '🌳 Select the branch type:',
    options: [
      { value: 'fix', label: '🐞 Fix' },
      { value: 'improvement', label: '✨ Improvement' },
      { value: 'feature', label: '🚀 Feature' },
      { value: 'refactor', label: '🔨 Refactor' },
    ],
  })
  handleUserCancellation(branch)
  return branch
}

export default getBranchType
