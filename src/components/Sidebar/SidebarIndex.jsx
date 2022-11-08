import React from "react";
import { GLOBAL } from "../../utils/GLOBAL";
import MenuList from "./MenuList.jsx";
import logoIMG from "../../assets/images/icon_logo_site.png";
import SvgUse from "../svg/svgUse.jsx";
import Svg from "../svg/svg";

const SidebarIndex = ({ menu, title }) => {
	const { debounce } = GLOBAL;

	const clickInside = (e) => {
		const firstMenu = document.querySelector('.sidebar-container[level="1"]');
		let lisLevel1 = [
			...firstMenu.closest("aside").querySelectorAll("li[level='1']"),
		];

		if (!firstMenu.contains(e.target)) {
			firstMenu.classList.remove("active");
			firstMenu.classList.remove("open-menu-fixed");

			//fechando os submenus
			lisLevel1.map((li) => li.classList.remove("active"));
			// Pondo logo mobile ao fechar modal
			firstMenu.querySelector(".logo-close").classList.remove("active");
			firstMenu.querySelector(".logo-open").classList.remove("active");
		} else {
			firstMenu.classList.add("open-menu-fixed");
		}
	};



	const handleMouseEnter = (e) => {
		const firstMenu = document.querySelector('.sidebar-container[level="1"]');
		if (!menu[0].nivel === 1) return;
		// Pondo logo desktop ao abrir modal
		firstMenu.querySelector(".logo-close").classList.add("active");
		firstMenu.querySelector(".logo-open").classList.add("active");

		firstMenu.classList.add("active");
		document.addEventListener("click", clickInside);
	};

	const handleMouseLeave = () => {
		const firstMenu = document.querySelector('.sidebar-container[level="1"]');
		const existActive = firstMenu.querySelectorAll(
			"ul li[level='1'].active"
		).length;

		if (!existActive && !firstMenu.classList.contains("open-menu-fixed")) {
			// Pondo logo mobile ao fechar modal
			firstMenu.querySelector(".logo-close").classList.remove("active");
			firstMenu.querySelector(".logo-open").classList.remove("active");

			document.removeEventListener("click", clickInside);
			firstMenu.classList.remove("active");
		}
	};

	const handleEnterOverflow = () => {
		const firstMenu = document.querySelector(".sidebar-container");
		if (!firstMenu.classList.contains("open-menu-fixed")) {
			handleMouseLeave();
		}
	};

	const back = (e) => {
		const nivel = e.target.closest("aside").attributes.level.value;
		const previousLiSelected = document.querySelector(
			`li.active[level="${nivel - 1}"]`
		);
		previousLiSelected.classList.remove("active");
	};

	const closeSidemenu = () => {
		document
			.querySelector(".sidebar-container")
			.classList.remove("active", "open-menu-fixed");

		document
			.querySelector(".sidebar-container li.active")
			.classList.remove("active");

		//Caso ele tenha ido até o segundo nivel do sidemenu 
		const lis = [...document.querySelectorAll("li[level='2']")];
		lis.map(li => {
			li?.classList?.remove("active");
		})

		handleMouseLeave();
	};

	return (
		<>
			<Svg />
			<aside
				className="sidebar-container"
				level={menu[0].nivel}
				onMouseEnter={() => debounce(150, handleMouseEnter, "menuOpen")()}
				onMouseLeave={() => debounce(150, handleMouseLeave, "menuOpen")()}
			>
				<header
					className={`relative header-menu${
						menu[0].nivel == 1 ? " border-b-[#cccccc3d] !border-b-[1px]" : ""
					}`}
					level={menu[0].nivel}
				>
					{menu[0]?.nivel == 1 ? (
						<div className="self-center">
							<img src={logoIMG} className="logo-close" />
							<img src={logoIMG} className="logo-open" />
						</div>
					) : (
						<div className="flex justify-center box-title h-[6rem] relative">
							{menu[0].nivel != 1 && <span className="line-horizontal"></span>}
							{menu[0].nivel == 2 && (
								<SvgUse class="icon-title" id={menu[0]?.svg}></SvgUse>
							)}
							<span
								className="hidden sm:!block"
								onClick={(e) => debounce(100, back, "menuOpen")(e)}
							>
								Voltar
							</span>
							<h1 className="text-lg font-medium title">{title}</h1>

							<span
								onClick={(e) => debounce(100, closeSidemenu, "menuOpen")(e)}
								className="hidden sm:!block"
							>
								Close
							</span>
						</div>
					)}
				</header>
				<ul>
					{menu.map((item) => (
						<MenuList key={item?.title} closeSidemenu={closeSidemenu} item={item} nivel={menu[0].nivel} />
					))}
				</ul>
			</aside>
		</>
	);
};

export default SidebarIndex;
