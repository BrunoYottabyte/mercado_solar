import { forwardRef, useState, useEffect, useRef } from "react";
import SvgUse from "../svg/svgUse";
import NumberFormat from "react-number-format";
import { GLOBAL } from "../../utils/GLOBAL";

const InputBase = (
	{ classe, containerClass, svgID, setStateCurrent, state, ...props },
	ref
) => {

	useEffect(() => {
		setStateCurrent && setStateCurrent(state, ref?.current);
	}, [state]);

	return (
		<div className={`input-container ${containerClass ? containerClass : ""}`}>
			<input
				value={state}
				type="text"
				className={`input ${classe ? classe : ""} ${
					state?.length ? "active" : ""
				}`}
				onChange={({ target }) => {
					setStateCurrent(target.value);
				}}
				ref={ref}
				{...props}
			/>

			{svgID ? <SvgUse id={svgID} /> : ""}
		</div>
	);
};
export const InputReceptor = forwardRef(InputBase);

export const InputMaskedNumeric = ({
	classe,
	containerClass,
	value,
	svgID,
	formater,
	setStateCurrent,
	state,
	placeholder,
	priceChange,
	...props
}) => {
	const inputRef = useRef(null);
	const { currencyMask } = GLOBAL;

	return (
		<div className={`input-container ${containerClass ? containerClass : ""}`}>
			<input
				ref={inputRef}
				className={`input ${classe ? classe : ""} ${
					state?.length ? "active" : ""
				}`}
				placeholder={placeholder}
				value={state && `R$ ${currencyMask(state)}`}
				onChange={(e) => {
			
					if (priceChange){
						priceChange(inputRef.current.attributes.produtoid.value, e);
					}else{	
						setStateCurrent(currencyMask(e.target.value))
					}


				}}
				{...props}
			/>

			{svgID ? <SvgUse id={svgID} /> : ""}
		</div>
	);
};

export const InputAddSubtract = ({containerClass, classe, state, setStateCurrent, addExternal, subtractExternal, ...props}) => {
	const addQtd = () => {
		setStateCurrent(value => Number(value) + 1);
	}
	
	const subtractQtd = () => {
			if(state == 1 || state == '') return
			setStateCurrent(value => Number(value) - 1);
	}
	return(
		<div className={`input-container group  ${containerClass ? containerClass : ""}`}>
			<div className={`input flex justify-between  group-hover:border-b-primary-pure select-none ${classe} !px-0`}>
				<div onClick={() => {
					if(setStateCurrent) subtractQtd();
					if(subtractExternal) subtractExternal();
				}}
				className="cursor-pointer  top-0 h-full flex items-center px-8"

				>
					<SvgUse id="#icon-subtract" classe="w-20 h-20" />
				</div>
					<input type="text" className="text-center bg-transparent outline-none w-full" value={state} onChange={(e) => {
						if(setStateCurrent) setStateCurrent(GLOBAL.onlyNumbers(e.target.value))
					}} {...props} />
				<div onClick={() => {
					if(setStateCurrent)addQtd();
					if(addExternal) addExternal();
				}}
					className="cursor-pointer right-0  top-0 h-full flex items-center px-8"
				>
				<SvgUse id="#icon-add-qtd" classe="w-20 h-20" />
				</div>
			</div>
		</div>
	)
}


export const Input = ({
	classe,
	containerClass,
	svgID,
	setStateCurrent,
	state,
	...props
}) => {
	// const [state, setState] = useState("");
	const inputRef = useRef(null);

	// useEffect(() => {
	// 	setStateCurrent && setStateCurrent(state, inputRef.current);
	// }, [state]);

	return (
		<div className={`input-container ${containerClass ? containerClass : ""}`}>
			<input
				
				value={state}
				type="text"
				className={`input ${classe ? classe : ""} ${
					state?.length ? "active" : ""
				}`}
				onChange={({ target }) => {
					setStateCurrent(target.value);
				}}
				ref={inputRef}
				{...props}
			/>

			{svgID ? <SvgUse id={svgID} /> : ""}
		</div>
	);
};
