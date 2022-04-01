import { Button, Col, Row, Space, Typography } from 'antd';
import Head from 'next/head';

import { HandCoinsIcon, ReusedBookIcon } from '@Assets';
import { Navigation } from '@Components';

import type { TypographyProps } from 'antd';
import type { NextPage } from 'next';

const Home: NextPage = (): JSX.Element => {
	const { Paragraph, Title }: Pick<TypographyProps, 'Paragraph'|'Title'> = Typography;

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
							<Paragraph>Discover book lovers and get access to their collection of books.</Paragraph>
							<Button type="primary" className="landing__content-cta" size="large">Explore</Button>
						</Col>
					</Row>
					<Row gutter={[ 20, 20 ]}>
						<Col span={4} className="landing__card--small">
							<ReusedBookIcon />
						</Col>
						<Col span={20} className="">
							<Title level={3}>Lend a book</Title>
							<Paragraph>
								Not ready to buy a book? Lend a book easily from it&rsquo;s owner seamlessly.
							</Paragraph>
						</Col>
					</Row>
					<Row gutter={[ 20, 20 ]}>
						<Col span={4} className="landing__card--small">
							<HandCoinsIcon />
						</Col>
						<Col span={20} className="">
							<Title level={3}>Purchase a used copy</Title>
							<Paragraph>
								You may consider getting a new book to be expensive for your pocket and the environment.
								Purchase used books in good condition and enjoy the savings:
								to your pocket and to the environment.
							</Paragraph>
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
