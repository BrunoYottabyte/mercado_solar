import SvgUse from "../svg/svgUse";

const Title = ({classe, children, svgID, ...props}) => {
  return (
	<p className={`title ${classe}`} {...props}>  
		{svgID ? <SvgUse id={svgID} /> : ""}
		{children}
	</p>
  )
}

export default Title
