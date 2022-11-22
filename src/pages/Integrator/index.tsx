import React, { useEffect, useRef, useState } from 'react';
import Button from '../../components/DesignSystem/Button';
import {Card} from '../../components/DesignSystem/Card';
import Input from './components/Input';
import notAllowed from '../../assets/images/uploads/not.png'
import {IntegratorProvider, useIntegrator} from './context';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion'
import { opacity } from 'html2canvas/dist/types/css/property-descriptors/opacity';

const IntegratorContent = () => {
  const {
    form: {control, register, handleSubmit, getValues, setValue, watch},
    saveIntegrator,
  } = useIntegrator();
  const { photo } = getValues();
  const [multipleImages, setMultipleImages] = useState<any[]>([]);

  useEffect(() => {
    console.log(photo);
    console.log(multipleImages);
  }, [multipleImages]);

  const removeImg = (img) => {
    clearFile();


    let index = multipleImages.findIndex(imgs => imgs == img);
    const arrUpdated = [...multipleImages];
    arrUpdated.splice(index,1)
    setMultipleImages(arrUpdated);
  }

  // DRAG AND DROP

  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  const onDragEnter = (e) => {
    const title = document.querySelector('.title_upload');
    const container = document.querySelector('.container-drag')
    const containerIMG = document.querySelector('.container-img')
    title.innerHTML = 'Solte seus arquivos :)';
    // // wrapperRef.current.classList.add(styles.dragover)
    // imgRef.current.setAttribute('src', '/icon-upload/upload.webp');
    console.log(e.dataTransfer.items[0].type)
    if(!String(e.dataTransfer.items[0].type).includes('image/')){
      title.innerHTML = 'Tipo de arquivo não suportado :(';
      const img = document.createElement('img');
      img.src = notAllowed;
      img.width = 60
      if(!container.querySelector('img')){
        container?.classList.remove('upload-initial', 'text-upload-initial');
        title?.classList.add('text-not-allowed');
        container?.classList.add('not-allowed');
        containerIMG?.append(img);
      }
    }else{
      title?.classList.add('text-allowed');
        container?.classList.add('allowed');
    }

  };
  const onDragLeave = () =>{
    const title = document.querySelector('.title_upload');
    const container = document.querySelector('.container-drag')
    if(container.querySelector('img')) container.querySelector('img')?.remove();
    title.innerHTML = 'Arraste ou selecione seus arquivos';
    title?.classList.remove('text-not-allowed');
    container?.classList.remove('not-allowed');
    title?.classList.remove('text-allowed');
    container?.classList.remove('allowed');
    container?.classList.add('upload-initial', 'text-upload-initial');
  }
  const onDrop = () => {
    clearFile();

    const title = document.querySelector('.title_upload');
    const container = document.querySelector('.container-drag')
    title.innerHTML = 'Arraste ou selecione seus arquivos';

    if(container.querySelector('img')) container.querySelector('img')?.remove();
    title?.classList.remove('text-not-allowed');
    container?.classList.remove('not-allowed');
    title?.classList.remove('text-allowed');
    container?.classList.remove('allowed');

    container?.classList.add('upload-initial', 'text-upload-initial');
  }

  const onFilesDrops = (files) => {
    const images = Array.from(files).filter(file => {
      if(String(file.type).includes('image/')) return file
    }).map((file) => file)
    setMultipleImages(prev => prev.concat(images));
  }

  const clearFile = () => {
    const inputFile = document.querySelector('.file');
    inputFile.value = '';
  }

  return (
    <div className="container">
      <Card classe="my-64 px-24 py-32">
        <header className="flex justify-between md2:flex-col md2:gap-16 align-center">
          <h1 className="!title3">Meu Integrador</h1>
        </header>

        <form onSubmit={handleSubmit(data => saveIntegrator(data, multipleImages))}>
          <div className='flex flex-col gap-24 mb-24'>
            <div className="flex gap-16 items-start md2:flex-col">
              <Input classe="flex-1 md2:w-full" control={control} name={'name'} label={'Nome'} />
              <Input classe="flex-1 md2:w-full" control={control} name={'about'} label={'Sobre'} />
            </div>
            <div className='flex gap-16 items-start md2:flex-col'>
              <div onDragEnter={onDragEnter} onDrop={onDrop} onDragOver={onDragEnter} onDragLeave={onDragLeave} ref={wrapperRef} className='w-full cursor-pointer h-[150px] container-drag border border-primary-dark border-dashed rounded-md relative grid place-items-center'>
                <input className='flex-1 absolute w-full h-full opacity-0 file'  multiple accept="image" type="file" 
                    {...register('photo', {
                      required: true,
                      onChange: (e) => onFilesDrops(e.target.files)
                    })} 

                    onClick={clearFile}
                  />
                <div className="container-img flex items-center flex-col-reverse gap-10">
                  <p className='text-primary-pure title_upload'>Arraste ou selecione seus arquivos</p>
                </div>
              </div>
              
                <Swiper
                  spaceBetween={16}
                  direction="horizontal"
                  className="h-[150px] w-full px-8 rounded-md bg-primary-pure/10"
                  slidesPerView={'auto'}
                  touchStartPreventDefault={false}
                  mousewheel>
                    <div className='w-full grid place-items-center relative'>
                      {
                        multipleImages.map((img, i) => {
                       
                          let urlFormated = img.type ? URL.createObjectURL(img) : img
                          return(
                            <SwiperSlide className='flex items-center w-max' key={i}>
                              <div className='relative'>
                                <div onClick={() => removeImg(img)} className='absolute right-0 top-0 w-24 h-24 bg-primary-pure grid place-items-center rounded-tr-md rounded-bl-md'>x</div>
                                <motion.div initial={{scale: 0, opacity: '0'}} animate={{scale: 1, opacity: 1}}
                                exit={{scale:0, opacity: 0}}
                                transition={{duration: 0.3}} >
                                 <img className=' h-[130px] max-w-[200px] rounded-md' src={urlFormated} alt="" />
                                </motion.div>
                              </div>
                            </SwiperSlide>
                          )
                        })
                      }

                </div>
                </Swiper>
              
            </div>
            <div className='flex gap-16 md2:flex-col'>  
              <Input
                classe='flex-1'
                control={control}
                name={'services_offered'}
                label={'Serviços ofertados'}
              />
              <Input
                classe='flex-1'
                control={control}
                name={'brands_and_equipment'}
                label={'Marcas e equipamentos'}
              />
            </div>
            <div className="flex gap-16 md2:flex-col">
              <Input
                classe='flex-1'
                control={control}
                name={'service_regions'}
                label={'Regiões atendidas'}
              />
              <Input classe='flex-1' control={control} name={'federative_unit'} label={'Estado'} />
            </div>
            <Input control={control} name={'city'} label={'Cidade'} />
          </div>
          



          <Button type="submit">Salvar</Button>
        </form>
      </Card>
    </div>
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
