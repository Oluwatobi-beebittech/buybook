import { Html, Head, Main, NextScript } from 'next/document';

const BuyBookDocument = (): JSX.Element => {
	return (
		<Html lang='en'>
			<Head>
				<meta name="description" content="Buy Book" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,800&family=Nunito:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default BuyBookDocument;