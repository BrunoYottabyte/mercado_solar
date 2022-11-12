import React from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Card } from "../../../../components/DesignSystem/Card";
import SvgUse from "../../../../components/svg/svgUse";
import Button from "../../../../components/DesignSystem/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { useGlobalContext } from "../../../../context/GlobalContext";
import GeneralObservation from "./components/GeneralObservation";

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
            <section className="p-24 flex flex-col gap-48 select-none">
              {[0, 1, 2, 3].map((queue, i) => (
                <div key={`${i}-queue-card`}>
                  <p className="headline1 mb-16">Local da Instalação</p>
                  <div className="flex md:flex-col gap-24">
                    <div className="min-w-[275px] cursor-pointer relative w-[275px] h-[315px] border hover:brightness-95 transition-all border-dotted border-primary-pure rounded-md bg-primary-pure-10 flex flex-col items-center justify-center gap-16">
                      <div className="w-40 h-40 rounded-md grid place-items-center bg-primary-pure/10">
                        <SvgUse id="#icon_add_ms" classe="!w-20 !h-20" />
                      </div>
                      <p className="paragraph2">Adicionar nova foto</p>
                      <input type="file" className="absolute w-full h-full left-0 top-0 opacity-0"/>
                    </div>

                    <Swiper
        
                      spaceBetween={8}
                      direction="horizontal"
                      className="!h-[315px] w-full md:hidden block"
                      slidesPerView={"auto"}
                      touchStartPreventDefault={false}
                      mousewheel
                    >
                      {[0, 1, 2, 3, 4, 5].map((card, i) => (
                        <SwiperSlide className="!w-max" key={`${i}-swipper`}>
                          <div className="w-[275px] overflow-hidden h-[315px] border relative transition-all border-dotted border-primary-pure rounded-md bg-primary-pure-10 flex flex-col items-center justify-center">
                              <img src="https://github.com/brunoyottabyte.png" className=" w-full  h-[220px] object-cover" />
                              <div className="w-full bg-white !min-h-[96px] p-24 !h-[96px] flex gap-16 justify-center items-center">
                                <Button classe="btn secondary h-48 flex-1 justify-center">Download</Button>
                                <Button classe="btn flex-1 h-48 justify-center">Visualizar</Button>
                              </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <Swiper
        
                      spaceBetween={8}
                      direction="vertical"
                      className="!h-[400px] w-full hidden md:block"
                      slidesPerView={"auto"}
                      touchStartPreventDefault={false}
                      mousewheel
                    >
                      {[0, 1, 2, 3, 4, 5].map((card, i) => (
                        <SwiperSlide key={`${i}-SwiperSlide`} className="!h-max">
                          <div className="w-[275px] overflow-hidden h-[315px] border relative transition-all border-dotted border-primary-pure rounded-md bg-primary-pure-10 flex flex-col items-center justify-center">
                              <img src="https://github.com/brunoyottabyte.png" className=" w-full  h-[220px] object-cover" />
                              <div className="w-full bg-white !min-h-[96px] p-24 !h-[96px] flex gap-16 justify-center items-center">
                                <Button classe="btn secondary h-48 flex-1 justify-center">Download</Button>
                                <Button classe="btn flex-1 h-48 justify-center">Visualizar</Button>
                              </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              ))}
            </section>
          </TabPanel>

          <TabPanel>
            <section className="p-24 flex flex-col gap-24">
              {[0, 1].map((card, i) => (
                <div className="p-16 bg-neutral-10 rounded-md border border-neutral-100-10" key={`${i}-tab-panel`}>
                  <div className="flex md:flex-col md:gap-16 justify-between items-center mb-16">
                    <p className="headline1">
                      Orçamento <span className="text-neutral-100"></span>
                    </p>
                    <div className="flex md:px-16 md:!flex-wrap gap-12 items-center">
                      <p className="headline2 md:w-full">
                        Total:{" "}
                        <span className="text-neutral-100">R$ 14.388</span>
                      </p>
                      <Button
                        style={{ "--cor-1": "#E92C2C" }}
                        iconID="#icon_close_ms"
                        className="btn bg-alert-error-10-o hover:bg-alert-error-10-o hover:text-alert-error hover:border-alert-error border-transparent text-alert-error"
                      >
                        Reprovar
                      </Button>
                      <Button
                        onClick={() => openModal("approved")}
                        iconID="#icon_check_ms"
                        className="btn bg-alert-success-10-0 hover:bg-alert-success-10-0 hover:text-alert-success hover:border-alert-success border-transparent text-alert-success"
                      >
                        Aprovar
                      </Button>
                    </div>
                  </div>

                  <div className=" bg-white rounded-md">
                    {[0, 1].map((item, i) => (
                      <div className="flex gap-12 relative p-16" key={`${i}-image-div`}>
                        <img
                          className="w-[104px] h-[104px] rounded-md border border-neutral-100-10"
                          src="https://github.com/brunoyottabyte.png"
                          alt=""
                        />
                        <div className="w-full flex flex-col justify-between">
                          <p className="paragraph1">
                            Kit 12 Placas Painéis Solares Monocristalino 450
                            W Inmetro
                          </p>

                          <div className="flex justify-between w-full">
                            <p className="headline3 text-neutral-70">
                              R$ 14.388
                            </p>
                            <p className="paragraph3 text-neutral-60">
                              QTD:1
                            </p>
                          </div>
                        </div>
                        {i !== 1 && (
                          <span className="block absolute bottom-0 left-0 w-full h-1 bg-neutral-100-10"></span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </TabPanel>
        </Tabs>
      </div>
    </Card>
  ) 
}


export default TabsArea