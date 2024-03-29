import React, {useState, useEffect} from 'react';
import Button from '../../components/DesignSystem/Button';
import SvgUse from '../../components/svg/svgUse';
import {Modal} from '../../components/DesignSystem/Modal/Modal';
import {ModalHeader} from '../../components/DesignSystem/Modal';
import {VerProjetoProvider, useVerProjeto} from './context';

import {useGlobalContext} from '../../context/GlobalContext';

import RadioButton from '../../components/DesignSystem/RadioButton';
import Header from './components/Header';
import ConsumptionGraph from './components/ConsumptionGraph';
import TimeLine from './components/TimeLine';
import TabsArea from './components/TabsArea';
import ButtonsSteps from './components/ButtonsSteps';
import {ModalContent} from '../../components/DesignSystem/Modal/ModalContent';

import {motion} from 'framer-motion'
 

const VerProjetoContent = () => {
  
  const {budgetRequest, address} = useVerProjeto();
  const [loading, setLoading] = useState(false);
  const {setmodalOpen, modalOpen} = useGlobalContext();

  useEffect(() => {
    if (modalOpen.open == false || modalOpen.open == null) {
      // @ts-ignore
      clearTimeout(window.timeoutProjeto);
    }
  }, [modalOpen]);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  let sunInit = [
    {
      state: 'vazio'
    },
    {
      state: 'vazio'
    },
    {
      state: 'vazio'
    },
    {
      state: 'vazio'
    },
    {
      state: 'vazio'
    },
  ]
  const [sunArr, setSunArr] = useState(sunInit)
  const [sunClicked, setSunClicked] = useState({
    state: false,
    selected: null
  });

  const handleEnter = (e) => {
    let indexCurrent = e?.target?.attributes?.sunindex?.value;
    for (let i = 0; i <= indexCurrent; i++){
      sunInit[i].state = 'cheio';
    }
    setSunClicked(prev => ({
      ...prev,
      selected: Number(indexCurrent)+1
    }));

    setSunArr(sunInit)
  }

  const handleLeave = (e) => {
    console.log(sunClicked)
    !sunClicked.state ? setSunArr(sunInit) : ''
  }

  const closeModal = () => {
    setmodalOpen({open: false, id: null})
  }

  return (
    <>
     <Modal className={'w-[37rem]  md2:max-w-[400px] md2:w-[95vw]'}>
        <ModalContent id="approved">
          <ModalHeader text={''} close={false} classeHeader="bg-white title3">
            <div className="title3 flex  w-full justify-between items-center">
              Orçamento aprovado
              <SvgUse id="#icon_help_ms" classe="!w-24 !h-24" />
            </div>
          </ModalHeader>
          <p className="paragraph1 px-24">
            Saia como nosso time vai trabalhar a partir de agora:
          </p>

          <div className="mt-40 flex flex-col gap-16 px-24">
            <p className="paragraph1">
              1 - Você receberá o boleto e NF para pagamento.
            </p>
            <p className="paragraph1">
              2 - Assim que efetuar o pagamento, favor anexar no campo
              (comprovante de pagamento).
            </p>
            <p className="paragraph1">
              3 - Nossos engenheiros estão trabalhando no projeto e homologação
              junto a concessionária. Em algumas regiões a concessionária pode
              solicitar documentos adcionais, caso isso aconteça nosso time fará
              contato solicitando.
            </p>

            <p className="paragraph1">
              4 - Após receber o comprovante de pagamento,{' '}
              <span className="text-primary-pure">
                seu kit será separado no prazo de 24h
              </span>
              , e coletado pela transportadora. Por gentileza nos informe assim
              que receber no campo (agendar instalação). Assim que nossa equipe
              receber a solicitação de agendamento, você receberá as datas
              disponíveis para programação da instalação.
            </p>
          </div>

          <main className=" p-24 flex flex-col gap-16 relative">
            <div className="mt-10">
              <span className="w-full h-1 block absolute left-0  bg-neutral-100"></span>
            </div>

            <div className="w-full md:flex-col flex justify-end gap-8">
              <Button
                iconID="#icon_upload_ms"
                svgClass="!w-24 !h-24"
                className={`btn h-48 md:justify-center secondary mt-8 md:w-full ${
                  loading ? 'is-loading' : ''
                }`}
                onClick={() => {}}>
                Anexar comprovante
              </Button>
              <Button
                onClick={() => setmodalOpen({open: false, id: 'approved'})}
                className={`btn h-48 md:w-full md:justify-center mt-8 ${
                  loading ? 'is-loading' : ''
                }`}>
                Agendar Instalação{' '}
                <SvgUse id="#icon_arrow_left" classe="!w-10 !h-10" />
              </Button>
            </div>
          </main>
        </ModalContent>

        <ModalContent id="feedbackTechnical">
          <button
            type="button"
            style={{'--cor-1': '#F69F00'}}
            className="absolute right-24 top-24 border border-neutral-60/30 hover:border-primary-pure  rounded-full"
            onClick={() =>
              setmodalOpen({open: false, id: 'feedbackTechnical'})
            }>
            <SvgUse id="#icon_close_ms" classe="!w-28 !h-28" />
          </button>
          <div className="flex flex-col gap-24 p-24 select-none">
            <div className="flex gap-8 items-center">
              <img
                src="https://github.com/brunoyottabyte.png"
                alt="tecnico"
                className="w-40 h-40 rounded-full"
              />
              <p className="paragraph1">Nome do Técnico</p>
            </div>

            <div>
              <div className="flex gap-14 items-center">
                <p className="paragraph1 text-neutral-70">
                  Avalie sua primeira visita:{' '}
                </p>
                <div className="container-sun flex gap-8 items-center">
                  {sunArr.map((item, i) =>
                    item.state == 'cheio' ? (
                      <SvgUse
                        onMouseEnter={handleEnter}
                        onClick={() => setSunClicked({
                          state: !sunClicked.state,
                          selected: i+1
                        })}
                        onMouseLeave={handleLeave}
                        id="#icon_sun_ms"
                        sunindex={i}
                        classe="!w-24 !h-24 sun-svg"
                        key={`${i}-svg`}
                      />
                    )
                     : (
                      <SvgUse
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                        onClick={() => setSunClicked({
                          state: !sunClicked.state,
                          selected: i+1
                        })}
                        id="#icon_sun_vazio_ms"
                        classe="!w-24 !h-24 sun-svg"
                        sunindex={i}
                        key={`${i}-svg`}
                      />
                    ),
                  )}
                </div>
              </div>
              <h3 className="title3 mt-10">
                Enquanto isso o que acha de avaliar o técnico que lhe atendeu?
              </h3>
            </div>

            <div>
              <p className="headline2 mb-16">1- O Técnico foi pontual?</p>

              <div className="flex gap-24 items-center">
                <label className="flex items-center">
                  <RadioButton name="pontual" /> Sim
                </label>
                <label className="flex items-center">
                  <RadioButton name="pontual" /> Não
                </label>
              </div>
            </div>

            <div>
              <p className="headline2 mb-16">
                2 - Usou os EPIs e uniforme corretamente?
              </p>

              <div className="flex gap-24 items-center">
                <label className="flex items-center">
                  <RadioButton name="etica" /> Ruim
                </label>
                <label className="flex items-center">
                  <RadioButton name="etica" /> Razoável
                </label>
                <label className="flex items-center">
                  <RadioButton name="etica" /> Bom
                </label>
                <label className="flex items-center">
                  <RadioButton name="etica" /> Ótimo
                </label>
              </div>
            </div>

            <div>
              <p className="headline2 mb-16">
                3 - Foi cordial, atendeu suas espectativas?
              </p>

              <div className="flex gap-24 items-center">
                <label className="flex items-center">
                  <RadioButton name="educacao" /> Ruim
                </label>
                <label className="flex items-center">
                  <RadioButton name="educacao" /> Razoável
                </label>
                <label className="flex items-center">
                  <RadioButton name="educacao" /> Bom
                </label>
                <label className="flex items-center">
                  <RadioButton name="educacao" /> Ótimo
                </label>
              </div>
            </div>
          </div>

          <main className=" p-24 flex flex-col gap-16 relative">
            <div className="mt-10">
              <span className="w-full h-1 block absolute left-0  bg-neutral-100"></span>
            </div>

            <div className="w-full md:flex-col flex justify-end ">
              <Button
                className={`btn h-48 md:w-full md:justify-center mt-8 ${
                  loading ? 'is-loading' : ''
                }`}>
                Enviar Feedback
                <SvgUse id="#icon_arrow_left" classe="!w-10 !h-10" />
              </Button>
            </div>
          </main>
        </ModalContent>

        <ModalContent id="animation">
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
     </Modal>
    <motion.div 
		initial={{translateX: '-20%', opacity: 0}}
		animate={{translateX: 0, opacity: 1}}
		exit={{translateX: '-20%', opacity: 0}}
		transition={{duration: 0.3}}
		>
     
      <div className="container my-64  flex flex-col gap-16">
        <ButtonsSteps />
        {budgetRequest && (
          <Header
            id={budgetRequest.id}
            client_name={budgetRequest.client_name}
            client_email={budgetRequest.client_email}
            client_phone={budgetRequest.client_phone}
            client_postal_code={budgetRequest.client_postal_code}
            client_type={budgetRequest.client_type}
            average_consumption={budgetRequest.average_consumption}
            address={address}
          />
        )}

        {budgetRequest && (
          <ConsumptionGraph {...budgetRequest.month_consumption} />
        )}

        <TimeLine />

        <TabsArea />


       
      </div>
      </motion.div>
      </>
  );
};

const VerProjeto = () => {
  return (
    <VerProjetoProvider>
      <VerProjetoContent />
    </VerProjetoProvider>
  );
};
export default VerProjeto;
