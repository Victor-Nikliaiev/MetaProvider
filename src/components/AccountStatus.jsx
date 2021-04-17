import React from "react";
import { useMetaService } from "../providers/MetaProvider";

const AccountStatus = () => {
  const { banking } = useMetaService();

  return (
    <div>
      <h1>{banking.isSavingAccount ? "Savings Account" : "AnotherType"}</h1>
    </div>
  );
};

export default AccountStatus;
