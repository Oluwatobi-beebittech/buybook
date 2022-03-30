import Head from "next/head";
import * as React from "react";

import { Navigation } from "@Components";

import type { NextPage } from "next";

const Register: NextPage = (): JSX.Element => (
	<>
		<Head>
			<title>Register</title>
			{/* <link rel="icon" href="/favicon.ico" /> */}
		</Head>
		<header>
			<Navigation/>
		</header>
	</>
);

export default Register;