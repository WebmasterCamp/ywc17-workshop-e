import styled from "@emotion/styled";

export default () => {
  const Text = styled.div`
    font-family: Pridi;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 34px;
    color: #383838;
  `;
  return (
    <>
      <style jsx>
        {`
          .container {
            background: #ffffff;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
            height: 60px;
          }
          .col {
            padding-top: 10px;
            padding-right: 10px;
          }
          .god {
            width: 36px;
            height: 38px;
            text-align: right;
          }
          .row-a {
            display: flex;
            justify-content: space-between;
          }
          .a {
            margin-right: 20px;
          }
        `}
      </style>
      <div className="container">
        <div className="row-a justify-content-start align-items-center">
          <img
            className="col col-2 god"
            style={{ width: "10px" }}
            src="../icons/logo.svg"
          />
          <Text className="col col-2 a">Peterly</Text>
        </div>
      </div>
    </>
  );
};
