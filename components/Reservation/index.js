import React, { Fragment } from 'react'
import { Radio, Checkbox, Row, Col, Input  } from 'antd'
import styled from '@emotion/styled';

import Payment from './payment'

const ProfileImage = styled.img`
    max-width: 100%;
    width: 100%;
`

const ReservationMain = props => (
    <Fragment>
        <h1>คุณเลือกจองคิว ป้าสมศรี</h1>
        <ProfileImage src='http://www.silvereco.org/en/wp-content/uploads/2017/10/Japan-China-Elderly-people-Ageing-population-2.jpg' />
        {
            props.isUserConfirmaDetail ? <Payment /> : (
                <Fragment>
                    <h3>ช่วงเวลา</h3>
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">ทั้งวัน</Radio.Button>
                        <Radio.Button value="b">เช้า</Radio.Button>
                        <Radio.Button value="c">กลางวัน</Radio.Button>
                    </Radio.Group>
                    <h3>บริการเสริม</h3>
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Row>
                            <Col span={24}><Checkbox value="A">พาเดินเล่น (+50 บาท)</Checkbox></Col>
                            <Col span={24}><Checkbox value="A">อาบน้ำ (+150 บาท)</Checkbox></Col>
                            <Col span={24}><Checkbox value="A">ตัดขน (+150 บาท)</Checkbox></Col>
                        </Row>
                    </Checkbox.Group>
                    <h3>ข้อความถึงผู้รับดูแล</h3>
                    <Input.TextArea rows={5}></Input.TextArea>
                </Fragment>
            )
        }
    </Fragment>
)

export default ReservationMain