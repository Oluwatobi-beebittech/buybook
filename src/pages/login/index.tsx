import { LoginOutlined , UserOutlined, LockOutlined } from '@ant-design/icons';
import {  Button, Checkbox, Col ,Form, Input, Row, Typography } from 'antd';
import Head from 'next/head';
import * as React from 'react';

import { Navigation } from '@components';

import type { TypographyProps } from 'antd';
import type { NextPage } from 'next';

const Login: NextPage = (): JSX.Element => {
	const { Title }: Pick<TypographyProps, 'Title'> = Typography;

	return (
		<>
			<Head>
				<title>Login</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<header>
				<Navigation/>
			</header>
			<main className="login__content">
				<Row justify="space-around" align="middle" className="login__content-row">
					<Col span={24} md={12} className="login__content-container">
						<Title level={3}><LoginOutlined /> Login</Title>
						<Form
							name="login"
							colon={false}
							labelCol={{ span: 6 }}
							wrapperCol={{ span: 16 }}
							initialValues={{ remember: true }}
							requiredMark={false}
							autoComplete="off"
							scrollToFirstError
						>
							<Form.Item
								label="Email"
								name="email"
								rules={[ { required: true, message: 'Please input your email!', whitespace: true } ]}
							>
								<Input prefix={<UserOutlined style={{ color: '#8c8c8c' }} />} placeholder="Email" size="large"/>
							</Form.Item>
							<Form.Item
								label="Password"
								name="password"
								rules={[ { required: true, message: 'Please input your password!' } ]}
							>
								<Input.Password prefix={<LockOutlined style={{ color: '#8c8c8c' }}/>}  placeholder="Password" size="large"/>
							</Form.Item>
							<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
								<Checkbox>Remember me</Checkbox>
							</Form.Item>
							<Form.Item wrapperCol={{ span: 3, offset: 6 }}>
								<Button type="primary" htmlType="submit" size="large">
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

export default Login;