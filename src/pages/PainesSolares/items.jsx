import React from 'react'
import { Card } from '../../components/DesignSystem/Card'

const Items = () => {
	return (
		<Card classe="!w-full max-w-[32.125rem]  max-h-[27.125rem] relative">
			<span className='w-48 h-24 rounded-md bg-neutral-30 py-2 absolute left-8 top-8 px-12 headline3'>Tag</span>
			<div className='flex justify-center'>
				<img className='max-h-[21.125rem] object-cover md2:max-h-[15rem] md:max-h-[15rem]' src='../src/assets/images/paines-solares/default.png' />
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