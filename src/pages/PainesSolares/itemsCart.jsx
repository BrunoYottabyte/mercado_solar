import React from 'react'
import SvgUse from '../../components/svg/svgUse'

const ItemsCart = () => {
	return (
		<div>
							<div className='p-24 flex gap-12'>
								<img src="../src/assets/images/paines-solares/img1.png" className='w-[7.5rem] h-[7.5rem] border border-neutral-100/10 rounded-md' />
								<div className='flex flex-col justify-between'>
										<div className='flex justify-between items-start'> 
											<p className='paragraph1'>Kit 12 Placas Painéis Solares Monocristalino 450 W Inmetro</p>
											<SvgUse id="#icon_trash_ms" classe="w-32 h-32 hover:cursor-pointer  shrink-0" />
										</div>
										<div className='flex justify-between items-center pr-24'>
											<span className='text-neutral-70 headline3'>R$ 14.388</span>
											<p className='paragraph3 text-neutral-60'>QTD: 1</p>
										</div>
								</div>
							</div>
							<div className='relative'><span className='block absolute  border border-transparent border-b-neutral-30 w-full h-1 left-0 bottom-0'></span></div>
						</div>
	)
}

export default ItemsCart