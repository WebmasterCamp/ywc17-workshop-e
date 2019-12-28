import { createContext, useState } from "react";

export const initialUser = {
  id: 1,
  username: "test",
  password: "123456",
  orders: [],
  name: "Khun new"
};

export const initialRegisterData = {
  id: 1,
  username: "test",
  password: "123456",
  orders: [],
  name: "Khun new"
};
const rootData = { userInfo: initialUser, registerData: initialRegisterData };

export const rootContext = createContext(rootData);

const App = ({ Component, pageProps }) => {
  const [userInfo, setUserInfo] = useState(initialUser);
  const [registerData, setRegisterData] = useState(initialRegisterData);
  return (
    <>
      <rootContext.Provider
        value={{ userInfo, setUserInfo, registerData, setRegisterData }}
      >
        <Component {...pageProps} />
      </rootContext.Provider>
    </>
  );
};

App.propTypes = {};
export default App;
