import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import { Button  } from 'antd'

import { Layout } from './../components/layout'
import ReservationMain from '../components/Reservation'

const SummaryWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #ccc;
    height: 40px;
    align-items: center;
    padding: 0 10px;
    display: ${props => props.isUserConfirmDetail ? 'none': 'flex'};
`

const Reservation = () => {
    const [ isUserConfirmDetail, setIsUserConfirmDetail ] = useState(false)
    return (
        <Fragment>
            <Layout hideFooter>
                <ReservationMain isUserConfirmDetail={isUserConfirmDetail} />
            </Layout>
            <SummaryWrapper isUserConfirmDetail={isUserConfirmDetail}>
                ราคารวม : 400 บาท
                <Button type='primary' style={{marginLeft: 'auto'}} onClick={() => setIsUserConfirmDetail(true)}>ยืนยันรายละเอียด</Button>
            </SummaryWrapper>
        </Fragment>
    )
}

export default Reservation