import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import useRegistration from "../../hooks/register";
import useUserInfo from "../../hooks/user";
import { useRouter } from "next/router";

const PaymentWayBox = styled.div`
  border: 2px solid #fdad19;
  box-shadow: 1px 1px 3px #bbb;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px 10px;
  height: 150px;
  max-width: 180px;
`;
const PaymentLogo = styled.img`
  max-width: 100%;
`;
const Payment = ({ isWalk, isWash, isNail, price }) => {
  const [registerData, setRegisterData] = useRegistration();
  const router = useRouter();
  const [userInfo, setUserInfo] = useUserInfo();
  const saveRegisterToUser = () => {
    const options = { isWalk, isNail, isWash };
    setRegisterData({ ...registerData, options });
    const newUserInfo = { ...userInfo };
    newUserInfo.orders.push({ ...registerData, options });
    setUserInfo(newUserInfo);
    router.push("/tracking");
  };

  return (
    <Fragment>
      <h1>จำนวนเงินทั้งหมด : {price} บาท</h1>
      <h3>ช่องทางการชำระเงิน</h3>
      <PaymentWayBox>
        <PaymentLogo src="https://taejai.com/static/storehouse/payments/rabbit-linepay.png" />
        <span>Line pay</span>
      </PaymentWayBox>
      <Button
        onClick={saveRegisterToUser}
        type="primary"
        block
        style={{ marginTop: 20 }}
      >
        ยืนยันการชำระเงิน
      </Button>
    </Fragment>
  );
};

export default Payment;
