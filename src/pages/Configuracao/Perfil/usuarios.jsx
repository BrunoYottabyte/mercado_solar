import gsap from 'gsap'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Toggle from '../../../components/DesignSystem/Toggle'
import Permissoes from './permissoes'

const Usuarios = () => {
    const [toggleProducao, setToggleProducao] = useState(false);
    const [toggleAdministrativo, setToggleAdministrativo] = useState(false);
    const [toggleVendasB2B, setToggleVendasB2B] = useState(false);
    const [toggleOperacional, setToggleOperacional] = useState(false);
    
    const handleClick = (e) => {
        let circle = e.target.closest('.circle-interactive');
        let containerInformation = e.target.closest('.container-text')
        let sectionRules = containerInformation.nextSibling;

        let img = containerInformation.querySelector('img');
        let title = containerInformation.querySelector('.titles');
        // let section = e.target.closest('section');
        // let heightSection = e.target.closest('section').getBoundingClientRect().height;
        // let containerOrders = section.querySelector('.container-orders');
        // let heightOrders = containerOrders.getBoundingClientRect().height;

        if (!circle.classList.contains('active')) {
            circle.classList.add('active');
            gsap.to(sectionRules, {duration: 0.5, ease: "power3", delay: 0.2, translateY: 0, marginTop: 24, opacity: 1});
            gsap.to(sectionRules, { duration: 0.9, ease: "power3", height: sectionRules.scrollHeight, pointerEvents: 'auto'});
            
            //movimenta title
            gsap.to(title, {duration: 0.6, ease: "power3", marginLeft: 0});
            //desce perfil
            gsap.to(img, {duration: 0.8, delay: 0.2, ease: "power3", translateY: 0, opacity: 1,});

            //desce perfil mobile
            let x = window.matchMedia("(max-width: 1180px)");
            if(x.matches) {
                gsap.to(img, {duration: 0.5, delay: 0.2, ease: "power3", translateY: 0, opacity: 1, });
                gsap.to(title, {duration: 0.6, ease: "power3", marginTop: 48});
            }

        } else {
            circle.classList.remove('active');
            gsap.to(sectionRules, { duration: 0.3, ease: "power3", opacity:0,margin: 0, translateY: -24, pointerEvents: 'none'})
            gsap.to(sectionRules, { duration: 0.9, ease: "power3", height: 0 });

            //sobe perfil
            gsap.to(img, {duration: 0.5, ease: "power3", translateY: -40, opacity: 0,});

             // sobe perfil mobile
             let x = window.matchMedia("(max-width: 1180px)");
             if(x.matches) {
                gsap.to(img, {duration: 0.3, ease: "power3", translateY: -40, opacity: 0});
                gsap.to(title, {duration: 0.6, ease: "power3", marginTop: 0});
             }
            
            //movimenta title
            gsap.to(title, {duration: 0.5, delay: 0.3, ease: "power3", marginLeft: -48});

           
    
        }
    }

    return (
        <main className='border border-neutral-30 p-16 rounded-md'>
            <div className='container-text flex justify-between items-center'>
                <div className='gap-8 flex md2:flex-col md2:items-center'>
                    <img src="https://github.com/brunoyottabyte.png" alt="" className='w-48 h-48 md2:absolute rounded-full -translate-y-40 opacity-0' />
        
                    <div className='titles flex-col -ml-56 md2:!ml-0'>
                        <p className='text-primary-pure font-medium text-lg'>Bruno Siqueira - Web developer</p>
                        <span className='text-neutral-80'>
                            Data de pagamento: <span className='font-semibold'>07/06/2000</span> <span className='text-neutral-30'>|</span> Data de ingresso: <span className='font-semibold'>06/05/2018</span>
                        </span>
                    </div>
                </div>
                <div
                    onClick={handleClick}
                    className='w-[20px] h-[20px] shrink-0 circle-interactive border-2 cursor-pointer border-primary-pure rounded-[50%] flex justify-center items-center relative'>
                    {/* Lines */}
                    <span className='w-[10px] h-[2px] bg-primary-pure rounded absolute mx-auto'></span>
                    <span className='h-[10px] line-vertical w-[2px] bg-primary-pure rounded absolute mx-auto'></span>
                </div>
            </div>
           <section className='rules h-0 opacity-0 -translate-y-24 pointer-events-none'>
                <Permissoes state={toggleProducao} setState={setToggleProducao} title="Módulo - Gestão de Produção"/>
                <Permissoes state={toggleAdministrativo} setState={setToggleAdministrativo} title="Módulo - Administrativo"/>
                <Permissoes state={toggleVendasB2B} setState={setToggleVendasB2B} title="Módulo - Vendas B2B"/>
                <Permissoes state={toggleOperacional} setState={setToggleOperacional} title="Módulo - Operacional"/>
           </section>

        </main>
    )
}

export default Usuarios