import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/DesignSystem/Button'
import SvgUse from '../../../../components/svg/svgUse'

const FooterSite = () => {
	const navigate = useNavigate();
	return (
		<section className="select-none py-64 flex justify-center relative w-full  bg-gradient-home-footer">
		<span className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-pure/5 via-primary-pure/70 to-primary-pure-10"></span>
		<div className="max-w-[1200px] w-[1100px] md2:w-[90vw] relative" >
			<div className="flex md:flex-col w-full pb-64 justify-between items-center gap-64">
				<div className="grid grid-cols-4 md:grid-cols-2 md2:grid-cols-3 md:flex md:flex-col md:w-full">
					<img src="../src/assets/images/home/logomercado.png" className='md2:hidden' />

					<div data-aos="fade-up" data-aos-delay="150">
						<p className="headline3 mb-24 md:mb-0">Mapa do site</p>
						<ul className="flex flex-col gap-16">
							<li className="paragraph2">Benefícios de contratar</li>
							<li className="paragraph2" onClick={() => {

							}}>Sobre nós</li>
						</ul>
					</div>

					<div data-aos="fade-up" data-aos-delay="300">
						<p className="headline3 mb-24">Redes sociais</p>
						<ul className="flex flex-col gap-16">
							<li className="paragraph2">Instagram</li>
							<li className="paragraph2">Facebook</li>
							<li className="paragraph2">Linkedin</li>
						</ul>
					</div>

					<div className="w-[17.5rem] md:w-auto" data-aos="fade-up" data-aos-delay="450">
						<p className="headline3 mb-24 border-primary-pure">Contato</p>
						<ul className="flex flex-col gap-16">
							<li className="paragraph2 flex items-center gap-8">
								{' '}
								<SvgUse
									id="#icon_phone_ms"
									classe="w-24 h-24 shrink-0"
								/>{' '}
								(99) 98945 4575
							</li>
							<li className="paragraph2 flex items-center gap-8">
								<SvgUse id="#icon_maps_ms" classe="w-24 h-24  shrink-0" />
								Ed. Itaim Center - Rua Dr. Eduardo de<br></br> Souza Aranha,
								nº 153 9º andar
							</li>
							<li className="paragraph2 flex items-center gap-8">
								<SvgUse id="#icon_mail_ms" classe="w-24 h-24  shrink-0" />
								mercadosolar@contato.com.br
							</li>
						</ul>
					</div>
				</div>

				<div data-aos="fade-up" data-aos-delay="600" className="flex flex-col md2:flex-row md2:gap-24 md2:w-[90vw] items-end md2:justify-start">
					<Button
						iconID="#icon_user_ms"
						svgClass="!w-24 !h-24"
						classe="secondary h-48 hover:bg-white !w-[13.5rem] border !border-primary-pure justify-center">
						Entrar
					</Button>
					<Button
						classe="h-48 mt-12 !w-[13.5rem] whitespace-nowrap"
						iconID="#icon_raio_circle_ms"
						svgClass="!w-32 !h-32">
						<p className="paragraph1" onClick={() => navigate('/home#orcamento', {preventScrollReset: true})} >Peça seu orçamento</p>
					</Button>
				</div>
			</div>
		</div>

		<div className="absolute left-0 w-full bottom-0 h-48 bg-primary-pure flex items-center justify-center">
			<div className="max-w-[1200px] w-[1100px] md2:w-[90vw] relative flex justify-between items-center">
				<p className="paragraph2 text-white md:text-xs">
					© 2022 Mercado solar - Todos direitos reservados
				</p>

				<div className="flex justify-end">
					<SvgUse id="#icon_logo_ndt" classe="!h-48 !w-48 right-0" />
				</div>
			</div>
		</div>
	</section>
	)
}

export default FooterSite