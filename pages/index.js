import React, { Fragment } from 'react'

import Navbar from '../components/navbar'
import Hero from '../components/Index/hero'
import Partner from '../components/Index/partner'
import Review from '../components/Index/review'
import Blog from '../components/Index/blog'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Button } from 'antd'

const Advertise = styled.div`
  background: #FFC2C9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`
const EndText = styled.p`
  font-size: 18px;
  text-align: center;
`
export default () => {

  return (
    <Fragment>
      <Navbar />
      <Hero />
      <div className='container'>
        <div className='row'>
          <div className='col-12 pt-3'>
            <Partner />
          </div>
          <div className='col-12 pt-3'>
            <Review />
          </div>
          <div className='col-12 pt-3'>
            <Blog />
          </div>
          <div className='col-12 pt-3'>
            <Advertise>
              ติดต่อพื้นที่โฆษณา<br />peterly@peterly.com
            </Advertise>
          </div>
          <div className='col-12 pt-5'>
            <EndText>เพ็ทเทอร์ลี่คือผู้สูงอายุที่มีประสบการณ์ในการดูแลสัตว์เลี้ยง มีเวลาว่าง รักสัตว์ อยู่ในระแวกบ้านคุณ และพร้อมจะดูแลสัตว์เลี้ยงคุณเหมือนเป็นลูกหลาน ในวันที่คุณยุ่งหรือไม่มีเวลา เพ็ทเทอร์จะทำหน้าที่เหมือนเป็นเจ้าของคนที่สอง คอยใส่ใจดูแลอย่างเต็มที่</EndText>
          </div>

          <div className='col-12 text-center pt-5'>
            <Link href='/partner-system'>
              <Button type='primary' style={{ background: '#CF4E4E'}}>เข้าสู่ระบบของผู้สูงวัย</Button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
