import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import Svg from "../../svg/svg";
import SvgUse from "../../svg/svgUse";
import { Input } from "../Input";

export const GlobalFilter = ({ filter, setFilter, placeholder,classe }) => {
	const [value, setValue] = useState(filter);
	const onchange = useAsyncDebounce((value) => {
		setFilter(value || undefined);
	}, 1000);

	return (
		<div className="relative md2:!min-w-full">
			<Input
			classe={`${classe} !rounded-md !px-14`}
			value={value || ""}
			type="text"
			placeholder={placeholder}
			onChange={(e) => {
				setValue(e.target.value);
				onchange(e.target.value);
			}}
		/>
		<SvgUse id="#search_icon" classe="w-20 h-20 absolute top-0 my-auto bottom-0 right-12"/>
		</div>
	);
};
