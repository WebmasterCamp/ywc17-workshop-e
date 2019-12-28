import styled from "@emotion/styled";
export default ({ name, description, age, score, onClick, margin }) => {
  const Card = styled.div`
    background: #ffffff;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 8px;
    display: flex;
    cursor: pointer;
    margin: ${props => props.margin};
  `;

  const Image = styled.div`
    background-image: ${props =>
      props.imageURL && "url(" + props.imageURL + ")"};
    background-position: center;
    background-size: cover;
    width: 102px;
  `;

  const Price = styled.span`
    font-family: Pridi;
    font-size: 14px;
    line-height: 22px;
    color: #383838;
  `;

  const Description = styled.div`
    font-family: Pridi;
    font-size: 12px;
    line-height: 15px;
    color: #8c8c8c;
  `;

  const TopicContainer = styled.div`
    font-family: Pridi;
    font-size: 15px;
    line-height: 23px;
    color: #383838;
    display: flex;
    align-items: center;
    & span {
      margin-left: 4px;
    }
  `;

  const PointsContainer = styled.div`
    font-family: Pridi;
    font-size: 14px;
    line-height: 22px;
    color: #ff8329;
    display: flex;
    align-items: center;
    & span {
      margin-right: 4px;
    }
  `;

  const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 8px 12px;
  `;

  const ColumnContainer = styled.div`
    margin-bottom: 2px;
  `;
  return (
    <Card onClick={onClick} margin={margin}>
      <Image imageURL="../../images/caretaker-1.jpg" />
      <InfoContainer>
        <ColumnContainer>
          <TopicContainer>
            <span>
              {name} ({age} ปี)
            </span>
            <img src="../../icons/verified.svg" />
          </TopicContainer>
          <Description>{description}</Description>
          <Price>200 บาท/ วัน</Price>
        </ColumnContainer>
        <ColumnContainer>
          <PointsContainer>
            <span>{score}</span>
            <img src="../../icons/star.svg" />
          </PointsContainer>
          <Description> 3 ก.ม.</Description>
        </ColumnContainer>
      </InfoContainer>
    </Card>
  );
};
