import { useState } from "react";
import SvgUse from "../svg/svgUse";

const TextArea = ({value, containerClass, classe, svgID, ...props }) => {
	return (
	<div className={`textarea-container ${containerClass ? containerClass : "" }`}>
            <textarea
                {...props}
                value={value}
                className={`textarea ${classe}  ${String(value).length && "active"}`}
            >
                {/* ONCHANGE DISPONIVEIS PELA APLICAÇÃO | CADA UM NO SEU CONTEXTO... */}
            </textarea>
            {svgID && <SvgUse id={svgID} />}
        </div>
	);
};

export default TextArea;
