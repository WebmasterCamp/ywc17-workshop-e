import React from "react";
import useUserInfo from "../hooks/user";
import styled from "@emotion/styled";

const Home = () => {
  const Button = styled.button`
    color: green;
  `;
  const [userInfo] = useUserInfo();
  return (
    <div>
      {userInfo.username}
      <Button>Test</Button>
    </div>
  );
};

export default Home;
