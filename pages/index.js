import React from "react";
import useUserInfo from "../hooks/user";

const Home = () => {
  const [userInfo] = useUserInfo();
  return <div>{userInfo.username}</div>;
};

export default Home;
