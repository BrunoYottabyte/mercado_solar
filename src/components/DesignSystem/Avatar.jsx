import React from 'react'
import SvgUse from '../svg/svgUse'


const Avatar = ({children, imageURL, classe}) => {
  return (
    <div className={`avatar-container ${classe}`}>
         <div className="perfil">
            {imageURL ? <img src={imageURL} alt="avatar-image" /> : <SvgUse id="#avatar_default"  />}
         </div>
         {children}   
    </div>
  )
}

export default Avatar