import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
export const Register = () => {

    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        navigate('/')
      };


      function handleOnClick() {
        const card = document.getElementById('card')
        if(card.classList.contains('active')) card.classList.remove('active')
        else card.classList.add('active')
    }
  return (

    <div className='form-box register-form'>
        <h3>Register</h3>
        <Form
          name="normal_login"
          className="register-inside-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <div onClick={handleOnClick}>login now!</div>
          </Form.Item>
        </Form>
      </div>
  )
}
