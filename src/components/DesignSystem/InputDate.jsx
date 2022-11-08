import React, { useState } from 'react'
import DatePicker, { registerLocale } from "react-datepicker";
import SvgUse from '../svg/svgUse';

import pt from 'date-fns/locale/pt-BR';
import moment from 'moment';

registerLocale('pt-BR', pt)

const months = [
	'Janeiro',
	'Fevereiro',
	'Março',
	'Abril',
	'Maio',
	'Junho',
	'Julho',
	'Agosto',
	'Setembro',
	'Outubro',
	'Novembro',
	'Dezembro'
];


const InputDate = ({ startDate, setStartDate, containerClass, noIcon,arrowIcon, classe, ...props }) => {

	return (
		<div className={`${containerClass || ''}  datepicker-container relative`}>
			<DatePicker
				className={`${classe && classe} md2:min-w-full`}
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				peekNextMonth
				showMonthDropdown
				locale="pt-BR"

				showYearDropdown
				dropdownMode="select"
				dateFormat="dd/MM/yyyy"
				autoComplete="off"
				{...props}

			/>
			{arrowIcon && <SvgUse id="#icon_arrow_left" classe="absolute w-10 h-10 rotate-[90deg] top-0 right-12 bottom-0 my-auto text-neutral-50" />}
			{!noIcon && <SvgUse classe="date-svg" id="#icon_date" />}
		</div>
	);
}

const InputDateRange = ({ dateRange, setDateRange, containerClass, noIcon,arrowIcon, classe, ...props }) => {
	const [startDate, endDate] = dateRange;

	return (
		<div className={`${containerClass || ''}  datepicker-container relative`}>
			<DatePicker
				className={`${classe && classe} md2:min-w-full`}
				onChange={(update) => {
					setDateRange(update);
				  }}
				startDate={startDate}
				endDate={endDate}
				selectsRange={true}
				// peekNextMonth
				// showMonthDropdown
				locale="pt-BR"
				// showYearDropdown
				// dropdownMode="select"
				dateFormat="dd/MM/yyyy"
				autoComplete="off"
				{...props}

			/>
			{arrowIcon && <SvgUse id="#icon_arrow_left" classe="absolute w-10 h-10 rotate-[90deg] top-0 right-12 bottom-0 my-auto text-neutral-50" />}
			{!noIcon && <SvgUse classe="date-svg" id="#icon_date" />}
		</div>
	);
}


export { InputDate, InputDateRange }
