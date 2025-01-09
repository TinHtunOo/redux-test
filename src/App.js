import CreateCustomer from "./feature/customers/CreateCustomer";
import Customer from "./feature/customers/Customer";
import AccountOperations from "./feature/accounts/AccountOperations";
import BalanceDisplay from "./feature/accounts/BalanceDisplay";
import { useSelector } from "react-redux";

function App() {
  const fullname = useSelector((store) => store.customer.fullname);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullname ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
