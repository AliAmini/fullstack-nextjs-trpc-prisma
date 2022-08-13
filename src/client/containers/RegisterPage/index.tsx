import { Button, Form, Input } from "antd";
import { FC, useCallback } from "react";

interface RegisterPageContainerProps {
  
}
 
interface IFormValues {
  fullName: string,
  email: string,
  password: string,
  rePassword: string
}

const RegisterPageContainer: FC<RegisterPageContainerProps> = () => {

  const formSubmitHandler = useCallback((values: IFormValues) => {
    
  }, []);
  
  return (
    <div className="register-page">
      <h2 className="page-title">Register</h2>

      <Form
        onFinish={formSubmitHandler}
        className="form"
      >
        {/* Full Name */}
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[ {required: true} ]}
        >
          <Input />
        </Form.Item>

        {/* Email */}
        <Form.Item
          label="Email"
          name="email"
          rules={[ {type: "email"}, {required: true} ]}
        >
          <Input />
        </Form.Item>

        {/* Password */}
        <Form.Item
          label="Password"
          name="password"
          rules={[ {min: 6}, {required: true} ]}
        >
          <Input.Password />
        </Form.Item>

        {/* Re-Password */}
        <Form.Item
          label="Confirm Password"
          name="rePassword"
          rules={[ 
            {required: true},
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The confirm password is not the same as password!'));
              },
            })
          ]}
        >
          <Input.Password />
        </Form.Item>


        <div className="form-btns">
          <Button className="form-btn" type="primary" htmlType="submit">Register</Button>
        </div>

      </Form>
    </div>
  );
}
 
export default RegisterPageContainer;