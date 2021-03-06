import Head from 'next/head';
import * as React from 'react';

import { Navigation } from '@components';

import type { NextPage } from 'next';

const About: NextPage = (): JSX.Element => (
	<>
		<Head>
			<title>About</title>
			{/* <link rel="icon" href="/favicon.ico" /> */}
		</Head>
		<header>
			<Navigation/>
		</header>
	</>
);

export default About;