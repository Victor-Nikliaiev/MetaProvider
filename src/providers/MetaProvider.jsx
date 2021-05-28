// CREATED BY ARHIS ALIGHT (Victor Nikliaiev). My wish's to make This World a bit better!

// All we need to create a provider
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

//Actions
import { toggleAuthAct } from "../actions/authActions";
import {
  depositAct,
  withdrawAct,
  collectInterestAct,
  deleteAccountAct,
  toggleAccountAct,
} from "../actions/bankingActions";

// Reducers
import { rootReducer } from "../reducers/combineReducer";

// It's an object where we save all variables, in our case for two reducers: auth and banking
const VARS = { auth: {}, banking: {} };

const MetaTag = () => {
  const dispatch = useDispatch();

  // Your variables are going here
  // ===============================================================================
  // In the beginning all variables (not actions) might begin with "use" word,
  // for example your variable "message" becomes "useMessage", and it becomes a function, and might be exported
  // as, for example "message: VARS.useMessage()", take a look at exporting useMetaService hook as an example
  // keep in mind to have a correct address for your state for variables if you have
  // combined reducers
  // ================================================================================
  // For a variable:
  // VARS.useMessage = () => useSelector((state) => state.message);
  // Keep in mind, that all variables that are exporting in custom hook, might be called as a function
  // and it might be saved on the first level deep as: VARS.useIsLoggedIn, not like VARS.auth.useIsLoggedIn,
  // it will throw an error.
  // For an action:
  // VARS.setMessage = (message) => dispatch(setMessageAction(message));
  // =================================================================

  // auth
  VARS.useIsLoggedIn = () => useSelector((state) => state.auth.isLoggedIn);
  VARS.auth.toggleAuthAct = () => dispatch(toggleAuthAct());

  // banking
  VARS.useBalance = () => useSelector((state) => state.banking.balance);
  VARS.useIsSavingAccount = () =>
    useSelector((state) => state.banking.isSavingAccount);
  VARS.banking.depositAct = (amount) => dispatch(depositAct(amount));
  VARS.banking.withdrawAct = (amount) => dispatch(withdrawAct(amount));
  VARS.banking.collectInterestAct = () => dispatch(collectInterestAct());
  VARS.banking.deleteAccountAct = () => dispatch(deleteAccountAct());
  VARS.banking.toggleAccountAct = () => dispatch(toggleAccountAct());

  // ==========================================================================

  return null;
};

export const MetaProvider = ({ children }) => {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <MetaTag />
      {children}
    </Provider>
  );
};

export const useMetaService = () => ({
  auth: {
    isLoggedIn: VARS.useIsLoggedIn(),
    toggleAuthAct: VARS.auth.toggleAuthAct,
  },
  banking: {
    balance: VARS.useBalance(),
    isSavingAccount: VARS.useIsSavingAccount(),
    depositAct: VARS.banking.depositAct,
    withdrawAct: VARS.banking.withdrawAct,
    collectInterestAct: VARS.banking.collectInterestAct,
    deleteAccountAct: VARS.banking.deleteAccountAct,
    toggleAccountAct: VARS.banking.toggleAccountAct,
  },
});
