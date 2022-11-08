import { useEffect } from "react"
import { useState } from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import Button from "../../../components/DesignSystem/Button"
import { Card } from "../../../components/DesignSystem/Card"
import { Input } from "../../../components/DesignSystem/Input"
import { InputDate } from "../../../components/DesignSystem/InputDate"
import { Modal } from "../../../components/DesignSystem/Modal/Modal"
import { ModalContent } from "../../../components/DesignSystem/Modal/ModalContent"
import { ModalHeader } from "../../../components/DesignSystem/Modal/ModalHeader"
import { SelectComponent } from "../../../components/DesignSystem/SelectComponent"
import Upload from "../../../components/DesignSystem/Upload"
import SvgUse from "../../../components/svg/svgUse"
import { useGlobalContext } from "../../../context/GlobalContext"
import Usuarios from "./usuarios"

const Perfil = () => {
    // tab 1
    const pessoa = [
        {
            value: 'fisica', label: 'Fisica'
        },
        {
            value: 'juridica', label: 'Jurídica'
        }
    ]
    const [typePeople, setTypePeople] = useState();

    const { setmodalOpen, modalOpen } = useGlobalContext();

    useEffect(() => {
        if (modalOpen.open == false || modalOpen.open == null) {
            clearTimeout(window.timePerfil)
        }
    }, [modalOpen])

    const closeModal = () => {
        setmodalOpen({ open: false, id: false })
    }

    const [date, setDate] = useState(new Date());

    const viewRules = () => {
        // setTimeout(() => {
        //     console.log('executei')
        //     let test = document.querySelector('.test')
        //     console.log(test.clientHeight);
        //     test.style.height = '0px'
        //   console.log(test.style.height);
        //   console.log(document.querySelector('.test')?.scrollHeight)
        // }, 1)
        
    }

    return (
        <>
            <Modal className={`w-[600px]  md2:max-w-[400px] md2:w-[95vw]`}>
                <ModalContent id="confirm">
                    <ModalHeader text="Alterar senha" />

                    <div className="p-24 flex flex-col gap-20">
                        <h1 className="text-neutral-90 font-semibold" >Informe uma nova senha </h1>
                        <label className='text-neutral-80 text-sm flex-1 relative'>
                            Senha
                            <Input placeholder="Digite sua senha antiga" type="password"
                            // state={nomeCompleto} setStateCurrent={setNomeCompleto}
                            />
                            <SvgUse id="#icon-eye" classe="w-20 h-48 absolute bottom-0 my-auto right-16" />
                        </label>

                        <label className='text-neutral-80 text-sm flex-1 relative'>
                            Nova Senha
                            <Input placeholder="Digite sua nova senha" type="password"
                            // state={nomeCompleto} setStateCurrent={setNomeCompleto}
                            />
                            <SvgUse id="#icon-eye" classe="w-20 h-48 absolute bottom-0 my-auto right-16" />
                        </label>

                        <label className='text-neutral-80 text-sm flex-1 relative'>
                            Confirme sua senha
                            <Input placeholder="Confirme sua nova senha" type="password"
                            // state={nomeCompleto} setStateCurrent={setNomeCompleto}
                            />
                            <SvgUse id="#icon-eye" classe="w-20 h-48 absolute bottom-0 my-auto right-16" />
                        </label>

                    </div>


                    <footer className="flex ml-auto px-24 pb-16">
                        <Button classe="mr-16 h-48 secondary"
                        // onClick={openCreateUpdate}
                        >
                            Cancelar
                        </Button>
                        <Button
                            // iconID="#icon-folder-delete" 
                            // onClick={deleteEmbalagem}
                            classe={`h-48`}
                        >
                            Salvar alterações
                        </Button>
                    </footer>
                </ModalContent>

                {/* 
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
								fill="#1a2e77"
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
							Voltar para lista
						</Button>

					</div>
				</ModalContent> */}
            </Modal>

            <div className="container">

                <Card classe="mt-64 shadow-none  relative h-[320px] shadow-md">
                    <div className="h-[185px] bg-primary-90 relative z-10 overflow-hidden rounded-t-md p-0">
                        <SvgUse id="#icon_cevada_2" classe="h-[200px]  absolute -bottom-64 -left-[100px]  rotate-[30deg]" />
                        <SvgUse id="#icon_cevada_2" classe="h-[200px]  absolute -bottom-56 -right-32 sm:-right-[80px]" />
                    </div>

                    <Card classe="bg-white absolute w-[140px] h-[140px] bg-transparent border-2 border-[#FFF] md2:w-[8rem] md2:h-[8rem] md2:bottom-[70px]  rounded-[50%] left-0 right-0 z-[100] bottom-[60px] mx-auto flex flex-col items-center  gap-16 md2:flex-col">
                        <div className='relative'>
                            <img className="!w-full !h-full rounded-[50%] border-2 border-primary-90" src="https://github.com/brunoyottabyte.png" alt="retrato" />
                            <div className='absolute w-40 h-40 bg-neutral-40 flex justify-center items-center rounded-full bottom-0 right-0'>
                                <SvgUse id="#icon-camera" classe="w-24 h-24" />
                            </div>
                        </div>

                        <div>
                            <h1 className="font-medium text-2xl text-neutral-80">Insira a foto</h1>
                        </div>
                    </Card>

                </Card>


                <div className="mt-16 mb-56 shadow-sm tabs-container cadastro-funcionario  bg-white rounded-md rounded-tl-16">
                    <Tabs>
                        <TabList>
                            <Tab prefix='tab' classID='config'>Configurações gerais</Tab>
                            <Tab classID='seguranca'>Segurança</Tab>
                            <Tab classID='assinatura'>Assinatura</Tab>
                            <Tab classID='permissoes' onClick={viewRules}>Usuários e Permissões</Tab>
                        </TabList>

                        <TabPanel>
                            <section className='px-24 pb-24 '>
                                <h1 className='text-2xl text-neutral-80 font-medium mb-32'>Configurações gerais</h1>

                                <div className='flex md2:flex-col gap-16 md2:flex-wrap mb-24'>
                                    <div className='flex flex-1 flex-col gap-16'>
                                        <label className='text-neutral-80 text-sm'>
                                            Nome completo
                                            <Input placeholder="Nome"
                                            // state={nomeCompleto} setStateCurrent={setNomeCompleto}
                                            />
                                        </label>


                                        <label className='text-neutral-80 w-full  text-sm '>
                                            CPF
                                            <Input placeholder="123.123.123-12"
                                            // value={GLOBAL.CPFFormatter(cpf)} maxLength={14} onChange={(e) => {
                                            //     if (e.target.value.lenhth >= 14) return
                                            //     setCpf(e.target.value)
                                            // }} 
                                            />
                                        </label>

                                        {/* <label className='text-neutral-80 w-full  text-sm '>
                                            RG
                                            <Input placeholder="12.123.123-1" 
                                            // value={GLOBAL.RgFormatter(rg)} maxLength={12} onChange={(e) => setRg(e.target.value)}
                                             />
                                        </label> */}


                                        <div className="flex gap-8 md2:flex-col">
                                            <label className='text-neutral-80 w-full text-sm'>
                                                Tipo de pessoa
                                                <SelectComponent
                                                    data={pessoa}
                                                    state={typePeople}
                                                    classe={'md'}
                                                    classeSelect="!h-56"
                                                    setStateCurrent={setTypePeople}
                                                />
                                            </label>
                                            <label className='text-neutral-80 w-full  text-sm '>
                                                Telefone
                                                <Input placeholder="(88) 9 95432122" />
                                            </label>
                                        </div>

                                        <label className='text-neutral-80 text-sm'>
                                            E-mail
                                            <Input placeholder="Panificadora.alfa@gmail.com"
                                            // state={nomeCompleto} setStateCurrent={setNomeCompleto}
                                            />
                                        </label>

                                    </div>

                                    <div className='text-neutral-80 md2:mb-48 text-sm  flex-1 md2:flex-initial md2:flex-wrap flex flex-col gap-16'>

                                        <label className='w-full'>
                                            Endereço
                                            <Input placeholder="Rubens Guimaraes"
                                            // state={orgaoEmissor} setStateCurrent={setOrgaoEmissor}
                                            />
                                        </label>

                                        <div className="flex gap-16 md2:flex-col">
                                            <label className='flex-1'>
                                                Bairro
                                                <Input placeholder="Campo"
                                                // state={orgaoEmissor} setStateCurrent={setOrgaoEmissor}
                                                />
                                            </label>
                                            <label className=''>
                                                Nº
                                                <Input placeholder="123"
                                                />
                                            </label>
                                        </div>

                                        <div className="flex gap-16  md2:flex-col">
                                            <label className='flex-1 md2:w-full'>
                                                Cidade
                                                <Input placeholder="Iracema"
                                                // state={orgaoEmissor} setStateCurrent={setOrgaoEmissor}
                                                />
                                            </label>
                                            <label className=''>
                                                Estado
                                                <Input placeholder="CE"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <Button classe="ml-auto mr-16 secondary h-48"
                                        onClick={() => document.querySelector('[classID=dados_profissionais]').click()}
                                    >Voltar</Button>
                                    <Button classe="h-48"
                                        onClick={() => document.querySelector('[classID=seguranca]').click()}
                                    >Prosseguir</Button>
                                </div>
                            </section>
                        </TabPanel>

                        <TabPanel>
                            <section className='px-24 pb-24'>
                                <h1 className='text-2xl text-neutral-80 font-medium mb-32'>Segurança</h1>

                                <div className='flex flex-col gap-16 mb-24 w-[50%] md2:w-full'>
                                    <label className='text-neutral-80 text-sm'>
                                        Usuário
                                        <Input placeholder="Panificadora.alfa@gmail.com"
                                        />
                                    </label>
                                    <div className="flex gap-16 items-end">
                                        <label className='text-neutral-80 text-sm flex-1 relative'>
                                            Senha
                                            <Input placeholder="*********" type="password"
                                            // state={nomeCompleto} setStateCurrent={setNomeCompleto}
                                            />
                                            <SvgUse id="#icon-eye" classe="w-20 h-48 absolute bottom-0 my-auto right-16" />
                                        </label>
                                        <Button className="h-48 btn secondary"
                                            onClick={() => {
                                                setmodalOpen({ open: true, id: 'confirm' })
                                            }}
                                        >
                                            Alterar senha
                                        </Button>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <Button classe="ml-auto mr-16 secondary h-48"
                                        onClick={() => document.querySelector('[classID=config]').click()}
                                    >Voltar</Button>
                                    <Button classe="h-48"
                                        onClick={() => document.querySelector('[classID=assinatura]').click()}
                                    >Prosseguir</Button>
                                </div>
                            </section>
                        </TabPanel>

                        <TabPanel>
                            <section className='px-24 pb-24'>
                                <h1 className='text-2xl text-neutral-80 font-medium mb-32'>Assinatura</h1>

                                <div className='flex gap-16 mb-24 md2:w-full md2:flex-col'>
                                    <label className='text-neutral-80 text-sm flex-1 mr-16'>
                                        Plano Atual
                                        <Input placeholder="Plano Mensal"
                                        />
                                    </label>
                                    <div className="flex gap-16 items-end flex-1 md2:flex-col">
                                        <label className='text-neutral-80 text-sm flex-1 md2:w-full relative'>
                                            Válido até
                                            <InputDate setStartDate={setDate} startDate={date} classe="w-full" />
                                        </label>

                                        <label className='text-neutral-80 text-sm flex-1 md2:w-full relative'>
                                            Data de Pagamento
                                            <InputDate setStartDate={setDate} startDate={date} classe="w-full" />

                                        </label>

                                    </div>
                                </div>

                                <div className='flex'>
                                    <Button classe="ml-auto mr-16 secondary h-48"
                                        onClick={() => document.querySelector('[classID=seguranca]').click()}
                                    >Voltar</Button>
                                    <Button classe="h-48"
                                        onClick={() => {
                                            viewRules()
                                            document.querySelector('[classID=permissoes]').click()
                                        }}
                                    >Prosseguir</Button>
                                </div>
                            </section>
                        </TabPanel>

                        <TabPanel>
                            <section className='px-24 pb-24'>

                                <div className="flex justify-between items-center md2:flex-col md2:gap-16">
                                    <h1 className='text-2xl text-neutral-80 font-medium'>Usuários e permissões</h1>
                                    <Button
                                        iconID="#icon_add" svgClass="!w-20 !h-20" classe="md2:w-full flex justify-center h-48">
                                        Novo usuario
                                    </Button>
                                </div>

                                <div className="w-full mt-32 mb-24 flex flex-col gap-8">
                                    <Usuarios />
                                    <Usuarios />
                                </div>

                                <div className='flex'>
                                    <Button classe="ml-auto mr-16 secondary h-48"
                                        onClick={() => document.querySelector('[classID=assinatura]').click()}
                                    >Voltar</Button>
                                    <Button classe="h-48"
                                        onClick={() => document.querySelector('[classID=]').click()}
                                    >Salvar alterações</Button>
                                </div>
                            </section>
                        </TabPanel>


                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default Perfil