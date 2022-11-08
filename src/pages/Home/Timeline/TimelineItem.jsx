import React from 'react'

const TimelineItem = ({title, active, children}) => {
  return (
    <div className='pl-28 relative '>
        <div className='flex items-center mb-8'>
            <span className={`${active ? 'border border-primary-pure shadow-3xl' : ""}    absolute -left-[11px] z-[9999] block w-[24px] h-[24px] bg-neutral-30 rounded-full`}>
               
                    <span className=' left-0 right-0 top-0 bottom-0 m-auto absolute w-[8px] h-[8px] bg-primary-pure rounded-full'>

                    </span>
                
            </span>
            <p>{title}</p>
        </div>
        {children}
    </div>
  )
}

export default TimelineItem