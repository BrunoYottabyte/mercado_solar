import { useEffect, useState, useRef } from "react";

const Toggle = ({
	classe,
	containerClass,
	text,
	state,
	setState,
	toggleChange,
	...props
}) => {
	const inputRef = useRef(null);

	return (
		<div
			className={`
			toogle-container ${containerClass ? containerClass : ""} 
			${state ? "active" : ""}`}
		>
			<span className="group-hover:outline-primary-pure"></span>
			<input
				value={state}
				onChange={(e) => {
					if (toggleChange)
						toggleChange(inputRef.current.attributes.produtoid.value);
				}}
				type="checkbox"
				ref={inputRef}
				
				{...props}
			/>
		</div>
	);
};

/* const Input = ({ classe, containerClass, value, svgID, ...props }) => {
	const [inputValue, setInputValue] = useState(value);

	return (
		<div className={`input-container ${containerClass ? containerClass : ""}`}>
			<input
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				type="text"
				className={`input ${classe ? classe : ""} ${
					inputValue?.length ? "active" : ""
				}`}
				{...props}
			/>

			{svgID ? <SvgUse id={svgID} /> : ""}
		</div>
	);
};
 */

export default Toggle;
