import { LoginOutlined } from '@ant-design/icons';
import {  Button, Checkbox, Col ,Form, Input, Row, Typography } from 'antd';
import Head from 'next/head';
import * as React from 'react';

import { Navigation } from '@Components';

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
					<Col span={12} className="login__content-container">
						<Title level={3}><LoginOutlined /> Login</Title>
						<Form
							name="login"
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
								rules={[ { required: true, message: 'Please input your email!' } ]}
							>
								<Input />
							</Form.Item>

							<Form.Item
								label="Password"
								name="password"
								rules={[ { required: true, message: 'Please input your password!' } ]}
							>
								<Input.Password />
							</Form.Item>

							<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
								<Checkbox>Remember me</Checkbox>
							</Form.Item>

							<Form.Item wrapperCol={{ offset: 12, span: 16 }}>
								<Button type="primary" htmlType="submit">
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