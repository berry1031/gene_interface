import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


import './styles/logInStyle.scss';

const Login = () => {

    const onFinish = values => {
        console.log('Received values of form: ', values);
      };
      
    return(
        <div className="login-container login-part">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                    required: true,
                    message: '请输入您的用户名或者邮箱',
                    },
            ]}
            >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名/邮箱" />
            </Form.Item>
            <Form.Item
            name="password"
            rules={[
                {
                required: true,
                message: '请输入您的密码!',
                },
            ]}
            >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
            />
            </Form.Item>
            <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
                忘记密码
            </a>
            </Form.Item>

            <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
            </Button>
           
            </Form.Item>
        </Form>
  </div>
);
       

}

export default Login;

