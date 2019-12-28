import { Button } from "antd";
import styled from "@emotion/styled";

export default ({ children, full, onClick, disabled }) => {
  const OurButton = styled(Button)`
    border-radius: 8px 8px 8px 8px;
    font-size: 15px;
    color: #ffffff;
    background: #cf4e4e;
    width: ${props => (props.full ? "100%" : "auto")};
  `;
  return (
    <>
      <OurButton onClick={onClick} full disabled={disabled}>
        {children}
      </OurButton>
    </>
  );
};
