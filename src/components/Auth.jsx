import React from "react";
import { useMetaService } from "../providers/MetaProvider";

const Auth = () => {
  const { auth } = useMetaService();

  return (
    <div>
      <button onClick={() => auth.toggleAuthAct()} className="btn btn-info">
        {auth.isLoggedIn ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Auth;
