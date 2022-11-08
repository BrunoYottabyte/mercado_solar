import { forwardRef } from "react";
import SvgUse from "../svg/svgUse";

const ButtonBase = ({ children, iconID, classe, svgClass, ...props }, ref) => {
	return (
		<button ref={ref}  className={`btn ${classe?.length && classe}`} {...props}>
			{iconID && <SvgUse id={iconID} classe={svgClass && svgClass} />}
			{children}
		</button>
	)
}

const Button = forwardRef(ButtonBase);

export default Button;