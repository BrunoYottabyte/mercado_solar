import React, {useRef} from 'react';
import Button from '../../components/DesignSystem/Button';
import {Card} from '../../components/DesignSystem/Card';
import Input from './components/Input';
import notAllowed from '../../assets/images/uploads/not.png';
import {IntegratorProvider, useIntegrator} from './context';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {motion} from 'framer-motion';
import { Modal } from '../../components/DesignSystem/Modal/Modal';
import { ModalContent } from '../../components/DesignSystem/Modal/ModalContent';
import { useGlobalContext } from '../../context/GlobalContext';
import { ModalHeader } from '../../components/DesignSystem/Modal/ModalHeader';


const IntegratorContent = () => {
  const {
    profileUrl,
    galeryForm,
    form: {control, watch, handleSubmit, register, getValues},
    saveIntegrator,
    savedImages,
    removeImageSaved,
    loading,
    multipleImages,
    setMultipleImages,
  } = useIntegrator();
  const {setmodalOpen, modalOpen} = useGlobalContext();
  const closeModal = () => {
    setmodalOpen({open: false, id: null});
  }
  const photoWatch = watch('photo');

  const removeImg = img => {
    clearFile();

    let index = multipleImages.findIndex(imgs => imgs == img);
    const arrUpdated = [...multipleImages];
    arrUpdated.splice(index, 1);
    setMultipleImages(arrUpdated);
  };
  
  // DRAG AND DROP
  const wrapperRef = useRef(null);

  const onDragEnter = e => {
    const title = document.querySelector('.title_upload');
    const container = document.querySelector('.container-drag');
    const containerIMG = document.querySelector('.container-img');
    title.innerHTML = 'Solte seus arquivos :)';
    // // wrapperRef.current.classList.add(styles.dragover)
    // imgRef.current.setAttribute('src', '/icon-upload/upload.webp');
    if (!String(e.dataTransfer.items[0].type).includes('image/')) {
      title.innerHTML = 'Tipo de arquivo não suportado :(';
      const img = document.createElement('img');
      img.src = notAllowed;
      img.width = 60;
      if (!container?.querySelector('img')) {
        container?.classList.remove('upload-initial', 'text-upload-initial');
        title?.classList.add('text-not-allowed');
        container?.classList.add('not-allowed');
        containerIMG?.append(img);
      }
    } else {
      title?.classList.add('text-allowed');
      container?.classList.add('allowed');
    }
  };
  const onDragLeave = () => {
    const title = document.querySelector('.title_upload');
    const container = document.querySelector('.container-drag');
    if (container?.querySelector('img'))
      container.querySelector('img')?.remove();
    title.innerHTML = 'Arraste ou selecione seus arquivos';
    title?.classList.remove('text-not-allowed');
    container?.classList.remove('not-allowed');
    title?.classList.remove('text-allowed');
    container?.classList.remove('allowed');
    container?.classList.add('upload-initial', 'text-upload-initial');
  };
  const onDrop = () => {
    clearFile();

    const title = document.querySelector('.title_upload');
    const container = document.querySelector('.container-drag');
    title.innerHTML = 'Arraste ou selecione seus arquivos';

    if (container?.querySelector('img'))
      container.querySelector('img')?.remove();
    title?.classList.remove('text-not-allowed');
    container?.classList.remove('not-allowed');
    title?.classList.remove('text-allowed');
    container?.classList.remove('allowed');

    container?.classList.add('upload-initial', 'text-upload-initial');
  };

  const onFilesDrops = files => {
    const images = Array.from(files)
      .filter(file => {
        if (String(file.type).includes('image/')) return file;
      })
      .map(file => file);
    setMultipleImages(prev => prev.concat(images));
  };

  const clearFile = () => {
    const inputFile = document.querySelector('.file');
    inputFile.value = '';
  };

  return (
    <>
        <Modal className={'w-[37rem]  md2:max-w-[400px] md2:w-[95vw]'}>
            <ModalContent id="animation-saved">
              <div className="p-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  fill="none"
                  className="svg-animate-check mx-auto mb-24 mt-16"
                  viewBox="0 0 120 120"
                >
                  <path
                    fill="#F69F00"
                    stroke="#e8eaf1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="15"
                    d="M7.5 60.128c0 28.634 23.212 51.847 51.847 51.847h1.306c28.634 0 51.847-23.213 51.847-51.847S89.287 8.281 60.653 8.281h-1.306C30.712 8.281 7.5 31.494 7.5 60.128z"
                    className="path-1"
                  ></path>
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                    d="M45 60.13l11.25 11.086L75 52.738"
                    className="path-2"
                  ></path>
                </svg>
                <p className="text-base font-semibold text-center mx-auto mt-8 text-primary-pure">
                  Salvo com Sucesso
                </p>


                <Button
                  onClick={() => closeModal()}
                  classe="mt-16 w-full h-56 text-center justify-center"
                  svgClass="rotate-180"
                  iconID="#icon_arrow_left"
                >
                  Fechar
                </Button>

              </div>
            </ModalContent>

            <ModalContent id="animation-removed">
              <div className="p-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  fill="none"
                  className="svg-animate-check mx-auto mb-24 mt-16"
                  viewBox="0 0 120 120"
                >
                  <path
                    fill="#F69F00"
                    stroke="#e8eaf1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="15"
                    d="M7.5 60.128c0 28.634 23.212 51.847 51.847 51.847h1.306c28.634 0 51.847-23.213 51.847-51.847S89.287 8.281 60.653 8.281h-1.306C30.712 8.281 7.5 31.494 7.5 60.128z"
                    className="path-1"
                  ></path>
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="8"
                    d="M45 60.13l11.25 11.086L75 52.738"
                    className="path-2"
                  ></path>
                </svg>
                <p className="text-base font-semibold text-center mx-auto mt-8 text-primary-pure">
                  Removido com Sucesso
                </p>


                <Button
                  onClick={() => closeModal()}
                  classe="mt-16 w-full h-56 text-center justify-center"
                  svgClass="rotate-180"
                  iconID="#icon_arrow_left"
                >
                  Fechar
                </Button>

              </div>
            </ModalContent>

            <ModalContent id="confirm">
              <ModalHeader text="Deseja realmente apagar essa imagem?" />

              <div className="w-full md:flex-col md2:gap-0 flex gap-24 p-24">
              <Button
                svgClass="!w-24 !h-24"
                className={`btn h-48 justify-center secondary mt-8 w-full`}
                onClick={closeModal}>
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  removeImageSaved(modalOpen.idImage)
                }}
                className={`btn h-48 w-full justify-center mt-8 !bg-alert-error/30 hover:border-alert-error hover:text-alert-error text-alert-error border-transparent ${
                  loading ? 'is-loading' : ''
                }`}>
                Continuar
              </Button>
            </div>
            </ModalContent>
        </Modal>
        <motion.div 
          initial={{translateX: '-20%', opacity: 0}}
          animate={{translateX: 0, opacity: 1}}
          exit={{translateX: '-20%', opacity: 0}}
          transition={{duration: 0.4}}
          className="container">
            <Card classe="my-64 px-24 py-32">
              <header className="flex justify-between md2:flex-col md2:gap-16 align-center">
                <h1 className="!title3">Meu Integrador</h1>
              </header>

              <form onSubmit={handleSubmit(saveIntegrator)}>
                <div className="flex flex-col gap-24 mb-24">
                  <div className="flex flex-col gap-8">
                    <div className="flex-1 md2:w-full">
                      <label className="!label">Logo</label>
                      {photoWatch && photoWatch.length ? (
                        <img
                          src={photoWatch[0] && URL.createObjectURL(photoWatch[0])}
                          // src={photoWatch && URL.createObjectURL(photoWatch)}
                          width={100}
                          className="avatar-container"
                        />
                      ) : (
                        <img
                          src={profileUrl}
                          width={100}
                          className="avatar-container"
                        />
                      )}
                      <div className="flex mt-10">
                        <input type="file" {...register('photo')} />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-16 items-start md2:flex-col">
                    <Input
                      classe="flex-1 md2:w-full"
                      control={control}
                      name={'name'}
                      label={'Nome'}
                    />
                    <Input
                      classe="flex-1 md2:w-full"
                      control={control}
                      name={'about'}
                      label={'Sobre'}
                    />
                  </div>
                  <div className='w-[calc(50%-8px)] md2:w-full my-16 h-[80px] rounded-md'>
                        <p>Uploads realizados</p>
                        <Swiper
                      spaceBetween={16}
                      direction="horizontal"
                      className="h-[80px] w-full px-8 rounded-md bg-primary-pure/10"
                      slidesPerView={'auto'}
              
                      mousewheel>
                          {
                          savedImages?.map(item => {
                              return(
                                <SwiperSlide className="flex items-center w-max" key={item.id}>
                                  <div className="relative">
                                    <div
                                      onClick={() => setmodalOpen({open: true, id: 'confirm', idImage: item.id})}
                                      className="cursor-pointer absolute right-0 top-0 w-24 h-24 bg-primary-pure grid place-items-center rounded-tr-md rounded-bl-md">
                                      x
                                    </div>
                                    <motion.div
                                      initial={{scale: 0, opacity: '0'}}
                                      animate={{scale: 1, opacity: 1}}
                                      exit={{scale: 0, opacity: 0}}
                                      transition={{duration: 0.3}}>
                                      <img
                                        className=" h-full max-h-[75px] max-w-[100px] rounded-md"
                                        src={item.image}
                                        alt=""
                                      />
                                    </motion.div>
                                  </div>
                                </SwiperSlide>
                              )
                            }) 
                          }
        
                    </Swiper>
                  </div>
                  <div className="flex gap-16 items-start md2:flex-col">
                    <div
                      onDragEnter={onDragEnter}
                      onDrop={onDrop}
                      onDragOver={onDragEnter}
                      onDragLeave={onDragLeave}
                      ref={wrapperRef}
                      className="w-full cursor-pointer h-[150px] container-drag border border-primary-dark border-dashed rounded-md relative grid place-items-center">
                      <input
                        className="flex-1 absolute w-full h-full opacity-0 file"
                        multiple
                        accept="image"
                        type="file"
                        {...galeryForm.register('images', {
                          required: true,
                          onChange: e => onFilesDrops(e.target.files),
                        })}
                        onClick={clearFile}
                      />
                      <div className="container-img flex items-center flex-col-reverse gap-10">
                        <p className="text-primary-pure title_upload">
                          Arraste ou selecione seus arquivos
                        </p>
                      </div>
                    </div>

                    <Swiper
                      spaceBetween={16}
                      direction="horizontal"
                      className="h-[150px] w-full px-8 rounded-md bg-primary-pure/10"
                      slidesPerView={'auto'}
            
                      >
                      <div className="w-full grid place-items-center relative">
                        {multipleImages.map((img, i) => {
                          let urlFormated = img.type ? URL.createObjectURL(img) : img;
                          return (
                            <SwiperSlide className="flex items-center w-max" key={i}>
                              <div className="relative">
                                <div
                                  onClick={() => removeImg(img)}
                                  className="absolute right-0 top-0 w-24 h-24 bg-primary-pure grid place-items-center rounded-tr-md rounded-bl-md">
                                  x
                                </div>
                                <motion.div
                                  initial={{scale: 0, opacity: '0'}}
                                  animate={{scale: 1, opacity: 1}}
                                  exit={{scale: 0, opacity: 0}}
                                  transition={{duration: 0.3}}>
                                  <img
                                    className=" h-[130px] max-w-[200px] rounded-md"
                                    src={urlFormated}
                                    alt=""
                                  />
                                </motion.div>
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </div>
                    </Swiper>
                  </div>
                  <div className="flex gap-16 md2:flex-col">
                    <Input
                      classe="flex-1"
                      control={control}
                      name={'services_offered'}
                      label={'Serviços ofertados'}
                    />
                    <Input
                      classe="flex-1"
                      control={control}
                      name={'brands_and_equipment'}
                      label={'Marcas e equipamentos'}
                    />
                  </div>
                  <div className="flex gap-16 md2:flex-col">
                    <Input
                      classe="flex-1"
                      control={control}
                      name={'service_regions'}
                      label={'Regiões atendidas'}
                    />
                    <Input
                      classe="flex-1"
                      control={control}
                      name={'federative_unit'}
                      label={'Estado'}
                    />
                  </div>
                  <Input control={control} name={'city'} label={'Cidade'} />
                </div>

                <Button disabled={loading} type="submit" classe={`${loading ? 'is-loading' : ''}`} >Salvar</Button>
              </form>
            </Card>
        </motion.div>
    </>
   
  );
};

const Integrator = () => {
  return (
    <IntegratorProvider>
      <IntegratorContent />
    </IntegratorProvider>
  );
};

export default Integrator;
