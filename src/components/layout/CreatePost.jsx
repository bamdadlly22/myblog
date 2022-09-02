import { Button, Checkbox, Form, Input, Radio} from 'antd';
import React from 'react';
const { TextArea } = Input;
const CreatePost = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{padding:"20px 300px"}}>
    <Form
      name="basic"
      labelCol={{
        span: 3,
      }}
      wrapperCol={{
        span: 21,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="عنوان"
        name="title"
        rules={[
          {
            required: true,
            message: 'لطفا عنوان مطلب را وارد نمایید',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="متن" name="content" rules={[
          {
            required: true,
            message: 'لطفا متن را وارد نمایید',
          },
        ]}>
          <TextArea rows={5} />
        </Form.Item>

        <Form.Item label="انتخاب وضعیت" name="requiredMarkValue" rules={[
          {
            required: true,
            message: 'لطفا وضعیت مطلب را وارد نمایید',
          },
        ]}>
        <Radio.Group>
          <Radio.Button value>منتشر شده</Radio.Button>
          <Radio.Button value="optional">پیش نویس</Radio.Button>
        </Radio.Group>
        </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          انتشار
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default CreatePost;