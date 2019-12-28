import { createContext } from "react";
import { initialUser } from "../hooks/user";

const App = ({ Component, pageProps }) => {
  const userContext = createContext(initialUser);
  return (
    <>
      <userContext.Provider value={initialUser}>
        <Component {...pageProps} />
      </userContext.Provider>
    </>
  );
};

App.propTypes = {};
export default App;
