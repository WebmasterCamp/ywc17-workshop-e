import React from "react";
import { Layout as AntdLayout, Menu } from "antd";
import styled from "@emotion/styled";
import Newnarbar from "./newnarbar";

const { Header, Content, Footer: UnstyledFooter } = AntdLayout;

const Footer = styled(UnstyledFooter)`
  text-align: center;
  background: #fefefe;
  display: ${props => (props.hideFooter ? "none" : "block")} !important;
`;

export const Layout = props => (
  <AntdLayout className="layout">
    <Newnarbar />
    <Content
      style={{ padding: "30px 20px", minHeight: "90vh", background: "white" }}
    >
      {props.children}
    </Content>
    <Footer hideFooter={props.hideFooter}>WOW This is footer !</Footer>
  </AntdLayout>
);
