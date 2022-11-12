import React, { lazy } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";

export const Modal = ({ children, aberto = false, className }) => {
	const global = useGlobalContext();

	return (
		<>
			<div
				className={`modal ${className} ${global.modalOpen?.position ? "right" : ""} ${global.modalOpen.open ? "active" : ""}`}
				data-id={global.modalOpen.id ? global.modalOpen.id : null}
			>
				{children}
			</div>
			<div
				className={`modal-fundo ${global.modalOpen.open ? "active" : ""}`}
				onClick={() => {
					console.log(global.modalOpen)
					global.modalOpen?.position ? global.setmodalOpen({ open: false, id: false, position: 'right' }) : global.setmodalOpen({ open: false, id: false })
				}}

			></div>
		</>
	);
};
