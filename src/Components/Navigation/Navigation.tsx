import { CloseOutlined ,MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import * as React from 'react';

export const Navigation: React.FC = (): JSX.Element => {
	const [ isMenuOpen, setMenuOpen ] = React.useState<boolean>(false);
	const menuOptions = { fontSize: '24px', color: '#FFFFFF' };

	return (
		<nav className = "nav">
			<span className="nav__header">Buy Book</span>
			<ul className = {`nav__links--${isMenuOpen ? 'opened' : 'closed'}`}>
				<li className="nav__link">
					<Link href="/about">
						<a>	About</a>
					</Link>
				</li>
				<li className="nav__link">
					<Link href="/register">
				Register
					</Link>
				</li>
				<li className="nav__link">
					<Link href="/login">
				Login
					</Link>
				</li>
			</ul>
			<span className="nav__toggle-menu">
				{isMenuOpen
					? <CloseOutlined
						style={menuOptions}
						onClick={()=>setMenuOpen(false)}
					/>
					: <MenuOutlined
						style={menuOptions}
						onClick={()=>setMenuOpen(true)}
					/>}

			</span>
		</nav>
	);
};
