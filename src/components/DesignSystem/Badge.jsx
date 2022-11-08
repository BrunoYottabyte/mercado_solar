import React from 'react'
import SvgUse from '../svg/svgUse'

const Badge = ({title, classe, iconID, classeTitle}) => {
  return (
    <div className={`badge-container ${classe}`}>
       {iconID && <SvgUse id={iconID} />}
       <p className={`paragraph1 ${classeTitle}`}>{title}</p>
    </div>
  )
}

export default Badge