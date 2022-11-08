import React, { useEffect, useRef, useState } from "react"
import SvgUse from "../../svg/svgUse";

const DropdownItem = ({ children, classe, icon, iconID, ...props }) => {
	const item = useRef(null);
	const [height, setHeight] = useState(false);

	useEffect(() => {
		setHeight(item.current.scrollHeight);
		item.current.closest(".dropdowns-container")
			.style.setProperty("--height", height + "px")

	}, []);


	return (
		<div
			{...props}
			ref={item}
			className={`dropdown-header  ${classe ? classe : "header-default"} ${icon ? icon : ""
				}`}
		>
			{children}
			{iconID && <SvgUse id={iconID} />}
		</div>
	);
};

export default DropdownItem;
