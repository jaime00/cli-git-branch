import getBranchType from '../getters/getBranchType.js';
import getTicketOfJIRA from '../getters/getTicketOfJIRA.js';

const createBranchName = async () => {
  const branchType = await getBranchType();
  const ticketOfJIRA = await getTicketOfJIRA();
  return `${branchType}/${ticketOfJIRA}`;
};

export default createBranchName;
