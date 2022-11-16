import React from 'react'
import {Tab, TabList, TabPanel, Tabs as TabsContainer} from 'react-tabs';


const Tabs = () => {
  return (
    <div className=" shadow-sm tabs-container !bg-white rounded-md border-transparent rounded-tl-16">
    <TabsContainer>
      <TabList>
        <div className='pl-24'>
            <Tab prefix="tab" classID="dados_profissionais ">
                Local da instalação
            </Tab>
            <Tab classID="dados_pessoais">
                Local do inversor
            </Tab>
            <Tab classID="dados_pessoais">
                Local do medidor padrão
            </Tab>
            <Tab classID="dados_pessoais">
                Telhado
            </Tab>
        </div>

      </TabList>

      <TabPanel>
      </TabPanel>

      <TabPanel>
      </TabPanel>

    </TabsContainer>
  </div>
  )
}

export default Tabs