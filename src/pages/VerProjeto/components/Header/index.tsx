import React from 'react';
import Background from '../background'
import {IHeader } from './types'
import { MultiplicadorKWP } from '../../../../utils/constants';

const Header = ({
    id,
    client_name,
    client_email,
    client_phone,
    client_postal_code,
    address,
    client_type,
    average_consumption
  }:IHeader) => {
  return (
    <section className="w-full bg-neutral-100 rounded-lg">
      <div className="w-full bg-neutral-100  p-24 rounded-t-lg relative overflow-hidden">
        <div className="absolute bg-gradient-to-r from-neutral-100 to-neutral-100/5 z-[99] right-[240px] top-0 w-[400px] h-full"></div>
        <div className="w-[400px] opacity-40 top-10 right-0 h-full absolute overflow-hidden">
        <Background />				
        </div>

        <div className="block absolute bg-gradient-radial w-full h-full top-0 "></div>

        <div className="mb-24">
          <span className="block caps2-semibold text-white/70">#{id}</span>
          <p className="title3 text-white">{client_name}</p>
        </div>

        <div className="flex gap-32">
          <div>
            <span className="block caps2-semibold text-white/70">CEP</span>
            <p className="paragraph1 text-white">{client_postal_code}</p>
          </div>

          <div>
            <span className="block caps2-semibold text-white/70">
              ENDEREÇO
            </span>
            <p className="paragraph1 text-white">{address}</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white flex md:flex-col !rounded-lg translate-y-2 overflow-hidden">
        <div className="relative flex-1 p-24 border border-transparent border-b-neutral-100-10 border-r-neutral-100-10">
          <span className="block caps2-semibold text-neutral-70">NOME</span>
          <p className="paragraph1 text-neutral-100">{client_name}</p>
        </div>

        <div className="relative flex-1 p-24 border border-transparent border-b-neutral-100-10 border-r-neutral-100-10">
          <span className="block caps2-semibold text-neutral-70">
            E-MAIL
          </span>
          <p className="paragraph1 text-neutral-100">
            {client_email}
          </p>
        </div>

        <div className="relative flex-1 p-24 border border-transparent border-b-neutral-100-10 border-r-neutral-100-10">
          <span className="block caps2-semibold text-neutral-70">
            CELULAR
          </span>
          <p className="paragraph1 text-neutral-100">{client_phone}</p>
        </div>

        <div className="relative flex-1 p-24 border border-transparent border-b-neutral-100-10 border-r-neutral-100-10">
          <span className="block caps2-semibold text-neutral-70">TIPO</span>
          <p className="paragraph1 text-neutral-100">{client_type === 'pj' ? 'Empresa' : 'Pessoa Física'}</p>
        </div>

        <div className="relative flex-1 p-24 border border-transparent border-b-neutral-100-10 border-r-neutral-100-10">
          <span className="block caps2-semibold text-neutral-70">
            CONSUMO MÉDIO R$
          </span>
          <p className="paragraph1 text-neutral-100">R$ {average_consumption}</p>
        </div>

        <div className="relative flex-1 p-24 border border-transparent border-b-neutral-100-10">
          <span className="block caps2-semibold text-neutral-70">
            CONSUMO MÉDIO KHW
          </span>
          <p className="paragraph1 text-neutral-100">{((average_consumption ?? 0)/MultiplicadorKWP).toFixed(2)} kHw</p>
        </div>
      </div>
    </section>
  )
}


export default Header