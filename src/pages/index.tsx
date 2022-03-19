import { Row, Col, Space, Typography } from 'antd';
import Head from 'next/head';

import { HandCoinsIcon, ReusedBookIcon } from '@Assets';
import { Navigation } from '@Components';

import type { TypographyProps } from 'antd';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	const { Title }: Pick<TypographyProps, 'Title'> = Typography;

	return (
		<>
			<Head>
				<title>Buy Book</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<header>
				<Navigation/>
			</header>
			<main className="landing__content">
				<Space direction="vertical" size='large' style={{ width: '100%' }}>
					<Row gutter={[ 0,0 ]}>
						<Col span={24} className="landing__card--large">
							<Title>Get Books with Ease</Title>
							<p>Helo</p>
						</Col>
					</Row>
					<Row gutter={[ 20, 20 ]}>
						<Col span={4} className="landing__card--small">
							<ReusedBookIcon style={{ fontSize: '3rem' }}/>
						</Col>
						<Col span={20} className="">
							<Title level={2}>Lend a book</Title>
						</Col>
					</Row>
					<Row gutter={[ 20, 20 ]}>
						<Col span={4} className="landing__card--small">
							<HandCoinsIcon style={{ fontSize: '3rem' }}/>
						</Col>
						<Col span={20} className="">
							<Title level={2}>Purchase a used copy</Title>
						</Col>
					</Row>
				</Space>
			</main>

			<footer >

			</footer>
		</>
	);
};

export default Home;
