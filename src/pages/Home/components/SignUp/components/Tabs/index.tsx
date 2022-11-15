import React from 'react'
import {Tab, TabList, TabPanel, Tabs as TabsContainer} from 'react-tabs';
import CriarConta from '../CriarConta';
import AutenticarConta from '../Entrar';

const Tabs = () => {
  return (
    <div className=" shadow-sm tabs-container !bg-white rounded-md border-transparent rounded-tl-16">
    <TabsContainer>
      <TabList>
        <div className='pl-24'>
            <Tab prefix="tab" classID="dados_profissionais ">
            Criar conta
            </Tab>
            <Tab classID="dados_pessoais">
             Entrar
            </Tab>
        </div>

      </TabList>

      <TabPanel>
        <CriarConta />
      </TabPanel>

      <TabPanel>
        <AutenticarConta />
      </TabPanel>

    </TabsContainer>
  </div>
  )
}

export default Tabs