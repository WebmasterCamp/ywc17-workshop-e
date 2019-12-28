import { useContext, useCallBack } from "react";
import { rootContext } from "../pages/_app";

const useUserInfo = () => {
  const rootData = useContext(rootContext);
  const { userInfo, setUserInfo } = rootData;
  return [userInfo, setUserInfo];
};

export default useUserInfo;
