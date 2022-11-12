
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SvgUse from "../../../../../../components/svg/svgUse";
import "swiper/css";
import "swiper/css/pagination";
import Button from "../../../../../../components/DesignSystem/Button";
import { GaleryProvider } from "./context";

const GaleryContent = () => {
  return (
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
  )
}

const Galery = () => {
  return (
    <GaleryProvider>
      <GaleryContent />
    </GaleryProvider>
  )
}
export default Galery