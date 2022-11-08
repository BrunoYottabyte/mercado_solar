import React from 'react'
import Sidebar from '../../components/Sidebar/SidebarIndex'
import {menuItems} from '../../components/Sidebar/items'
import Svg from '../../components/svg/svg'
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/DesignSystem/Footer'

const AppLayout = () => {
  return (
    <div>
        <Svg/>
        <Sidebar menu={menuItems} />
    
        <div className='app-content md2:mx-auto'>
          <Header />
          <Outlet />
        </div>
				<Footer />
    </div>
  )
}

export default AppLayout