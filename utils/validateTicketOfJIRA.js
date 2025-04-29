const validateTicketOfJIRA = (ticket) => {
  const regex = /^DPW-\d{4}$/;
  return regex.test(ticket);
};

export default validateTicketOfJIRA;
