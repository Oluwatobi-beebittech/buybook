import Icon from '@ant-design/icons';
import * as React from 'react';

const HandCoinsSVG: React.FC = (): JSX.Element => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		role="img"
		width="1em"
		height="1em"
		preserveAspectRatio="xMidYMid meet"
		viewBox="0 0 24 24">
		<path
			fill="currentColor"
			d="M5 9a1 1 0 0 1 1 1a6.97 6.97 0 0 1 4.33 1.5h2.17c1.333 0 2.53.58 3.354 1.5H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.79 0-5.15-.603-7.06-1.658A.998.998 0 0 1 5 20H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3zm1.001 3L6 17.022l.045.032C7.84 18.314 10.178 19 13 19c3.004 0 5.799-1.156 7.835-3.13l.133-.133l-.12-.1a2.994 2.994 0 0 0-1.643-.63L19 15h-2.111c.072.322.111.656.111 1v1H8v-2l6.79-.001l-.034-.078a2.501 2.501 0 0 0-2.092-1.416L12.5 13.5H9.57A4.985 4.985 0 0 0 6.002 12zM4 11H3v7h1v-7zm14-6a3 3 0 1 1 0 6a3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-7-5a3 3 0 1 1 0 6a3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2z"/>
	</svg>);

const ReusedBookSVG: React.FC = (): JSX.Element => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		role="img"
		width="1em"
		height="1em"
		preserveAspectRatio="xMidYMid meet"
		viewBox="0 0 24 24">
		<path fill="currentColor"
			d="M13.5 20c.31.75.76 1.42 1.32 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7.03c-.16-.03-.33-.03-.5-.03c-.5 0-1 .07-1.5.18V4h-5v8l-2.5-2.25L8 12V4H6v16h7.5m5.5 0a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5V20m0-6.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4Z"/>
	</svg>
);


type IconProps = typeof Icon;
export const HandCoinsIcon: React.FC<IconProps> = (props): JSX.Element =>
	(<Icon component={HandCoinsSVG} {...props} />);

export const ReusedBookIcon: React.FC<IconProps> = (props): JSX.Element =>
	(<Icon component={ReusedBookSVG} {...props} />);

