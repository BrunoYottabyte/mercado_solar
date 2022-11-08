import { useEffect, useState } from "react";
import SvgUse from "../svg/svgUse";

const Tooltip = ({
	dark,
	children,
	arrow,
	direction,
	innerTooltip,
	text,
	time,
}) => {
	const [currentArrow, setCurrentArrow] = useState("#icon_arrow_bottom_light");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const isDark = dark && "dark"
		const isLight = !dark && "light"

		setCurrentArrow(`#icon_arrow_${direction}_${isDark || isLight}`)
	
	}, [direction, arrow, dark]);

	let interval;
	const handleToggle = (time, stado, enter) => () => {
		if (enter) clearTimeout(interval)
		interval = setTimeout(() => setOpen(stado), time);
	};

	return (
		<div
			className={`tooltip ${open ? "active" : ""}`}
			onMouseEnter={handleToggle(0, true, "entrou")}
			onMouseLeave={handleToggle(time, false)}
		>
			{children ? (
				children
			) : (
				<div className="tooltip-wrapper">
					<SvgUse id="#icon_info" />
					<p>{text}</p>
				</div>
			)}

			{/* Tooltip */}

			{
				<div className={`tooltip-element ${direction} ${dark && "dark"}`}>
					{innerTooltip}
					{arrow && <SvgUse id={currentArrow} />}
				</div>
			}


		</div>
	);
};

export default Tooltip;
