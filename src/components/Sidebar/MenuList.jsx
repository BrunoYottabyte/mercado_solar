import React, {useRef} from 'react';
import Svg from '../svg/svg';
import SvgUse from '../svg/svgUse';
import SidebarIndex from './SidebarIndex';
import {useLocation, useNavigate} from 'react-router-dom';

const MenuList = ({item, nivel, closeSidemenu}) => {
	const location = useLocation();
	const navigate = useNavigate();

	const ref_li = useRef();
	const handleClick = () => {
		if (item.href) {
			document.location.href = item.href;
		}
		const aside = ref_li.current.closest('aside');
		if (aside.attributes.level.value == 1) {
			// Limpando todas as outras possíveis classes ativas
			let lisLevel1 = [...aside.querySelectorAll("li[level='1']")];
			lisLevel1.map(li => li.classList.remove('active'));
			ref_li.current.classList.add('active');
		}
	};

	const handleMouseEnter = e => {
		const aside = e.target.closest('aside');
		const nivel = aside?.attributes?.level?.value;
		if (nivel == 2) {
			const lis = aside.querySelectorAll('li[level="2"]');
			[...lis].map(li => li.classList.remove('active'));

			const li = e.target.closest('li');
			li.classList.add('active');
		}
	};

	const handleMouseLeave = e => {
		const aside = e.target.closest('aside');
		const nivel = aside?.attributes?.level?.value;
		if (nivel == 2) {
			const li = e.target.closest("li[level='2']");
			li?.classList?.remove('active');
		}
	};
	return (
		<li
			className={`flex items-center  ml-0 px-0 ${
				location?.pathname === item.link ? 'selected' : ''
			}`}
			ref={ref_li}
			level={nivel}
			link={item.link}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<span className="block absolute w-20 h-1 bg-neutral-100 bottom-0 left-0 right-0 mx-auto"></span>
			{nivel == 1 && <SvgUse classe="icon" id={item?.svg} />}
			<a
				onClick={() => {
					if (item.link) {
						navigate(`${item.link}`);
						setTimeout(closeSidemenu, 200);
					}
					if (item.external) {
						document.open(`${item.external}`, '_blanck', 'noopener=true');
					}
				}}
				className="name-section"
				level={nivel}>
				{item.title}
			</a>

			{item.submenu && <SidebarIndex menu={item.submenu} title={item?.title} />}
		</li>
	);
};

export default MenuList;
