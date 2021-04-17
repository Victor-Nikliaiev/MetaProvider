import React from "react";
import { useMetaService } from "../providers/MetaProvider";

const Balance = () => {
  const { banking } = useMetaService();

  return (
    <div>
      <h1>${banking.balance}</h1>
    </div>
  );
};

export default Balance;
