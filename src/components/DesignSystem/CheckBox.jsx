import React, { useState } from "react";

const CheckBox = ({ containerClass, children, check = false, ...props }) => {

	return (
		<label
			className={`checkbox-container ${containerClass ? containerClass : ""}`}
		>
			<input
				value={''}
				type="checkbox"
				{...props}
			/>
			{/* checked, onchange disponiveis pela aplicação */}
			<div className={`custom-checkbox`}>
				<span>
					<i></i>
				</span>
			</div>
			<span>{children}</span>
		</label>
	);
};

export default CheckBox;
