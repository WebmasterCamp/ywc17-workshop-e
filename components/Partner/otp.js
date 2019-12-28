import React, { Fragment } from 'react'
import OTPInput, { ResendOTP } from 'otp-input-react'

const OTPBox = props => {
    return (
        <Fragment>
            <OTPInput
                value={props.OTP}
                onChange={props.setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                onChange={props.handleOTPChange}
            />
            <ResendOTP handelResendClick={() => console.log("Resend clicked")} />
        </Fragment>
    )
}

export default OTPBox