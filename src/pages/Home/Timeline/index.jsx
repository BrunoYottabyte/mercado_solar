import React from 'react'
import TimelineItem from './TimelineItem'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import SvgUse from '../../../components/svg/svgUse';

const Timeline = () => {
  const dates = [
    {
      title: '25/abr, 2021 - 14h',
      items: [
        {
          title: 'Reposição',
          porcentagem: 50
        },
      ]
    },

    {
      title: '25/fev, 2021 - 14h',
      items: [
        {
          title: 'Limpeza',
          porcentagem: 90
        },
        {
          title: 'Reposição',
          porcentagem: 100
        },
      ]
    },
    {
      title: '10/fev, 2021 - 14h',
      items: [
        {
          title: 'Produção',
          porcentagem: 80
        },
        {
          title: 'Contagem',
          porcentagem: 40
        },
        {
          title: 'Reposição',
          porcentagem: 60
        },
      ]
    },

    {
      title: '10/jan, 2021 - 14h',
      items: [
        {
          title: 'Limpeza',
          porcentagem: 95
        },

      ]
    },
  ]
  return (
    <Swiper
      spaceBetween={8}
      direction="vertical"
      className='!h-[340px] w-full pl-[12px] p-8  timeline-container'
      slidesPerView={'auto'}
      touchStartPreventDefault={false}
      mousewheel
    >
      {
        dates.map((current, i) => {
          return (
            <SwiperSlide className='!h-max' >
              <TimelineItem title={current.title} active={i == 0}>
                <div className='flex flex-col gap-4 mb-16'>
                  {
                    current.items?.map(el => {
                      return (
                        <div className='p-16 pr-40 border border-neutral-30 w-full rounded-md '>

                          <div className='flex justify-between items-center'>
                            <div className='flex gap-8 items-center'>
                              <SvgUse id="#icon-check-with-circle" classe={`w-24 h-24 text-neutral-60 ${el.porcentagem == 100 ? 'text-alert-green': ''}`} /> {el.title}
                            </div>
                            <p className={`text-neutral-70 text-sm font-semibold `}>{el.porcentagem}%</p>
                          </div>

                          <div className='mt-8 block w-full !h-[7px] border border-neutral-20 relative rounded-xl overflow-hidden'>
                            <div style={{width: el.porcentagem + '%'}} className={`absolute left-0 top-0 h-[7px] bg-neutral-100-50 ${el.porcentagem == 100 ? 'bg-alert-green' : ''}`}></div>
                          </div>

                        </div>
                      )

                    })
                  }
                </div>
              </TimelineItem>

            </SwiperSlide>
          )
        })
      }
    </Swiper>

  )
}

export default Timeline