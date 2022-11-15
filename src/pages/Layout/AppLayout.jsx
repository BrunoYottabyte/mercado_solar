import React from 'react';
import Sidebar from '../../components/Sidebar/SidebarIndex';
import {
	menuItems,
	ownerMenu,
	adminMenu,
	representativeMenu,
	inegratorMenu,
} from '../../components/Sidebar/items';
import Svg from '../../components/svg/svg';
import {Outlet} from 'react-router-dom';
import Header from '../../components/Header';
import {useAuthContext} from '../../context/useAuthContext';

const AppLayout = () => {
	const {userType} = useAuthContext();
	let menuList;

	let typesUsers = {
		'': ownerMenu,
		user: ownerMenu,
		admin: adminMenu,
		integrator: inegratorMenu,
		representative: representativeMenu,
	};

	Object.keys(typesUsers).forEach(key =>
		key == userType ? (menuList = typesUsers[key]) : '',
	);

	return (
		<div>
			<Svg />
			<Sidebar menu={menuList} />

			<div className="app-content md2:mx-auto">
				<Header />
				<Outlet />
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default AppLayout;
