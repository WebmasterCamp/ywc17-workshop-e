import React from 'react'
import styled from '@emotion/styled';


const Topic = styled.p`
  border-bottom: 2px solid #cf4e4e;
  display: inline-block;
  margin-bottom: 6px;
  font-size: 16px;
`

const Blog = () => (
    <div>
        <Topic>บทความ</Topic>
        <div className='mt-2'>
            <div className='row'>
                <div className='col-6'>
                    <img className='max-w-100' style={{ cursor: 'pointer' }} src='../../images/blog.jpg' />
                </div>
                <div className='col-6'>
                    <img className='max-w-100' style={{ cursor: 'pointer' }} src='../../images/blog.jpg' />
                </div>
                <div className='col-6'>
                    <img className='max-w-100' style={{ cursor: 'pointer' }} src='../../images/blog.jpg' />
                </div>
                <div className='col-6'>
                    <img className='max-w-100' style={{ cursor: 'pointer' }} src='../../images/blog.jpg' />
                </div>
            </div>
        </div>
    </div>
)

export default Blog