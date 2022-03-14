import { Row, Col } from 'antd';
import Head from 'next/head';

import { Navigation } from '@Components';

import type { NextPage } from 'next';

const Home: NextPage = () => {
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
				<Row gutter = {[ 14, 4 ]} className="card">
					<Col span={18} className="landing__card--large">
						BUY Book
					</Col>
					<Col span={6}>
						<Row gutter = {[ 4, 4 ]}>
							<Col className="landing__card--small" span={24}>
								Purchase
							</Col>
						</Row>
						<Row gutter = {[ 4, 4 ]}>
							<Col className="landing__card--small" span={24}>
			  					Rent
							</Col>
						</Row>
					</Col>
				</Row>
			</main>

			<footer >

			</footer>
		</>
	);
};

export default Home;
