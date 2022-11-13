import React, {useEffect, useState, useRef, forwardRef} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

//Simple
//state setstate
const SelectComponentReceptor = (
	{
		data,
		classe,
		classeSelect,
		placeholder,
		value,
		state,
		setStateCurrent,
		...opts
	},
	ref,
) => {
	// const [state, setState] = useState(value);
	const [init, setInit] = useState(null);

	useEffect(() => {
		const response = data.filter(pos => pos.value === value);
		setInit(response);
	}, [value]);

	useEffect(() => {
		setStateCurrent && setStateCurrent(state);
		const response = data.filter(pos => pos.value === state);
		setInit(response);
	}, [state]);

	return (
		<div className={`select-container ${classe}`}>
			<Select
				ref={ref}
				className={`select-container ${classeSelect}`}
				classNamePrefix="select"
				options={data}
				onChange={e => setStateCurrent(e.value)}
				value={init}
				placeholder={placeholder}
				{...opts}
			/>
			{/* 
	 				options={options}
        onChange={handleTypeSelect}
        value={options.filter(function(option) {
          return option.value === selectedOption;
        })}
        label="Single select"
			*/}
		</div>
	);
};

const SelectComponent = forwardRef(SelectComponentReceptor);

//Group
const SelectGroup = ({data, classe}) => {
	const [selectValue, setSelectValue] = useState([]);

	return (
		<div className={`select-container ${classe}`}>
			<Select
				className={`select-container select-multiple `}
				classNamePrefix="select"
				options={data}
				isMulti
				closeMenuOnSelect={false}
				onChange={e => setSelectValue(e)}
				defaultValue={[...selectValue]}
			/>
		</div>
	);
};

export {SelectGroup, SelectComponent};
