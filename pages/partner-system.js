import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

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
        <Link href="/partner-system/register">
            <Button>สมัครสมาชิก</Button>
        </Link>
        <Link href="/partner-system/login">
            <Button>เข้าใช้งานระบบ</Button>
        </Link>
    </Container>
)

export default PartnerSystem