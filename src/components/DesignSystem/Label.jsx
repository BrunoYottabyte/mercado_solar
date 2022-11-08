const Label = ({ children, classe,...props}) => {
	return (
		<label className={`label ${classe ? classe : ""}`} {...props}>
			{children}
		</label>
	);
};

export default Label;
