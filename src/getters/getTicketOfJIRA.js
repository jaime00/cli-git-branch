import { text } from '@clack/prompts';
import validateTicketOfJIRA from '../utils/validateTicketOfJIRA.js';

const getTicketOfJIRA = async () => {
  return await text({
    message: '🎫 Enter the JIRA ticket code:',
    placeholder: 'DPW-0000',
    initialValue: '',
    validate(value) {
      if (value.length === 0) return `⚠️ JIRA code is required!`;
      if (!validateTicketOfJIRA(value))
        return `❌ JIRA code must have the format DPW-0000`;
    },
  });
};

export default getTicketOfJIRA;
