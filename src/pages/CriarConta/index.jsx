import React from 'react'
import Badge from '../../components/DesignSystem/Badge'
import Button from '../../components/DesignSystem/Button'
import { Card } from '../../components/DesignSystem/Card'
import { Input } from '../../components/DesignSystem/Input'
import Svg from '../../components/svg/svg'
import NavbarSite from '../../assets/componentsSite/navbar'

const CriarConta = () => {
	return (
		<main className='w-screen h-screen grid place-items-center'>
			<Svg />
			<NavbarSite classContainer="fixed top-0 left-0" />

			<Card classe="p-24 max-w-[592px] w-[37rem] border border-neutral-100 md2:max-w-[90vw]">
				<h1 className='title2 mb-40 md2:text-2xl'>Sua pré proposta foi gerada. Crie uma senha para <br></br> visualizar seus orçamentos</h1>
				<Badge iconID="#icon-user-profile-ms" title="anderson_silva00@hotmail.com" classe="py-8 pl-10 pr-24 mb-24 text-base bg-neutral-100-05 text-neutral-70 " />
				<div className='flex flex-col gap-16 mb-24'>
					<label className="flex flex-col gap-4">
									<p className="paragraph2">Senha</p>
									<Input
										name="password"
										id="password"
										placeholder="Digite a senha"
										classe="!h-48 !rounded-md "
										// onChange={(e) => setEmail(e.target.value)}
										required
									/>
					</label>
					<label className="flex flex-col gap-4">
									<p className="paragraph2">Confirmar senha</p>
									<Input
										name="password" 
										id="password"
										placeholder="Digite a senha"
										classe="!h-48 !rounded-md"
										// onChange={(e) => setEmail(e.target.value)}
										required
									/>
					</label>
				</div>
				<div className='flex w-full justify-end items-center gap-16'>
							<Button
								classe="btn secondary text-sm h-48 justify-center"
							>
								Cancelar
							</Button>
							<Button
								classe="btn h-48 text-sm justify-center"
							>
								Continuar
							</Button>
				</div>	
			</Card>
		</main>
	)
}

export default CriarConta