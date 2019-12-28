import React, { Fragment } from 'react'
import { Radio, Checkbox, Row, Col, Input, Collapse, Form, TimePicker } from 'antd'
import styled from '@emotion/styled';

import Payment from './payment'

const ProfileImage = styled.img`
    max-width: 100%;
    width: 100%;
    border-radius: 5px;
`
const Name = styled.h1`
    font-size: 15px;
`
const ResevationTopic = styled.span`
    color: #8C8C8C;
    font-size: 13px;
`
const ReservationDetail = styled.span`
    font-size: 13px;
`
const Line = styled.hr`
    border: 1px solid #E3E3E3;
`
const ReservationDetailItem = props => (
    <div className='row'>
        <div className='col-6'><ResevationTopic>{props.topic}</ResevationTopic></div>
        <div className='col-6 px-0'><ReservationDetail>{props.detail}</ReservationDetail></div>
    </div>
)

const ClickAble = styled.span`
    text-decoration: underline;
    cursor: pointer;
    color: blue;
`

const timeFormat = 'HH:mm'

const ReservationMain = props => (
    <Fragment>
        <div className='row'>
            <div className='col-6'>
                <ProfileImage src='http://www.silvereco.org/en/wp-content/uploads/2017/10/Japan-China-Elderly-people-Ageing-population-2.jpg' />
            </div>
            <div className='col-6'>
                <Name>
                    คุณสมศรี มีกินดี (60 ปี)
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 0C2.46718 0 0 2.46718 0 5.5C0 8.53282 2.46718 11 5.5 11C8.53282 11 11 8.53282 11 5.5C11 2.46718 8.53282 0 5.5 0ZM8.2876 4.33447L5.3084 7.31358C5.21902 7.40296 5.1017 7.44794 4.98438 7.44794C4.86705 7.44794 4.74973 7.40296 4.66035 7.31358L3.17079 5.82403C2.99153 5.64485 2.99153 5.35515 3.17079 5.17597C3.34997 4.99671 3.63959 4.99671 3.81885 5.17597L4.98438 6.3415L7.63954 3.68642C7.81872 3.50716 8.10834 3.50716 8.2876 3.68642C8.46677 3.86559 8.46677 4.15521 8.2876 4.33447V4.33447Z" fill="#1EB640"/>
                    </svg>
                </Name>
                <ReservationDetailItem topic='ประเภทสัตว์' detail='แมว เปอร์เซีย' />
                <ReservationDetailItem topic='วันเริ่มฝาก' detail='28 ธ.ค. 2562' />
                <ReservationDetailItem topic='วันรับสัตว์' detail='29 ธ.ค. 2562' />
            </div>
        </div>
        <Line className='my-3'/>

        <h3>ข้อมูลการฝากเลี้ยง</h3>
        <Form.Item label="ชื่อสัตว์เลี้ยง">
            <Input />
        </Form.Item>
        <Row gutter={24}>
            <Col span={12}>
                <Form.Item label="เวลาเริ่มฝาก (28 ธ.ค. 2562)">
                    <TimePicker format={timeFormat} />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item label="เวลารับสัตว์ (29 ธ.ค. 2562)">
                    <TimePicker format={timeFormat} />
                </Form.Item>
            </Col>
        </Row>
        <Form.Item label="บริการเสริม">
            <Checkbox.Group style={{ width: '100%' }}>
                <Row>
                    <Col span={24}><Checkbox value="A">อาบน้ำ (90 บาท)</Checkbox></Col>
                    <Col span={24}><Checkbox value="B">เดินเล่น (20 บาท)</Checkbox></Col>
                    <Col span={24}><Checkbox value="C">ตัดเล็บ (20 บาท)</Checkbox></Col>
                </Row>
            </Checkbox.Group>
        </Form.Item>
        <Form.Item label="คำแนะนำดูแล">
            <Input.TextArea rows={3}></Input.TextArea>
        </Form.Item>
        <Row className='pb-5'>
            <Col span={24}>
                <Checkbox>ยอมรับ<ClickAble>ข้อกำหนด</ClickAble>และ<ClickAble>เงื่อนไขการใช้งาน</ClickAble></Checkbox>
            </Col>
            <Col span={24}>
                <Checkbox>สมัครเว็บไซต์เพื่อรับสิทธิประโยชน์</Checkbox>
            </Col>
        </Row>
        {
            props.isUserConfirmDetail && <Payment />
        }
    </Fragment>
)

export default ReservationMain