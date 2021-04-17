import React, { useState, useRef, useEffect } from "react";
import { useMetaService } from "../providers/MetaProvider";

const Banking = () => {
  const { banking } = useMetaService();
  const [amount, setAmount] = useState("");
  const amountFieldRef = useRef();

  useEffect(() => {
    amountFieldRef.current.focus();
  }, []);

  const handleDeposit = () => {
    const passReg = /^\d+(\.?\d+)?$/; // Check if typed number is a correct positive number
    if (passReg.test(amount)) {
      banking.depositAct(parseInt(amount));
      setAmount("");
    }
  };

  const handleWithdraw = () => {
    const passReg = /^\d+(\.?\d+)?$/; // Check if typed number is a correct positive number
    if (passReg.test(amount)) {
      banking.withdrawAct(parseInt(amount));
      setAmount("");
    }
  };

  const handleCollectInterest = () => {
    banking.collectInterestAct();
  };

  const handleDeleteAccount = () => {
    banking.deleteAccountAct();
  };

  const handleAccountChange = () => {
    banking.toggleAccountAct();
  };
  return (
    <div className="form-group">
      <input
        ref={amountFieldRef}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="text"
        className="form-control"
      />
      <button onClick={handleDeposit} className="btn btn-success">
        Deposit
      </button>
      <button onClick={handleWithdraw} className="btn btn-primary">
        Withdraw
      </button>
      <button onClick={handleCollectInterest} className="btn btn-warning">
        Collect Interest
      </button>
      <button onClick={handleDeleteAccount} className="btn btn-danger">
        Delete Account
      </button>
      <button onClick={handleAccountChange} className="btn btn-secondary">
        Change Account Type
      </button>
    </div>
  );
};

export default Banking;
