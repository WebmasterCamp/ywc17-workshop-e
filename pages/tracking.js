import useUserInfo from "../hooks/user";
import styled from "@emotion/styled";

export default () => {
  const [userInfo] = useUserInfo();
  console.log(userInfo);
  const lastestOrder = userInfo.orders[userInfo.orders.length - 1];
  const Image = styled.div`
    border-radius: 8px;
    width: 121px;
    height: 121px;
    background-image: url("https://s3-alpha-sig.figma.com/img/1e52/c393/d2b551a03083bf1fff37c440ae75a317?Expires=1578268800&Signature=Heyq1qPU6oo~0OSTUC-sew0A8FB0kEOOHnmLRkOYQNeCaTYdHIG0pP1jv8v74BrNOrVSgQEUhkBaq1tIGexvpJZI3PBaaEi4jFAgaO92l7JpcD2zzSIyUB05SLo3hQXaM6DG~AgBG-dPOXmBgSqSBiQBijNceCKUQUDPXCRpf0BP8Tcne9XROjvpRi8ZjxNMizZQITKAxOkcPClvTA9MEhLt6ce9ru7eLqGqwe~Gv0x17OKurF3erzP~Mv9MC2rvyWnmU6Oq3LbalAxHzUBdPwONO0PgwFRBt-QGoa3O589lPKrYO4X3PI~n6fUKQEyzqwpZ~I9OrNzQcajdnk-tvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
    background-position: center;
    background-size: cover;
  `;
  const MainText = styled.span`
    color: #383838;
  `;
  const InfoText = styled.span`
    font-family: Pridi;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 23px;
    color: #8c8c8c;
  `;
  const InfoMain = styled.span`
    font-family: Pridi;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 23px;
    color: #383838;
  `;
  const Line = styled.div`
    width: 80%;
    margin: 5px 20px;
    border: 1px solid #e3e3e3;
  `;
  const TrackingCard = styled.div`
    background: #ffffff;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 12px 11px;
    font-family: Pridi;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 23px;
    margin: 16px 0px;
  `;

  const Main = styled.div`
    padding: 16px 24px;
  `;

  const Circle = styled.span`
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    font-family: Pridi;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    width: 30px;
    height: 25px;
    /* identical to box height */
    color: #bdbdbd;
    border-radius: 20px;
    margin-right: 14px;
  `;
  return (
    <Main className="container">
      <div className="row">
        <Image />
        <div>
          <MainText>น้องแมวเหมียว</MainText>
          <div>
            <InfoMain>ประเภทสัตว์</InfoMain>
            <InfoText>แมว เปอร์เซีย</InfoText>
          </div>
          <div>
            <InfoMain>วันเริ่มฝาก</InfoMain>
            <InfoText>28 ธ.ค. 2562</InfoText>
          </div>
          <div>
            <InfoMain>วันรับน้อง</InfoMain>
            <InfoText>29 ธ.ค. 2562</InfoText>
          </div>
        </div>
      </div>
      <Line />
      <TrackingCard>
        หวีขนให้แมว
        <Image />
        <Line />
      </TrackingCard>

      <TrackingCard>
        <Circle>2</Circle>ให้อาหารแมว
      </TrackingCard>
      <TrackingCard>
        {" "}
        <Circle>3</Circle>ให้ขนมแมว
      </TrackingCard>
      <TrackingCard>
        {" "}
        <Circle>4</Circle>พาไปเดินเล่น
      </TrackingCard>
    </Main>
  );
};
