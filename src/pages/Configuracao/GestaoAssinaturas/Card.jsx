import React from 'react'
import Badge from '../../../components/DesignSystem/Badge'
import SvgUse from '../../../components/svg/svgUse'

const CardSystem = ({ active }) => {
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
            className='w-[350px] h-[215px] rounded-md p-24 bg-background-card flex flex-col justify-between relative'>
            <header className={`flex justify-between items-center ${!active ? 'blur-xs' : ''} `}>
                <SvgUse id="#icon-logo-full" classe="h-16 w-[100px]" />
                {
                    active && (
                        <Badge
                            title="Em uso"
                            classe="text-alert-green bg-alert-green/10"
                        />
                    )
                }
            </header>

            {
                !active && (
                    <div 
                    
                    className='flex justify-center items-center absolute top-0 rounded-tr-md rounded-tl-md left-0 w-full h-[140px] bg-white/10 '>
                        <div className='!cursor-pointer flex items-center gap-8 p-16 h-56 bg-white/10 rounded-md'>
                            <SvgUse id="#icon-lock" classe="w-24 h-24 !cursor-pointer" />
                            <p className='!cursor-pointer uppercase tracking-wider text-white font-medium'>Usar este cartão</p>
                        </div>
                    </div>
                )
            }

            <div className='flex items-center justify-between text-white'>
                <p className='font-medium text-lg tracking-widest'>
                    **** **** **** 4242
                </p>

                <div className='relative flex items-center'>
                    <p className='w-32 h-32 rounded-full bg-[#FF0000] absolute left-[-40px]'></p>
                    <p className='w-32 h-32 rounded-full bg-[#FF9900] absolute left-[-22px]'></p>
                </div>
            </div>
        </div>
    )
}

export default CardSystem