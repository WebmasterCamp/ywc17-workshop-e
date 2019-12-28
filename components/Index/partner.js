import React from 'react'
import styled from '@emotion/styled';
import PartnerCard from '../search/card'

const Topic = styled.p`
  border-bottom: 2px solid #cf4e4e;
  display: inline-block;
  margin-bottom: 6px;
  font-size: 16px;
`


const Partner = () => (
    <div>
        <Topic>ผู้ดูแลของเรา</Topic>
        <div className='mt-2'>
            <PartnerCard
                name={'สมหมาย'}
                onClick={() => onCardClick(careTaker)}
                description={`“จริงใจ อ่อนโยน รักสัตว์”`}
                age={'60 ปี'}
                score={4.7}
            />
        </div>
    </div>
)

export default Partner