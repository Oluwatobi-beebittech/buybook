import { Menu } from 'antd';
import * as React from 'react';

export const Navigation = () => (
	<Menu onClick={()=> console.log('Yes')} selectedKeys={[ 'mail' ]} mode="horizontal">
		<Menu.Item key="mail">
          Navigation One
		</Menu.Item>
	</Menu>
);
