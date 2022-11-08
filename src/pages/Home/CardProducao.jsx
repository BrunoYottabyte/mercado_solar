import React from 'react'
import Badge from '../../components/DesignSystem/Badge'

const CardProducao = ({ title }) => {

    const handleClick = (e) => {
        let current = e.target;
        current.style.cursor = 'grab'
    }

    const handlePress = (e) => {
        let current = e.target;
        current.style.cursor = 'grabbing'
    }

    const handleLeave = (e) => {
        let current = e.target;
        current.style.cursor = 'grab'
    }

    return (
        <div
            onMouseDown={handlePress} onMouseLeave={handleLeave}
            onMouseUp={handleClick}
            onMouseEnter={handleClick}
            className='!w-full select-none min-h-[64px] rounded-r-md bg-neutral-10 border border-neutral-30 pl-16 pr-8 relative flex items-center justify-between'>
            <p className='absolute w-[3px] h-full bg-primary-pure top-0 left-0 rounded-r-md'></p>

            <div className='flex flex-col gap-10 pointer-events-none'>
                <h1 className='text-neutral-90 font-medium -mb-2'>{title}</h1>
                <Badge title="Quebra de estoque" />
            </div>
            <p className='text-2xl text-primary-40 font-semibold'>
                04
            </p>
        </div>
    )
}

export default CardProducao