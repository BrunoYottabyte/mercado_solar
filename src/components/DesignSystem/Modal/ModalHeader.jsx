import { useGlobalContext } from "../../../context/GlobalContext";
import Svg from "../../svg/svg";
import SvgUse from "../../svg/svgUse";

export const ModalHeader = ({ text, close = true, className, iconID, iconClass }) => {
	const global = useGlobalContext();

	return (
		<header className={`modal-header ${className}`}>
			<Svg />
			<div className="flex items-center gap-8">
				{iconID && <SvgUse id={iconID} classe={`${iconClass}`}  />}
				{text}
			</div>
			{close && (
				<button
					type="button"
					onClick={() => global.setmodalOpen({ open: false, id: false })}
				>
					<SvgUse id="#icon_close" />
				</button>
			)}
		</header>
	);
};


