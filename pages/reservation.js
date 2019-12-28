import React, { Fragment, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

import { Layout } from "./../components/layout";
import ReservationMain from "../components/Reservation";
import useRegistration from "../hooks/register";

const SummaryWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ccc;
  height: 40px;
  align-items: center;
  padding: 0 10px;
  display: ${props => (props.isUserConfirmDetail ? "none" : "flex")};
`;

const Reservation = () => {
  const [isUserConfirmDetail, setIsUserConfirmDetail] = useState(false);
  const [registerData, setRegisterData] = useRegistration();

  const [isWash, setWash] = useState(false);
  const [isWalk, setWalk] = useState(false);
  const [isNail, setNail] = useState(false);
  const [price, setPrice] = useState(400);

  useEffect(() => {
    let currentPrice = 400;
    if (isWalk) {
      currentPrice += 20;
    }
    if (isWash) {
      currentPrice += 90;
    }
    if (isNail) {
      currentPrice += 20;
    }
    setPrice(currentPrice);
  }, [isWash, isWalk, isNail]);

  return (
    <Fragment>
      <Layout hideFooter>
        <ReservationMain
          registerData={registerData}
          setRegisterData={setRegisterData}
          isUserConfirmDetail={isUserConfirmDetail}
          setWash={setWash}
          setWalk={setWalk}
          setNail={setNail}
          isWalk={isWalk}
          isWash={isWash}
          isNail={isNail}
        />
      </Layout>
      <SummaryWrapper isUserConfirmDetail={isUserConfirmDetail}>
        ราคารวม : {price} บาท
        <Button
          type="primary"
          style={{ marginLeft: "auto" }}
          onClick={() => setIsUserConfirmDetail(true)}
        >
          ยืนยันรายละเอียด
        </Button>
      </SummaryWrapper>
    </Fragment>
  );
};

export default Reservation;
