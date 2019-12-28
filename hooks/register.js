import { useContext, useCallBack } from "react";
import { rootContext } from "../pages/_app";

const useRegistration = () => {
  const [rootData, setRootContext] = useContext(rootContext);
  const { registerData, setRegisterData } = rootData;
  return [registerData, setRegisterData];
};

export default useRegistration;
