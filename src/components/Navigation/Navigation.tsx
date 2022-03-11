import Link from 'next/link';
import * as React from 'react';

export const Navigation = () => (
	<nav className = "nav">
		<div>
			<h1>Buy Book</h1>
			<ul>
				<li className="nav__link">
					<Link href='/'>
						<a>	About</a>
					</Link>
				</li>
				<li className="nav__link">
					<Link href='/'>
				Register
					</Link>
				</li>
				<li className="nav__link">
					<Link href='/'>
				Login
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);
