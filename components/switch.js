import { Radio } from "antd";
import styled from "@emotion/styled";

export default ({ current, handleModeChange }) => {
  const TabButton = styled(Radio.Button)`
    border-radius: 8px 0px 0px 8px;
    font-size: 15px;
    color: #383838;
    &:hover {
      box-shadow: none;
      -webkit-box-shadow: none;
      color: #383838;
    }
  `;

  const TabContainer = styled(Radio.Group)`
    background: #ffffff;
    box-shadow: none;
  `;

  return (
    <div>
      <style jsx>
        {`
          .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
            background: #cf4e4e;
            color: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0);
          }
          .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
            box-shadow: none;
            -webkit-box-shadow: none;
          }
        `}
      </style>
      <TabContainer
        onChange={handleModeChange}
        value={current}
        style={{ marginBottom: 8 }}
      >
        <TabButton value="dogs">Horizontal</TabButton>
        <TabButton value="cats">Vertical</TabButton>
      </TabContainer>
    </div>
  );
};
