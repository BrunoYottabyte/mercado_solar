import React from 'react'
import Badge from '../../../components/DesignSystem/Badge'
import SvgUse from '../../../components/svg/svgUse'

const History = ({pg}) => {
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
        onMouseDown={handlePress}  onMouseLeave={handleLeave}
        onMouseUp={handleClick}
        onMouseEnter={handleClick}
        className='items_history p-16 flex flex-col justify-between h-[155px] w-[340px] shadow-sm mb-24 border border-neutral-30 rounded-md ' >
            <div className='flex justify-between pointer-events-none'>
                <div>
                    <h1 className='text-lg font-semibold mb-4'>Plano mensal</h1>
                    <h2 className='text-2xl text-neutral-70 font-semibold'>R$ <span className='text-primary-pure'>25,00</span></h2>
                </div>

                <div className='h-40 w-40 rounded-full  bg-neutral-30 flex justify-center items-center'>
                    <SvgUse id="#icon-bank-note" classe="w-24 h-28" />
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <Badge title={`${pg ? "Pago" : "Pendente"}`} classe={`bg-alert-warning-100/10 text-[#D2AF00] ${pg ? '!bg-alert-green/10 !text-alert-green': ""} h-24`} />
                <p className='font-medium text-sm'>
                    20 de maio de 2022
                </p>
            </div>
        </div>
    )
}

export default History