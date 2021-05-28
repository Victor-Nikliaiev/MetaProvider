import React from "react";
import { useMetaService } from "../providers/MetaProvider";

export const Balance = () => {
  const { banking } = useMetaService();

  return (
    <div>
      <h1>${banking.balance}</h1>
    </div>
  );
};
