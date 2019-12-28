import { Button } from "antd";
import styled from "@emotion/styled";

export default ({ children }) => {
  const OurButton = styled(Button)`
    border-radius: 8px 8px 8px 8px;
    font-size: 15px;
    color: #ffffff;
    background: #cf4e4e;
  `;
  return (
    <>
      <OurButton>{children}</OurButton>
    </>
  );
};
