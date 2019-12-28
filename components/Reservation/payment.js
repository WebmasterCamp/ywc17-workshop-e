import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { Button } from 'antd'

const PaymentWayBox = styled.div`
    border: 2px solid #FDAD19;
    box-shadow: 1px 1px 3px #bbb;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    padding: 20px; 10px;
    height: 150px;
    max-width: 180px;
`
const PaymentLogo = styled.img`
    max-width: 100%;
`
const Payment = () => (
    <Fragment>
        <h1>จำนวนเงินทั้งหมด : 200 บาท</h1>
        <h3>ช่องทางการชำระเงิน</h3>
        <PaymentWayBox>
            <PaymentLogo src='https://taejai.com/static/storehouse/payments/rabbit-linepay.png' />
            <span>Line pay</span>
        </PaymentWayBox>
        <Button type='primary' block style={{ marginTop: 20 }}>ยืนยันการชำระเงิน</Button>
    </Fragment>

)

export default Payment