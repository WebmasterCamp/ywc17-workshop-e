import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Button = styled.button`
    background: #0A2248;
    border-radius: 8px;
    padding: 20px 30px;
    color: white;
    outline: none;
    border: none;
    width: 200px;
    margin: 20px 0;
    font-size: 20px;
    cursor: pointer;
`
const PartnerSystem = () => (
    <Container>
        <Button>สมัครสมาชิก</Button>
        <Button>เข้าใช้งานระบบ</Button>
    </Container>
)

export default PartnerSystem