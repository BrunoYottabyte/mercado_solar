import React from 'react'
import { useState } from 'react';
import Toggle from '../../../components/DesignSystem/Toggle'

const Permissoes = ({state, setState, title}) => {
    return (
        <div className='border border-transparent border-b-neutral-20 relative py-8'>
            <div
                className='flex items-center gap-8 w-max'
                onClick={(e) => {
                    setState(!state)
                }}>
                <Toggle state={state} />
                <p className="cursor-pointer select-none">{title}</p>
            </div>
        </div>
    )
}

export default Permissoes