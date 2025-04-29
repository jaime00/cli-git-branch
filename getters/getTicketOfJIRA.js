import { text } from '@clack/prompts';
import validateTicketOfJIRA from '../utils/validateTicketOfJIRA.js';

const getTicketOfJIRA = async () => {
  return await text({
    message: 'Código de ticket de JIRA:',
    placeholder: 'DPW-0000',
    initialValue: '',
    validate(value) {
      if (value.length === 0) return `El código de JIRA es requerido!`;
      if (!validateTicketOfJIRA(value))
        return `El código de JIRA no cumple con el formato DPW-0000`;
    },
  });
};

export default getTicketOfJIRA;
