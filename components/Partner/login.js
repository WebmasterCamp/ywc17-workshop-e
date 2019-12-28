import React, { Fragment, useState, useCallback } from 'react'
import { Input, Button } from 'antd'
import OTPBox from './otp'

const Login = () => {
    const [ isConfirmTelNo, setIsConfirmTelNo ] = useState(false)
    const [ OTP, setOTP ] = useState('')
    const handleOTPChange = useCallback(() => {
        if(OTP.length === 6) {
            console.log('wow')
        }
    })
    return (
        <Fragment>
            <h1>ใส่เบอร์โทรศัพท์</h1>
            <Input disabled={isConfirmTelNo} />
            { isConfirmTelNo ?
                <Fragment>
                    <OTPBox OTP={OTP} setOTP={setOTP} handleOTPChange={handleOTPChange} />
                    <Button type='primary' onClick={() => setIsConfirmTelNo(false)}>แก้ไขเบอร์โทรศัพท์</Button>
                </Fragment> : (
                    <Button type='primary' onClick={() => setIsConfirmTelNo(true)}>ยืนยันเบอร์โทรศัพท์</Button>
                )
            }

        </Fragment>
    )
} 


export default Login