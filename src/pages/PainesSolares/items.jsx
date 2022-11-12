import React from 'react'
import { Card } from '../../components/DesignSystem/Card'
import SvgUse from '../../components/svg/svgUse'

const Items = () => {
	return (
		<Card classe="!w-full max-w-[32.125rem]  max-h-[27.125rem] relative">
			<span className='w-48 h-24 rounded-md bg-neutral-30 py-2 absolute left-8 top-8 px-12 headline3'>Tag</span>
			<div className='flex justify-center relative'>
				<img className='max-h-[21.125rem] object-cover md2:max-h-[15rem] md:max-h-[15rem]' src='../src/assets/images/paines-solares/default.png' />
				<div className='overflow-hidden absolute bottom-8 right-8 h-24 w-[2.75rem] border border-neutral-100/10 rounded-full'>
						<div className='relative w-full h-full flex justify-around items-center text-neutral-70'>
					
								<SvgUse id="#icon_arrow_left_ms" classe="w-24 h-24 hover:bg-neutral-100/5 hover:cursor-pointer" />
			
							<span className='block absolute w-1 h-full bg-neutral-100-10'></span>
				
								<SvgUse id="#icon_arrow_right_ms" classe="w-24 h-24 hover:bg-neutral-100/5 hover:cursor-pointer" />
				
						</div>
				</div>
			</div>
			<div className='p-16'>
				<p className='paragraph1 line-clamp-two'>Gerador Solar 8000mah Estação de Energia de Bateria de Grande Capacidade com Painéis Incluídos Iluminação Carregamento Lanterna Multifuncional</p>
				<span className='title3 mt-8'>R$ 968,88</span>
			</div>
			<div className='p-16 flex gap-8 items-center border border-transparent border-t-neutral-30'>
				<img src='../src/assets/images/paines-solares/thumb.png' />
				<p className='paragraph2'>Fabricante</p>
			</div>
		</Card>	
	)
}

export default Items