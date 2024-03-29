import React from 'react';
import {useEffect} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import Button from '../../components/DesignSystem/Button';
import {Card} from '../../components/DesignSystem/Card';

import SvgUse from '../../components/svg/svgUse';
import {useGlobalContext} from '../../context/GlobalContext';
import ModalCart from './components/ModalCart';
import {ProductDetailProvider, useProductDetail} from './context';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const ProductDetailsContent = () => {
  const {setmodalOpen, modalOpen} = useGlobalContext();

  useEffect(() => {
    if (modalOpen.open == false || modalOpen.open == null) {
      // eslint-disable-next-line no-undef
      // @ts-ignore
      clearTimeout(window.timeoutpaineis);
    }
  }, [modalOpen]);

  const openModal = id => {
    setmodalOpen({open: true, id, position: 'right'});
  };

  const openCart = () => {
    openModal('cart');
  };

  const changeViewImg = url => {
    document.querySelector('.mainImg').src = url;
  };

  const {product, addMore, removeOne, handleAddToCart} = useProductDetail();
  return (
    <>
      <ModalCart idDinamic="cart" />
      <div className="container py-48">
        <section className="flex justify-center items-start gap-32 md:flex-col">
          <div className="flex  w-[1100px] items-start gap-16 overflow-hidden h-full md2:max-h-[25rem] sm:max-h-[40rem] sm:flex-col md:!w-full">
            <Swiper
              spaceBetween={8}
              direction="vertical"
              className="!h-[32.25rem] md:hidden block"
              slidesPerView={'auto'}
              touchStartPreventDefault={false}
              mousewheel>
              {product?.images.map((image, i) => (
                <SwiperSlide
                  className="!h-max cursor-pointer"
                  onClick={() => changeViewImg(image.image)}>
                  <img
                    key={`${image.id}-product-image`}
                    src={image.image}
                    className="w-[8rem] object-cover min-h-[7.25rem] h-[7.25rem] rounded-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex flex-col w-full">
              <Swiper
                spaceBetween={8}
                direction="horizontal"
                className="md2:flex hidden w-[95vw]"
                slidesPerView={'auto'}
                touchStartPreventDefault={false}
                mousewheel>
                {product?.images.map((image, i) => (
                  <SwiperSlide
                    className="!w-max cursor-pointer"
                    onClick={() => changeViewImg(image.image)}>
                    <img
                      key={`${image.id}-product-image`}
                      src={image.image}
                      className="w-[8rem] object-cover min-h-[7.25rem] h-[7.25rem] rounded-md"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex items-start gap-32 md2:mt-24">
                <img
                  src={product?.images[0].image}
                  className="flex-1 mainImg object-cover md:object-contain md2:w-[25rem] md2:h-[25rem] w-[35rem] h-[35rem] rounded-md"
                />
                <div className="w-full">
                  <p className="caps2-semibold text-neutral-60">REF. 156788</p>
                  <p className="title3">
                    {product?.name} - {product?.brand.name}
                  </p>
                  <h2 className="title2 text-neutral-70 mt-10">
                    R$ {product?.price.replace('.', ',')}
                  </h2>
                  <div className="mt-16 mb-24 flex gap-8 items-center ">
                    <img src="../src/assets/images/paines-solares/thumb.png" />
                    <p className="paragraph2 text-neutral-70">Fabricante</p>
                  </div>
                  <p className="paragraph2 mb-4">Quantidade</p>
                  <div className="w-[7.75rem] h-48 flex items-center justify-between p-16 bg-white shadow-md rounded-md">
                    <SvgUse
                      id="#icon_subtract_ms"
                      classe="w-24 hover:cursor-pointer"
                      onClick={removeOne}
                    />
                    {product?.quantity}{' '}
                    <SvgUse
                      id="#icon_add_details_ms"
                      classe="w-24 hover:cursor-pointer"
                      onClick={addMore}
                    />
                  </div>

                  <div className="flex flex-col gap-10 mt-32">
                    <Button
                      style={{'--cor-1': '#F69F00'}}
                      iconID="#icon-eye-ms"
                      classe="btn secondary w-full justify-center"
                      onClick={openCart}>
                      Ver orçamento
                    </Button>
                    <Button
                      onClick={handleAddToCart}
                      style={{'--cor-1': '#000'}}
                      iconID="#icon_add_details_ms"
                      classe="btn w-full justify-center">
                      Adicionar ao orçamento
                    </Button>
                  </div>
                </div>
              </div>
              <Card classe="my-24 p-0">
                <Tabs>
                  <TabList>
                    <Tab prefix="tab" classID="dados_profissionais ">
                      Descrição geral
                    </Tab>
                    <Tab classID="dados_pessoais">Informações adicionais</Tab>
                    <Tab classID="orcamento">Detalhes técnicos</Tab>
                  </TabList>

                  <TabPanel>
                    <section className="p-24 flex flex-col gap-24">
                      <p className="paragraph2 text-neutral-70">
                        {product?.brand?.description}
                      </p>
                    </section>
                  </TabPanel>

                  <TabPanel>
                    <section className="p-24 flex flex-col gap-24">
                      <p className="paragraph2 text-neutral-70">
                        {product?.additional_information}
                      </p>
                    </section>
                  </TabPanel>

                  <TabPanel>
                    <section className="p-24 flex flex-col gap-24">
                      <p className="paragraph2 text-neutral-70">
                        {product?.technical_details}
                      </p>
                    </section>
                  </TabPanel>
                </Tabs>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const ProductDatails = () => {
  return (
    <ProductDetailProvider>
      <ProductDetailsContent />
    </ProductDetailProvider>
  );
};
export default ProductDatails;
