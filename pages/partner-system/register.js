import React, { useState } from 'react'
import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import styled from '@emotion/styled';
import { Button } from '../partner-system'
import { Form, Input, DatePicker  } from 'antd'
import moment from 'moment'

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MockupBox = styled.div`
    width: 100%;
    background: #000;
    height: 300px;
`
const FormWrapper = styled.div`
    width: 80%;
`
class Register extends React.Component {
    state = {
        isOpenCamera: false,
        form: {
            firstName: '',
            lastName: '',
            citizenId: '',
            birthDate: null,
            address: ''
        }
    }

    handleOpenCameraChange = () => {
        const { isOpenCamera } = this.state
        this.setState({ isOpenCamera: !isOpenCamera })
    }

    autoFill = () => {
        this.setState({
            form: {
                firstName: 'ดุจดวง',
                lastName: 'โอชา',
                citizenId: '1102371239964',
                birthDate: moment('2019-12-17').format('YYYYMMDD').toString(),
                address: '99/199 หมู่ 90 แขวงบางบอน เขตบางบัว จ.หนวงบัวลำพู 12393'
            }
        })
    }

    handleInputOnChange = (e) => {
        this.setState({
            form: {
                [e.target.name]: e.target.value
            }
        })
    }

    render () {
        const { isOpenCamera } = this.state
        const { firstName, lastName, citizenId, address } = this.state.form
        return (
            <RegisterContainer>
                {
                    isOpenCamera ? <Camera onTakePhoto={this.autoFill} /> : <img className='py-5' src={'../../images/capture.svg'} />
                }
                <Button onClick={this.handleOpenCameraChange}>กดเพื่อเปิดกล้องถ่ายรูป</Button>
                <FormWrapper>
                    <Form>
                        <Form.Item label="ชื่อจริง"><Input name='firstName' value={firstName} onChange={this.handleInputOnChange} /></Form.Item>
                        <Form.Item label="นามสกุล"><Input name='lastName' value={lastName} onChange={this.handleInputOnChange} /></Form.Item>
                        <Form.Item label="หมายเลขบัตรประชาชน"><Input name='citizenId' value={citizenId} onChange={this.handleInputOnChange} /></Form.Item>
                        <Form.Item label="วัน / เดือน / ปี เกิด"><DatePicker/></Form.Item>
                        <Form.Item label="ที่อยู่"><Input.TextArea name='address' rows={3} value={address} onChange={this.handleInputOnChange} /></Form.Item>
                    </Form>
                </FormWrapper>
                <Button onClick={this.handleOpenCameraChange}>ยืนยันการสมัครสมาชิก</Button>
            </RegisterContainer>
        )
    }
}

export default Register 