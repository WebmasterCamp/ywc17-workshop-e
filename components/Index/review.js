import React from 'react'
import styled from '@emotion/styled';
import { List, Comment } from "antd";
import data from "../../data/review";


const Topic = styled.p`
  border-bottom: 2px solid #cf4e4e;
  display: inline-block;
  margin-bottom: 6px;
  font-size: 16px;
`

const ReviewBox = () => (
    <div>
        <Topic>ความคิดเห็นของผู้ใช้งาน</Topic>
        <div className='mt-2'>
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
    </div>
)

export default ReviewBox