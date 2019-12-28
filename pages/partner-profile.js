import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { Comment, List, Button } from 'antd'

import { Layout } from '../components/layout'
import data from '../data/review'

const ProfileImage = styled.img`
    max-width: 100%;
    width: 100%;
`
const ReviewContainer = styled.div`

`
const ReservationContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #ccc;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
`

const PartnerProfile = () => (
    <Fragment>
        <Layout hideFooter>
            <ProfileImage src='http://www.silvereco.org/en/wp-content/uploads/2017/10/Japan-China-Elderly-people-Ageing-population-2.jpg' />
            <h1>ป้าสมศรี</h1>
            <p>เรทราคา : เริ่มต้น 200 บาท</p>
            <h3>รายละเอียด</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <ReviewContainer>
                <h3>รีวิวการให้บริการ</h3>
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
            </ReviewContainer>
        </Layout>
        <ReservationContainer>
            <Button type='primary'>จอง</Button>
        </ReservationContainer>        
    </Fragment>
)

export default PartnerProfile