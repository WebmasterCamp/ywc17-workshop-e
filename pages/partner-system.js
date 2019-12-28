import React from 'react'
import styled from '@emotion/styled'

import Login from '../components/Partner/login'

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const PartnerSystem = () => (
    <Container>
        <Login />
    </Container>
)

export default PartnerSystem