
import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
	{
		Header: "ID",
		accessor: "id",
		// Filter: ColumnFilter,
		disableFilters: true
	},
	{
		Header: "First Name",
		accessor: "first_name",
		// Filter: ColumnFilter,

	},
	{
		Header: "Last Name",
		accessor: "last_name",
		// Filter: ColumnFilter,
		
	},
	{
		Header: "Date od Birth",
		accessor: "date_of_birth",
		// Cell: ({value}) => format(new Date(value), 'dd/MM/yyyy'),
		// Filter: ColumnFilter,
		
	},
	{
		Header: "Country",
		accessor: "country",
		// Filter: ColumnFilter,
		
	},
	{
		Header: "Phone",
		accessor: "phone",
		// Filter: ColumnFilter,
		
	},
];


