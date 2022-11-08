import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { menuItems } from "../components/Sidebar/items";
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
	const [modalOpen, setmodalOpen] = useState({ open: false, id: null });
	const [bread, setBread] = useState({});
	const location = useLocation();

	const closeModal = () => setmodalOpen({ open: false, id: false, })

	//Mudar breadcrumb de acordo com a rota
	useEffect(() => {
		// const url = location?.pathname;
		// const comparation = (i) =>
		// 	i.submenu?.find(
		// 		(sub) => sub.link?.replaceAll("/", "") === url.replaceAll("/", "")
		// 	);

		// const currentPath = menuItems
		// 	?.map(comparation)
		// 	?.filter((i) => i)
		// 	?.reduce((acc, i) => acc, {});

		// currentPath.breadCrumb && setBread(currentPath.breadCrumb);

		// if (!currentPath) {
		// 	const currentPathNV1 = menuItems.find(res => console.log(res));

		// }

	}, [location]);

	return (
		<GlobalContext.Provider
			value={{
				modalOpen,
				setmodalOpen,
				bread,
				setBread,
				closeModal
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
