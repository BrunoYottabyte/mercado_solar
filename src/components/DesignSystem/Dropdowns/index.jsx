import { useEffect, useRef, useState } from "react";
import SvgUse from "../../svg/svgUse";


const Dropdowns = ({children, classe}) => {
  const dropdownContainer = useRef(null);

  const handleClick = () => {
    dropdownContainer.current.classList.add('active');
  }

  useEffect(() => {
    const handleToggle = (e) => {
			console.log(e.target.classList.contains('btn-cancel'))
      if(dropdownContainer.current && (!dropdownContainer.current.contains(e.target) || e.target.classList.contains('btn-cancel') ) ){
        dropdownContainer.current.classList.remove('active');
      }else{
        dropdownContainer.current.classList.add('active');
      }
    }
    document.addEventListener('click', handleToggle);
    return () => document.removeEventListener('click', handleToggle)
  })

  return (
    <div className={`dropdowns-container ${classe}`} ref={dropdownContainer}>
        {children}
    </div>
  )
}

export default Dropdowns;