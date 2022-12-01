import React from 'react'
import { useNavigate } from 'react-router-dom'
import imgLogo from '../../assets/images/icon_logo.png'
import Button from '../../components/DesignSystem/Button'
import { useAuthContext } from '../../context/useAuthContext'
const NotFound = () => {
  const {user, userId} = useAuthContext();
  const handleNavigation = () => {
    if(userId){
        navigate('/')
    }else{
        navigate('/home')
    }
  }
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-24 justify-center items-center w-screen h-screen'>
       <div className="p-24 bg-primary-pure/70 rounded-md">
            <img src={imgLogo} alt="Logo do mercado solar" />
       </div>
       <h1 className='text-[48px] text-primary-pure shadow-inner '>404</h1>
       <Button
        onClick={handleNavigation} 
        classe="h-56 secondary border border-solid transition-all duration-300 !border-primary-pure/20 hover:!border-primary-pure">Voltar ao Home :)</Button>
    </div>
  )
}

export default NotFound
