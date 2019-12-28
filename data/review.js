import { Tooltip } from 'antd'
import moment from 'moment'
import styled from '@emotion/styled';

const BadgeContainer = styled.div`
  background: #FF8329;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 2px 6px;
`
const ScoreBadge = props => (
  <BadgeContainer>
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white"/>
    </svg>
    <span style={{ paddingLeft: 3, color: 'white' }}>{ props.score }</span>
  </BadgeContainer>
)

const data = [
    {
      author: 'คุณสมใจ',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          “ดีมาก ๆ ให้คำแนะนำดี คุยสนุก ได้ความรู้เกี่ยวกับน้อง ๆ เพิ่มขึ้นเยอะเลย”
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment()
            .subtract(1, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
          <ScoreBadge score={4} />
        </Tooltip>
      ),
    },
    {
      author: 'คุณสมหมาย',
      avatar: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
      content: (
        <p>
          “คุณป้าใจดีมาก ๆ สนิทกับลูก ๆ เราเร็วมาก ทีแรกกังวลว่าจะเห่ามั้ย แต่พอถึงเวลาจริง ๆ หายห่วงเลย”
        </p>
      ),
      datetime: (
        <Tooltip
          title={moment()
            .subtract(2, 'days')
            .format('YYYY-MM-DD HH:mm:ss')}
        >
          <ScoreBadge score={5} />
        </Tooltip>
      ),
    },
  ];

export default data