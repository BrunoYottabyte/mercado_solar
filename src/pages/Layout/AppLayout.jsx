import React, {useEffect} from 'react';
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
import {useGlobalContext} from '../../context/GlobalContext';

const AppLayout = () => {
	const {userType} = useAuthContext();
	const {isMobile} = useGlobalContext();
	let menuList;
	const [suportOption, setSuportOption] = React.useState({
		title: 'Suporte técnico',
		nivel: 1,
		svg: '#icon_support_ms',
		external: 'https://web.whatsapp.com/send/?phone=5584987227633',
	});

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

	useEffect(() => {
		if (isMobile) {
			setSuportOption({
				title: 'Suporte',
				nivel: 1,
				svg: '#icon_support_ms',
				external: 'https://api.whatsapp.com/send/?phone=5584987227633',
			});
		}
	}, [isMobile]);

	useEffect(() => {
		ownerMenu.push(suportOption);
	}, []);

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
