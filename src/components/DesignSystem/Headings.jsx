import React from 'react'
import SvgUse from '../svg/svgUse'

const Title = ({classe = '', iconID, children}) => {
  return (
    <div className={`headings-container  ${classe}`}>
        {children}
        {iconID && <SvgUse id={iconID} />}
    </div>
  )
}

const Subtitle = ({classe = '', iconID, children}) => {
    return (
      <div className={`subtitle-container  ${classe}`}>
          {children}
          {iconID && <SvgUse id={iconID} />}
      </div>
    )
}
  

export {
    Title,
    Subtitle
}

