// actions
export const depositAct = (amount) => {
  return {
    type: "DEPOSIT",
    amount: parseInt(amount),
  };
};

// withdraw
export const withdrawAct = (amount) => {
  return {
    type: "WITHDRAW",
    amount: parseInt(amount),
  };
};

// collect interest

export const collectInterestAct = () => {
  return {
    type: "COLLECT_INTEREST",
  };
};

// delete account
export const deleteAccountAct = () => {
  return {
    type: "DELETE_ACCOUNT",
  };
};

// toggle account
export const toggleAccountAct = () => {
  return {
    type: "TOGGLE_ACCOUNT",
  };
};
