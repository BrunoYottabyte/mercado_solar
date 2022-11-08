

const Accordions = ({children, classe, ...props}) => {
  return (

    <div className={`${classe ? classe : ""} accordions-container`}{...props}>
        {children}
    </div>
  )
}

export default Accordions