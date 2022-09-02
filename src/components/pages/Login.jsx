import { Button, Checkbox, Form, Input } from 'antd';
import Password from 'antd/lib/input/Password';
import React from 'react';
import { useNavigate } from 'react-router';
import { setUser } from '../../redux/action/userAction';
import { httpLogin } from '../../services/postServices';
import { useDispatch } from 'react-redux/es/exports';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = async (values) => {
        const {data} = await httpLogin(values);
        if(data) {
            localStorage.setItem("token",data.token);
            localStorage.setItem("username",data.user_nicename);
            dispatch(setUser(data.user_display_name, data.user_email));
            navigate("/my-account");
        }
      };


    
      const onFinishFailed = (errorInfo) => {

      };
    return(<>
     <div className="loginForm">
     <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="نام کاربری"
        name="username"
        rules={[
          {
            required: true,
            message: 'لطفا نام کاربری خود را وارد نمایید',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="رمز عبور"
        name="password"
        rules={[
          {
            required: true,
            message: 'لطفا رمز عبور خود را وارد نمایید',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>مرا به خاطر بسپار</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          ورود
        </Button>
      </Form.Item>
    </Form>
     </div>
    </>);

}

export default Login;