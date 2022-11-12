import React from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Card } from "../../../../components/DesignSystem/Card";
import SvgUse from "../../../../components/svg/svgUse";
import Button from "../../../../components/DesignSystem/Button";

import { useGlobalContext } from "../../../../context/GlobalContext";
import GeneralObservation from "./components/GeneralObservation";
import Galery from "./components/Galery";
import Budget from "./components/Budget";

const TabsArea = () => {
  const { setmodalOpen, modalOpen } = useGlobalContext();

  const openModal = (id: string) => {
		setmodalOpen({ open: true, id });
	};

  return (
    <Card classe="!mx-0">
      <div className=" shadow-sm tabs-container !bg-white rounded-md rounded-tl-16">
        <Tabs>
          <TabList >
            <Tab  prefix="tab" classID="dados_profissionais ">
              <SvgUse classe="!w-24 !h-24" id={"#icon_file_cursor_ms"} />
              Observações gerais
            </Tab>
            <Tab classID="dados_pessoais">
              <SvgUse classe="!w-24 !h-24" id={"#icon_gallery_photos"} />
              Galeria
            </Tab>
            <Tab classID="orcamento">
              <SvgUse classe="!w-24 !h-24" id={"#icon_dollar_ms2"} />
              Orçamento
            </Tab>
          </TabList>

          <TabPanel>
            <GeneralObservation />
          </TabPanel>

          <TabPanel>
            <Galery />
          </TabPanel>

          <TabPanel>
            <Budget />
          </TabPanel>
        </Tabs>
      </div>
    </Card>
  ) 
}


export default TabsArea