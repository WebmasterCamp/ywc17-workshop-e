import { createContext, useState, useEffect } from "react";
import "../css/grid.css";

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
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    if (!userInfo) {
      const jsonUser = localStorage.getItem("userInfo");
      const decodedUser = JOSN.parse(jsonUser);
      setUserInfo(decodedUser);
    } else {
      const jsonUserInfo = JSON.stringify(userInfo);
      localStorage.setItem("userInfo", jsonUserInfo);
    }
  }, [userInfo]);

  return (
    <>
      <rootContext.Provider
        value={{
          userInfo,
          setUserInfo,
          registerData,
          setRegisterData,
          searchData,
          setSearchData
        }}
      >
        <Component {...pageProps} />
      </rootContext.Provider>
    </>
  );
};

App.propTypes = {};
export default App;
