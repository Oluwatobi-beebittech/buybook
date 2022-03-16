import { Row, Col, Space, Typography } from 'antd';
import Head from 'next/head';

import { Navigation } from '@Components';

import type { TypographyProps } from 'antd';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	const { Title }: Pick<TypographyProps, 'Title'> = Typography;

	return (
		<>
			<Head>
				<title>Buy Book</title>
				<meta name="description" content="Buy Book" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<header>
				<Navigation/>
			</header>
			<main className="landing__content">
				<Row gutter={[ 14,10 ]}>
					<Col span={24} md = {18} className="landing__card--large">
						<Title>Finding a book?</Title>
					</Col>
					<Col span={24} md={6}>
						<Space direction="vertical" style={{ width: "100%" }}>
							<Col className="landing__card--small" span={24}>
								<Title level={3}>Purchase</Title>
							</Col>
							<Col className="landing__card--small" span={24}>
								<Title level={3}>Rent</Title>
							</Col>
						</Space>
					</Col>
				</Row>
			</main>

			<footer >

			</footer>
		</>
	);
};

export default Home;
