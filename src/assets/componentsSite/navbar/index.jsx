import React from 'react'
import { useNavigate } from 'react-router-dom'
import SvgUse from '../../../components/svg/svgUse'
import logo from '../../images/icon_logo_site.png'
import { NavbarProvider, useNavbar } from './context'

const Navbar = ({ classContainer, openModal }) => {
  const { handleNavigate } = useNavbar()
  const navigate = useNavigate()
  return (
		<div className={`w-full z-[99999999] shadow-sm fixed top-0 bg-white h-[5rem] grid place-items-center ${classContainer}`}>

					<header className='max-w-[1100px] relative w-[1100px] md2:w-[90vw] items-center flex justify-between'>
						<img src={logo} className="w-[80px] md2:w-[70px] cursor-pointer" onClick={() => {
						  navigate('/home')
						}} />
						<SvgUse onClick={() => openModal('sidemenu')} id="#icon_hamburguer_ms" classe="hidden md2:block h-32 w-32" />
						<nav className='flex items-center md2:hidden'>
							<ul className='flex gap-40'>
								<li className='paragraph2 cursor-pointer'><a href="#beneficios">Benefícios de contratar</a></li>
								<li className='paragraph2 relative cursor-pointer' onClick={() => {
								  navigate('/sobre-nos')
								}}>
									Sobre nós
									<span className='absolute top-0 -right-20 w-1 h-24 block bg-neutral-100-10'></span>
								</li>
								<li className='paragraph2 cursor-pointer' onClick={() => handleNavigate('/login')}>Entrar</li>

							</ul>
							<a href="#orcamento" className='btn ml-[36px]'>
								Peça seu orçamento
							</a>
						</nav>
					</header>
				</div>

  )
}

const NavbarSite = ({ classContainer, openModal }) => {
  return (
			<NavbarProvider>
				<Navbar openModal={openModal} classContainer={classContainer}/>
			</NavbarProvider>
  )
}

export default NavbarSite
