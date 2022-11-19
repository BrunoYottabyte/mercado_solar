import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SvgUse from '../../../../../../../../components/svg/svgUse';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '../../../../../../../../components/DesignSystem/Button';
import {ISlideProps} from './types';
import {useGalery} from '../../context';
import {useVerProjeto} from '../../../../../../context';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import {useGlobalContext} from '../../../../../../context/GlobalContext';
import axios from 'axios';

const Slide = ({images, title, type, openModal}: ISlideProps) => {
  const {saveImage, downloadImage} = useGalery();
  const {isRepresentative} = useVerProjeto();
  
  const downloadIMG = (url) => {
      axios.get(url, {
        responseType: 'blob'
      }).then(response => {
        console.log(response)
        const href = URL.createObjectURL(response.data);

        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', 'file.png'); //or any other extension
        document.body.appendChild(link);
        link.click();
    
        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);

      })
    
  }
  return (
    <section className="p-24 flex flex-col gap-48 select-none">
      <div>
        <p className="headline1 mb-16">{title}</p>
        <div className="flex sm:flex-col gap-24 sm:justify-center">
          {isRepresentative && (
            <div className="min-w-[275px] xs:w-full cursor-pointer relative w-[275px] h-[315px] border hover:brightness-95 transition-all border-dotted border-primary-pure rounded-md bg-primary-pure-10 flex flex-col items-center justify-center gap-16">
              <div className="w-40 h-40 rounded-md grid place-items-center bg-primary-pure/10">
                <SvgUse id="#icon_add_ms" classe="!w-20 !h-20" />
              </div>
              <p className="paragraph2">Adicionar nova foto</p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={e => saveImage(e, type)}
                className="absolute w-full h-full left-0 top-0 opacity-0"
              />
            </div>
          )}

          <Swiper
            spaceBetween={8}
            direction="horizontal"
            className="!h-[315px] w-full sm:hidden block"
            slidesPerView={'auto'}
            touchStartPreventDefault={false}
            mousewheel>
            {images.length > 0
              ? images.map((image, i) => (
                  <SwiperSlide
                    className="!w-max"
                    key={`${i}-${image.type}`}
                    >
                    <div className="w-[275px] overflow-hidden h-[315px] border relative transition-all border-dotted border-primary-pure rounded-md bg-primary-pure-10 flex flex-col items-center justify-center">
                      <img
                        src={image.image}
                        className=" w-full  h-[220px] object-cover"
                      />
                      <div className="w-full bg-white !min-h-[96px] p-24 !h-[96px] flex gap-16 justify-center items-center">
                        <Button
                          onClick={() => downloadImage(image.image)}
                          classe="btn secondary h-48 flex-1 justify-center">
                          Download
                        </Button>
                        <Button classe="btn flex-1 h-48 justify-center">
                          <a onClick={() =>
                      document
                        .querySelector(
                          `.gallery-container a[href='${image.image}']`,
                        )
                        .click()
                    }>
                            Visualizar
                          </a>
                        </Button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : !isRepresentative
              ? Array(6)
                  .fill()
                  .map((item, i) => (
                    <SwiperSlide className="!w-max" key={i}>
                      <div className="relative sm:!w-full grid place-items-center">
                        <p className="absolute z-[99] text-center text-primary-darkness/60">
                          Esse dado vai ser preenchido pelo seu representante ou
                          integrador.
                        </p>

                        <SkeletonTheme
                          baseColor="#b1722f5b"
                          highlightColor="#88521787"
                          duration={3.5}>
                          <Skeleton
                            direction="ltr"
                            className="w-[275px] sm:!w-full overflow-hidden h-[315px] border relative transition-all border-dotted border-primary-pure rounded-md bg-primary-pure/5 flex flex-col items-center justify-center"></Skeleton>
                        </SkeletonTheme>
                      </div>
                    </SwiperSlide>
                  ))
              : null}
          </Swiper>

          <Swiper
            spaceBetween={8}
            direction="vertical"
            className={`!h-[400px] ${images.length == 0 && isRepresentative ? '!h-[0px]' : ''} w-full hidden sm:flex`}
            slidesPerView={'auto'}
            touchStartPreventDefault={false}
            mousewheel>
            {images.length > 0
              ? images.map((image, i) => (
                  <SwiperSlide
                    key={`${i}-${image.image}-mobile`}
                    className="!h-max"
                    >
                    <div className="w-[275px] xs:w-full overflow-hidden h-[315px] border relative transition-all border-dotted border-primary-pure rounded-md bg-primary-pure-10 flex flex-col items-center justify-center">
                      <img
                        src={image.image}
                        className=" w-full  h-[220px] object-cover"
                      />
                      <div className="w-full bg-white !min-h-[96px] p-24 !h-[96px] flex gap-16 justify-center items-center">
                        <Button
                          onClick={() => downloadImage(image.image)}
                          classe="btn secondary h-48 flex-1 justify-center">
                          Download
                        </Button>
                        <Button classe="btn flex-1 h-48 justify-center">
                          <a onClick={() =>
                      document
                        .querySelector(
                          `.gallery-container a[href='${image.image}']`,
                        )
                        .click()
                    }>
                            Visualizar
                          </a>
                        </Button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : !isRepresentative
              ? Array(6)
                  .fill()
                  .map((item, i) => (
                    <SwiperSlide className="!w-max" key={i}>
                      <div className="relative w-full sm:w-full grid place-items-center">
                        <p className="absolute z-[99] text-center text-primary-darkness/60">
                          Esse dado vai ser preenchido pelo seu representante ou
                          integrador.
                        </p>

                        <SkeletonTheme
                          baseColor="#b1722f5b"
                          highlightColor="#88521787"
                          duration={3.5}
                          >
                          
                          <Skeleton
                            direction="ltr"
                            className="w-[275px]  overflow-hidden h-[315px] border relative transition-all border-dotted border-primary-pure rounded-md bg-primary-pure/5 flex flex-col items-center justify-center"></Skeleton>
                        </SkeletonTheme>
                      </div>
                    </SwiperSlide>
                  ))
              : null}
          </Swiper>
        </div>
      </div>
      <div className="invisible absolute gallery-container">
        {images.length > 0 && <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
           { images.map((image, i) => (
              <a
                href={image.image}
                className="w-[275px] overflow-hidden h-[315px] border relative transition-all border-dotted border-primary-pure rounded-md bg-primary-pure-10 flex flex-col items-center justify-center">
                <img
                  src={image.image}
                  className=" w-full  h-[220px] object-cover"
                />
                <div className="w-full bg-white !min-h-[96px] p-24 !h-[96px] flex gap-16 justify-center items-center">
                  <Button
                    onClick={() => downloadImage(image.image)}
                    classe="btn secondary h-48 flex-1 justify-center">
                    Download
                  </Button>
                  <Button classe="btn flex-1 h-48 justify-center">
                    <a href={image.image} download target={'_blank'}>
                      Visualizar
                    </a>
                  </Button>
                </div>
              </a>
            )) }
        </LightGallery> }
      </div>
    </section>
  );
};

export default Slide;
