import {useEffect, useState, useRef} from "react";

const AccordionContent = ({children, id, classe}) => {
    const accordionRef = useRef(null);
    const [height, setHeight] = useState(0);


  return (
    <div ref={accordionRef} className={`accordion-content ${classe}`}   data-id={id}>
    <div className="content-container">
    {children}
    </div>
    </div>
  )
}

export default AccordionContent;