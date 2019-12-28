import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { Comment, List, Button } from 'antd'

import { Layout } from '../components/layout'
import data from '../data/review'
import { Badge } from '../components/filterbadge'

const ProfileImage = styled.img`
    max-width: 100%;
    width: 100%;
    border-radius: 5px;
`
const ReservationContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: white;
`
const FooterPrice = styled.p`
    font-weight: 500;
    color: #383838;
    margin: 0;
    padding: 0;
`
const BadgeContainer = styled.div`
    margin-bottom: 20px;
`
const Name = styled.h1`
    font-size: 15px;
`
const Quatation = styled.span`
    color: #8C8C8C;
`
const Price = styled.p`
    font-weight: 500;
`
const Topic = styled.p`
    border-bottom: 2px solid #CF4E4E;
    display: inline-block;
    margin-bottom: 6px;
`
const ReservationButton = styled.button`
    background: #CF4E4E;
    border: none;
    color: white;
    padding: 0;
    margin: 0;
`
const PartnerProfile = () => (
    <Fragment>
        <Layout hideFooter>
            <BadgeContainer>
                <Badge>28 ธ.ค. - 29 ธ.ค.</Badge>
                <Badge>แมว</Badge>
                <Badge>เปอร์เซีย</Badge>
            </BadgeContainer>
            <div className='row'>
                <div className='col-6'>
                    <ProfileImage src='http://www.silvereco.org/en/wp-content/uploads/2017/10/Japan-China-Elderly-people-Ageing-population-2.jpg' />
                </div>
                <div className='col'>
                    <Name>
                        คุณสมศรี มีกินดี (60 ปี)
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 0C2.46718 0 0 2.46718 0 5.5C0 8.53282 2.46718 11 5.5 11C8.53282 11 11 8.53282 11 5.5C11 2.46718 8.53282 0 5.5 0ZM8.2876 4.33447L5.3084 7.31358C5.21902 7.40296 5.1017 7.44794 4.98438 7.44794C4.86705 7.44794 4.74973 7.40296 4.66035 7.31358L3.17079 5.82403C2.99153 5.64485 2.99153 5.35515 3.17079 5.17597C3.34997 4.99671 3.63959 4.99671 3.81885 5.17597L4.98438 6.3415L7.63954 3.68642C7.81872 3.50716 8.10834 3.50716 8.2876 3.68642C8.46677 3.86559 8.46677 4.15521 8.2876 4.33447V4.33447Z" fill="#1EB640"/>
                        </svg>
                    </Name>
                    <Quatation>“จริงใจ อ่อนโยน รักสัตว์เหมือนลูกหลานแท้ๆ”</Quatation>
                    <Price>200 บาท / วัน</Price>
                </div>
            </div>
            <div className='my-2'>
                <Topic>ความถนัด</Topic>
                <p>หยวนโอเปร่าแฟรี่แจ๊ส จิ๊กซอว์ แอ็กชั่นซูชิไฮไลท์วิกแพนงเชิญ ซาตานแคนู แจ๊ส แจ็กเก็ตไวกิ้งดิสเครดิตรีวิวมาร์เก็ตติ้ง บริกรไฮเวย์เซ็กซี่โปรเจกเตอร์อุปนายิก</p>
            </div>
            <div className='my-2'>
                <Topic>บุคลิก</Topic>
                <p>หยวนโอเปร่าแฟรี่แจ๊ส จิ๊กซอว์ แอ็กชั่นซูชิไฮไลท์วิกแพนงเชิญ ซาตานแคนู แจ๊ส แจ็กเก็ตไวกิ้งดิสเครดิตรีวิวมาร์เก็ตติ้ง บริกรไฮเวย์เซ็กซี่โปรเจกเตอร์อุปนายิก</p>
            </div>
            <div className='my-2'>
                <Topic>ความคิดเห็นจากผู้ใช้บริการ</Topic>
                <List
                    className="comment-list"
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <li>
                            <Comment
                                actions={item.actions}
                                author={item.author}
                                avatar={item.avatar}
                                content={item.content}
                                datetime={item.datetime}
                            />
                        </li>
                    )}
                />
            </div>
            <div className='my-1'>
                <Topic>สถานที่เลี้ยงสัตว์</Topic>
                <p>เลขที่บ้าน 15 ถ.ทดสอบ อ.ทดสอบ จ.กรุงเทพ 10000</p>
                <img className='max-w-100' src='https://www.brighttv.co.th/wp-content/uploads/2017/11/Google-Maps-%E0%B9%82%E0%B8%89%E0%B8%A1%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%96%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B8%9A%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B9%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%9C%E0%B8%A5%E0%B8%9B%E0%B8%B1%E0%B9%8A%E0%B8%A1%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99.jpg' />
            </div>
            <div className='my-3'>
                <Topic>รูปภาพเพิ่มเติม</Topic>
                <div className='row'>
                    <div className='col-4'>
                        <img className='max-w-100' src='https://cdn.pixabay.com/photo/2019/08/07/14/10/dog-4390884_960_720.jpg' />
                    </div>
                    <div className='col-4'>
                        <img className='max-w-100' src='https://cdn.pixabay.com/photo/2019/08/10/06/52/dog-4396286_960_720.jpg' />
                    </div>
                    <div className='col-4'>
                        <img className='max-w-100' src='https://upload.wikimedia.org/wikipedia/commons/4/47/American_Eskimo_Dog.jpg' />
                    </div>
                </div>
            </div>
        </Layout>
        <ReservationContainer>
            <div className='row h-100'>
                <div className='col-6 d-flex justify-content-center align-items-center'>
                    <FooterPrice>ราคา 200 บาท</FooterPrice>
                </div>
                <ReservationButton className='col-6'>
                    จองเลย
                </ReservationButton>
            </div>
        </ReservationContainer>        
    </Fragment>
)

export default PartnerProfile