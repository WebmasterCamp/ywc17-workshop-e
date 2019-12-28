import React from 'react'
import { Layout as AntdLayout, Menu } from 'antd'
import styled from '@emotion/styled'

const { Header, Content, Footer: UnstyledFooter } = AntdLayout

const Footer = styled(UnstyledFooter)`
    text-align: center;
    background: #fefefe;
    display: ${props => props.hideFooter ? 'none' : 'block'} !important;
`

export const Layout = props => (
    <AntdLayout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '30px 50px', minHeight: '90vh' }}>
            {props.children}
        </Content>
        <Footer hideFooter={props.hideFooter}>WOW This is footer !</Footer>
    </AntdLayout>
)