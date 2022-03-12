import Link from 'next/link';
import * as React from 'react';

export const Navigation = () => (
	<nav className = "nav">
		<span className="nav__header">Buy Book</span>
		<ul>
			<li className="nav__link">
				<Link href="/">
					<a>	About</a>
				</Link>
			</li>
			<li className="nav__link">
				<Link href="/">
				Register
				</Link>
			</li>
			<li className="nav__link">
				<Link href="/">
				Login
				</Link>
			</li>
		</ul>
	</nav>
);
