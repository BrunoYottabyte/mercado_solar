import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";


export const ModalContent = ({ children, id }) => {
	const global = useGlobalContext();
	const [active, setActive] = useState(null);

	useEffect(() => {
		global.modalOpen.id === id ? setActive(true) : setActive(false);
	}, [global.modalOpen]);

	return (
		<>
			{active && (
				<div className={`modal-content ${active ? "active" : ""}`} data-id={id}>
					{children}
				</div>
			)}
		</>
	);
};


