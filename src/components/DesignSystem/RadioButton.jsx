import { useState, useRef, useEffect } from "react";

const RadioButton = ({ containerClass, texto, checked, ...props }) => {
	const [check, setCheck] = useState(checked);
	const input = useRef(null);

	useEffect(() => {
		check ? (input.current.checked = true) : (input.current.checked = false);
	}, [check]);

	return (
		<label
			className={`radio-container ${containerClass ? containerClass : ""}`}
		>
			<input
				ref={input}
				onClick={() => setCheck(true)}
				type="radio"
				{...props}
			/>

			<div className={`custom-radio`}>
				<span></span>
			</div>

			<span>{texto}</span>
		</label>
	);
};

export default RadioButton;
