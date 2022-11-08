
const DropdownContainer = ({ children, classe = "" }) => {

	return (
		<div className={`dropdown-body ${classe}`} >
			{children}
		</div>
	)
}

export default DropdownContainer