import React from 'react'
import logo from '../../images/icon_logo_site.png'
import { NavbarProvider, useNavbar } from './context'

const Navbar = ({classContainer}) => {
	const {handleNavigate} = useNavbar()
	return (
		<div className={`w-full relative z-[9999999] bg-white h-[5rem] grid place-items-center ${classContainer}`}>
					<header className='max-w-[1100px] w-[1100px] flex justify-between'>
						<img src={logo} className="w-[80px]" />
						<nav className='flex items-center'>
							<ul className='flex gap-40'>
								<li className='paragraph2'>Benefícios de contratar</li>
								<li className='paragraph2 relative'>
									Sobre nós
									<span className='absolute top-0 -right-20 w-1 h-24 block bg-neutral-100-10'></span>
								</li>
								<li className='paragraph2 cursor-pointer' onClick={() => handleNavigate('/login')}>Entrar</li>
								
							</ul>
							<button className='btn ml-[36px]'>
								Peça seu orçamento
							</button>
						</nav>
					</header>
				</div>

	)
}


const NavbarSite = ({classContainer}) => {
		return (
			<NavbarProvider>
				<Navbar classContainer={classContainer}/>
			</NavbarProvider>
		)
}

export default NavbarSite