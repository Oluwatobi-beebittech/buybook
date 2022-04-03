import { EditOutlined , UserOutlined, LockOutlined } from '@ant-design/icons';
import {  Button, Checkbox, Col ,Form, Input, Row, Select, Typography } from 'antd';
import Head from 'next/head';
import * as React from 'react';

import { Navigation } from '@Components';

import type { TypographyProps } from 'antd';
import type { NextPage } from 'next';

const Register: NextPage = (): JSX.Element => {
	const { Title }: Pick<TypographyProps, 'Title'> = Typography;
	const { Option } = Select;
	const prefixSelector: JSX.Element = (
		<Form.Item name="prefix" noStyle>
		  <Select style={{ width: 80 }} defaultValue="234">
				<Option value="234">+234</Option>
		  </Select>
		</Form.Item>
	  );

	return (
		<>
			<Head>
				<title>Register</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<header>
				<Navigation/>
			</header>
			<main className="register__content">
				<Row justify="space-around" align="middle" className="register__content-row">
					<Col span={24} md={12} className="register__content-container">
						<Title level={3}><EditOutlined /> Register</Title>
						<Form
							name="register"
							colon={false}
							labelCol={{ span: 6 }}
							wrapperCol={{ span: 16 }}
							initialValues={{ remember: true }}
							requiredMark={false}
							autoComplete="off"
							scrollToFirstError
							validateTrigger="onBlur"
						>
							<Form.Item
								label="Firstname"
								name="first_name"
								rules={[ { required: true, message: 'Please input your first name', whitespace: true } ]}
							>
								<Input 	data-cy="first-name-cy" prefix={<UserOutlined style={{ color: '#8c8c8c' }} />} placeholder="Firstname" size="large"/>
							</Form.Item>
							<Form.Item
								label="Lastname"
								name="last_name"
								rules={[ { required: true, message: 'Please input your last name', whitespace: true } ]}
							>
								<Input 	data-cy="last-name-cy" prefix={<UserOutlined style={{ color: '#8c8c8c' }} />} placeholder="Lastname" size="large"/>
							</Form.Item>
							<Form.Item
								label="Email"
								name="email"
								rules={[
									{ required: true, message: 'Please input your email!', whitespace: true },
									{ type:'email', message: 'Text in the input does not match an email pattern' }
								 ]}
							>
								<Input 	data-cy="email-cy" prefix={<UserOutlined style={{ color: '#8c8c8c' }} />} placeholder="Email" size="large"/>
							</Form.Item>
							<Form.Item
								name="phone"
								label="Phone Number"
								rules={[
									{ required: true, message: 'Please input your phone number!' },
									{ pattern: new RegExp('\\d{10}'), message: 'Use the 10-digits of the phone number omitting the first 0' },
								]}
							>
								<Input 	data-cy="phone-cy" addonBefore={prefixSelector} style={{ width: '100%' }} type='tel'/>
							</Form.Item>
							<Form.Item
								label="Password"
								name="password"
								rules={[ { required: true, message: 'Please input your password!' } ]}
							>
								<Input.Password data-cy="password-main-cy" prefix={<LockOutlined style={{ color: '#8c8c8c' }}/>}  placeholder="Password" size="large"/>
							</Form.Item>
							<Form.Item
								label="Confirm Password"
								name="confirm_password"
								rules={[
									{ required: true, message: 'Please input your password confirmation!' },
									({ getFieldValue }) => ({
										validator(_, value) {
											if (!value || getFieldValue('password') === value)
												return Promise.resolve();

											return Promise.reject(new Error('The two passwords that you entered do not match!'));
										}
									})
							 	]}
							>
								<Input.Password data-cy="confirm-password-cy" prefix={<LockOutlined style={{ color: '#8c8c8c' }}/>}  placeholder="Confirm Password" size="large" visibilityToggle={false}/>
							</Form.Item>
							<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
								<Checkbox data-cy="remember-me-cy">Remember me</Checkbox>
							</Form.Item>
							<Form.Item wrapperCol={{ span: 3, offset: 6 }}>
								<Button data-cy="submit-cy" type="primary" htmlType="submit" size="large">
          							Submit
								</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</main>
		</>
	);
};

export default Register;