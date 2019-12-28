import React from 'react'
import { Layout as AntdLayout, Menu } from 'antd'

const { Header, Content, Footer } = AntdLayout

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
        <Content style={{ padding: '0 50px', height: '90vh' }}>
            {props.children}
        </Content>
        <Footer style={{ textAlign: 'center', background: '#fefefe' }}>WOW This is footer !</Footer>
    </AntdLayout>
)