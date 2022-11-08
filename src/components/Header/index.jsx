import React, { useCallback } from "react";
import Avatar from "../DesignSystem/Avatar";
import Breadcrumb from "../DesignSystem/Breadcrumb";
import Dropdowns from "../DesignSystem/Dropdowns";
import DropdownContainer from "../DesignSystem/Dropdowns/DropdownContainer";
import DropdownItem from "../DesignSystem/Dropdowns/DropdownItem";
import SvgUse from "../svg/svgUse";
import { useGlobalContext } from "../../context/GlobalContext";
import { GLOBAL } from "../../utils/GLOBAL";

const handleScrollAtivo = () => {
	if (window.pageYOffset >= 20) document.body.classList.add("scroll-ativo");
	else if (window.pageYOffset < 50)
		document.body.classList.remove("scroll-ativo");
};



const Header = ({classeContainer, children}) => {
	const {debounce} = GLOBAL
	const { bread } = useGlobalContext();
	useCallback(() => window.addEventListener("scroll", handleScrollAtivo), []);

	const handleOpenSidemenu = () => {
		document.querySelector('.sidebar-container').classList.add('active');
	}

	return (
		<header className={`header-top md2:w-full ${classeContainer}`}>
			{/* start mobile */}
				{children}
			{/* end mobile */}
			<div className="content-header container flex items-center hidden">
				<div className="icon-home" onClick={debounce(100, handleOpenSidemenu, 'open-modal-mobile')}>
					<span></span><span></span><span></span>
				</div>
				<Breadcrumb data={bread} />
				<span className="flex-1"></span>
				<Dropdowns>
					<DropdownItem classe="none">
						<div className="btn-avatar-rounded md:p-0 md:h-auto">
							<Avatar classe="md " />
							<div className="flex items-center gap-4 md:hidden">
								<span className="font-medium text-sm ">Bruno Siqueira</span>
								<SvgUse id="#icon_arrow_left" classe="w-10 h-10" />
							</div>
						</div>
					</DropdownItem>

					<DropdownContainer classe="rounded-lg">
							<div className="item-dropdown">
								<p>Texto de Exemplo</p>
							</div>
							<div className="item-dropdown">
								<p>Texto de Exemplo</p>
							</div>
							<div className="item-dropdown">
								<p>Texto de Exemplo</p>
							</div>
					</DropdownContainer>

				</Dropdowns>
			</div>
		</header>
	);
};
export default Header;

// export const HeaderMobile = ({children, iconID}) => {
// 	return(
// 		<header className="header-mobile">
// 			<SvgUse id={iconID} />
// 			{children}
// 		</header>
// 	)
// }
