import { createContext, useState, useEffect } from "react";
import { Helmet } from 'react-helmet'
import '../css/grid.css';
import '../css/utilities.min.css'

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
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Pridi:400,500&display=swap" rel="stylesheet" />
      </Helmet>
      <style jsx global>
          {
            `
              html, body, h1, h2, h3, h4, h5, h6, p, span {
                font-family: 'Pridi', serif !important;
                color: #383838;
              }
              .max-w-100 {
                max-width: 100%;
              }
            `
          }
        </style>
      <rootContext.Provider
        value={{
          userInfo,
          setUserInfo,
          registerData,
          setRegisterData
        }}
      >
        <Component {...pageProps} />
      </rootContext.Provider>
    </>
  );
};

App.propTypes = {};
export default App;
