import { useContext, useEffect } from "react";
import { rootContext } from "./_app";

export default () => {
  const rootData = useContext(rootContext);
  const { searchData } = rootData;
  useEffect(() => {
    console.log(rootData);
  }, []);
  return <div>{searchData && searchData.searchValue}</div>;
};
