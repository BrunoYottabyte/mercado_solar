import React, { useEffect } from 'react'
import { Card } from '../../../components/DesignSystem/Card'
import SvgUse from '../../../components/svg/svgUse'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Input } from '../../../components/DesignSystem/Input';
import TextArea from '../../../components/DesignSystem/TextArea';
import Button from '../../../components/DesignSystem/Button';
import { InputDate } from '../../../components/DesignSystem/InputDate';
import { SelectComponent } from '../../../components/DesignSystem/SelectComponent';
import { useState } from 'react';
import Upload from '../../../components/DesignSystem/Upload';
import { GLOBAL } from '../../../utils/GLOBAL';
import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../../services/api';
import { ModalContent } from '../../../components/DesignSystem/Modal/ModalContent';
import { Modal } from '../../../components/DesignSystem/Modal/Modal';
import { useGlobalContext } from '../../../context/GlobalContext';
import moment from 'moment';
import axios from 'axios';

const CadastroFuncionario = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    // 1º TAB
    const [cargo, setCargo] = useState(2);
    const [departamento, setDepartamento] = useState(2);
    const [formacao, setFormacao] = useState(2);
    const [miniCurriculo, setMiniCurriculo] = useState('');


    // 2º TAB

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [orgaoEmissor, setOrgaoEmissor] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');

    // 3º TAB 
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');


    const [ufSelected, setUfSelected] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');

    // 5º TAB
    const [email, setEmail] = useState('');
    const [emailCorporativo, setEmailCorporativo] = useState('');
    const [telefone, setTelefone] = useState('');
    const [telefone2, setTelefone2] = useState('');

    // 6º TAB
    const [observacoesGerais, setObservacoesGerais] = useState('');
    const [filesSaves, setFilesSaves] = useState([]);

    const [fileFormat, setFileFormat] = useState();
    const { showToastify } = GLOBAL;
    const { setmodalOpen, modalOpen } = useGlobalContext();
    const [action, setAction] = useState('create');

    //selects
    const [escolaridades, setEscolaridades] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);
    const [cargos, setCargos] = useState([]);
    const [uf, setUf] = useState([]);

    const requestsSelects = async () => {
        axios.all([
            '/api/recursos_humanos/escolaridades/',
            '/api/recursos_humanos/departamentos/',
            '/api/recursos_humanos/cargos/',
            '/api/core/estados/'
        ].map(path => api.get(path))).then(response => response.map(res => res.data)).then(datas => {
            let formatedEscolaridade = datas[0].map((escolaridade) => ({
                value: escolaridade.id,
                label: escolaridade.formacao
            }))
            setEscolaridades(formatedEscolaridade);

            let formatedDepartamentos = datas[1].map((current) => ({
                value: current.id,
                label: current.departamento
            }))
            setDepartamentos(formatedDepartamentos);

            let formatedCargos = datas[2].map((current) => ({
                value: current.id,
                label: current.cargo
            }))
            setCargos(formatedCargos);

            let formatedUf = datas[3].map((current) => ({
                value: current.id,
                label: current.uf
            }))
            setUf(formatedUf);
        });
    }
    useEffect(() => {
        requestsSelects();
    }, []);

    const [dataEmployee, setDataEmployee] = useState();
    useEffect(() => {
        const id = location.pathname.split('/').at(-1);
        if (Number(id)) {
            setAction('update');
            api.get(`/api/recursos_humanos/funcionarios/${id}`).then(({ data }) => {
                console.log(data);
                setTelefone(data?.celular);
                setTelefone2(data?.telefone);
                setCpf(data?.cpf);
                setNascimento(new Date(moment(data?.data_nascimento)));
                setDepartamento(data?.departamento);
                setEmail(data?.email_pessoal);
                setEmailCorporativo(data?.email_corporativo);
                setFormacao(data?.formacao_escolaridade);
                setMiniCurriculo(data?.mini_curriculo);
                setNomeCompleto(data?.nome);
                setObservacoesGerais(data?.observacoes);
                setOrgaoEmissor(data?.orgao_emissor);
                setRg(data?.rg);
                setCargo(data.cargo)
                setCidade(data?.endereco?.cidade?.nome);
                setEndereco(data?.endereco?.rua)
                setNumero(data?.endereco?.numero);
                setBairro(data?.endereco?.bairro);
                setComplemento(data?.endereco?.complemento);
                setUfSelected(data?.endereco?.cidade?.estado?.id)
                setCep(data?.endereco?.cep)
                setDataEmployee(data);
            })
                .catch((err) => {
                    const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(err.response?.data);
                    messages.map(message => showToastify(message))
                })
        }
    }, [])

    const [url64, setUrl64] = useState('')
    useEffect(() => {
        console.log('antes de transformar ', nascimento)
        var formdata = new FormData();
        if (filesSaves[0]) formdata.append("contrato_anexo", filesSaves[0]);
        formdata.append("cargo", Number(cargo));
        formdata.append("departamento", Number(departamento));
        formdata.append("nome", nomeCompleto);
        formdata.append("situacao", 'Inativo');
        formdata.append("cpf", cpf);
        formdata.append("rg", rg);
        formdata.append("orgao_emissor", orgaoEmissor);
       
        // formdata.append("endereco", JSON.stringify({
        //     endereco,
        //     numero,
        //     cep,
        //     bairro,
        //     complemento,
        //     nome_cidade: cidade,
        //     estado: 2
        // }));
        formdata.append("endereco[numero]", numero);
        formdata.append("endereco[endereco]", endereco);
        formdata.append("endereco[cep]", cep);
        formdata.append("endereco[bairro]", bairro);
        formdata.append("endereco[complemento]", complemento);
        formdata.append("endereco[nome_cidade]", cidade);
        formdata.append("endereco[estado]", 2);
        formdata.append("user", '');
        formdata.append("telefone", telefone);
        formdata.append("celular", telefone2);
        formdata.append("email_corporativo", emailCorporativo);
        formdata.append("email_pessoal", email);
        formdata.append("formacao_escolaridade", Number(formacao));
        formdata.append("observacoes", observacoesGerais);
        formdata.append("data_nascimento", moment(nascimento).format('YYYY-MM-DD'));
        formdata.append("mini_curriculo", miniCurriculo);

        if (action == 'update') {
            formdata.append("id_cidade", dataEmployee?.endereco?.cidade?.id);
            if (!filesSaves[0]) formdata.append("contrato_anexo", dataEmployee?.contrato_anexo);
        }

        setFileFormat(formdata);

    }, [cargo,
        departamento,
        formacao,
        miniCurriculo,
        nomeCompleto,
        orgaoEmissor,
        nascimento,
        cpf,
        rg,
        cep,
        cidade,
        bairro,
        complemento,
        ufSelected,
        endereco,
        numero,
        email,
        emailCorporativo,
        telefone,
        telefone2,
        observacoesGerais,
        filesSaves
    ])
    const createOrUpdateEmployee = async () => {
        try {
            setLoading(true)
            if (action == 'create') {
                const response = await api.post('/api/recursos_humanos/funcionarios/', fileFormat);
            } else {
                const response = await api.put(`/api/recursos_humanos/funcionarios/${dataEmployee.id}/`, fileFormat);
            }
            success();
        } catch (err) {
            console.log(err.response?.data);
            const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(err.response?.data);
            messages.map(message => showToastify(message))
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        let file = filesSaves[0]
        if (file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setUrl64(reader.result);
            }
            console.log('fileee', URL.createObjectURL(file))
        } else {
            setUrl64('');
        }
    }, [filesSaves])
    const closeModal = () => {
        setmodalOpen({ open: false, id: false })
    }


    useEffect(() => {
        if (modalOpen.open == false || modalOpen.open == null) {
            clearTimeout(window.timeoutRegisterFunc)
        }
    }, [modalOpen]);

    const success = () => {
        setmodalOpen({ open: true, id: 'animation' });
        window.timeoutRegisterFunc = setTimeout(closeModal, 5000)
    }

    const ContainerAnex = (src) => {
        console.log(src);
        return (
            <div className='relative'>
                <SvgUse id="#icon_close2" classe="absolute right-0 z-[1] w-14 h-14"
                    style={{ color: '#1a2e77' }}
                    onClick={(e) => {
                        e.preventDefault();
                        setFilesSaves([]);
                        setDataEmployee(prev => ({
                            ...prev,
                            contrato_anexo: null
                        }))
                    }}
                />
                <img className='max-h-[7.5rem]' src={src} alt="contrato" />
            </div>
        )
    }
    

    return (
        <div className='container'>
            <Modal className={`w-[600px]  md2:max-w-[400px] md2:w-[95vw]`}>

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
                            {action == 'update' ? 'Atualizado com sucesso!' : 'Salvo com Sucesso'}
                        </p>


                        <Button
                            onClick={() => {
                                closeModal();
                                navigate('/gestao-pessoas/colaboradores');
                            }}
                            classe="mt-16 w-full h-56 text-center justify-center"
                            svgClass="rotate-180"
                            iconID="#icon_arrow_left"
                        >
                            Voltar para lista.
                        </Button>

                    </div>
                </ModalContent>
            </Modal>
            <Card classe="mt-64 shadow-none  relative h-[320px] shadow-md">
                <div className="h-[185px] relative z-10 overflow-hidden rounded-t-md p-0">
										{/* bg-primary-90  */}
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
                        <Tab prefix='tab' classID='dados_profissionais'>Dados Profissionais</Tab>
                        <Tab classID='dados_pessoais'>Dados Pessoais</Tab>
                        <Tab classID='endereco'>Endereço</Tab>
                        <Tab classID='contato'>Contato</Tab>
                        <Tab classID='contrato'>Contratos</Tab>
                    </TabList>

                    <TabPanel>
                        <section className='px-24 pb-24'>
                            <h1 className='text-2xl text-neutral-80 font-medium mb-32'>Dados Profissionais</h1>

                            <div className='flex md2:flex-col gap-16 mb-24'>
                                <div className='flex md2:flex-col flex-1 flex-col gap-16'>
                                    <label className='text-neutral-80 text-sm'>
                                        Cargo
                                        <SelectComponent
                                            classe={`md relative z-[10] cadastro-funcionario menuplacement-top`}
                                            data={cargos}
                                            setStateCurrent={setCargo}
                                            placeholder={`Cargo`}
                                            state={cargo}
                                            value={cargo}
                                            menuPlacement="top"
                                        />
                                    </label>

                                    <label className='text-neutral-80 text-sm w-full'>
                                        Departamento
                                        {/* <Input placeholder="Ex.: Produção." state={departamento} setStateCurrent={setDepartamento} /> */}
                                        <SelectComponent
                                            classe={`md relative z-[10]  cadastro-funcionario menuplacement-top`}
                                            data={departamentos}
                                            setStateCurrent={setDepartamento}
                                            placeholder={`Departamento`}
                                            state={departamento}
                                            value={departamento}
                                            menuPlacement="top"
                                        />
                                    </label>

                                    <label className='text-neutral-80 text-sm '>
                                        Formação
                                        <SelectComponent
                                            classe={`md relative z-[10]  cadastro-funcionario menuplacement-top`}
                                            data={escolaridades}
                                            setStateCurrent={setFormacao}
                                            placeholder={`Formação`}
                                            state={formacao}
                                            value={formacao}
                                            menuPlacement="top"
                                        // menuIsOpen
                                        />
                                    </label>
                                </div>

                                <div className='flex-1 text-neutral-80 text-sm '>
                                    <label >
                                        Mini-currículo
                                        <TextArea classe="border  !h-[116px] !border-transparent !border-b-neutral-30" placeholder="Digite aqui..." value={miniCurriculo} onChange={(e) => setMiniCurriculo(e.target.value)} />
                                    </label>
                                </div>
                            </div>

                            <div className='flex'>
                                <Button classe="ml-auto mr-16 secondary h-48"
                                    onClick={() => navigate('/gestao-pessoas/colaboradores/')}
                                >Cancelar</Button>
                                <Button classe="h-48"
                                    onClick={() => document.querySelector('[classID=dados_pessoais]').click()}
                                >Prosseguir</Button>
                            </div>
                        </section>
                    </TabPanel>

                    <TabPanel>
                        <section className='px-24 pb-24 overflow-hidden'>
                            <h1 className='text-2xl text-neutral-80 font-medium mb-32'>Dados pessoais</h1>

                            <div className='flex gap-16 md2:flex-wrap mb-24'>
                                <div className='flex flex-1 flex-col gap-16'>
                                    <label className='text-neutral-80 text-sm'>
                                        Nome completo
                                        <Input placeholder="Nome" state={nomeCompleto} setStateCurrent={setNomeCompleto} />
                                    </label>

                                    <div className='flex gap-16 md2:flex-wrap'>
                                        <label className='text-neutral-80 w-full  text-sm '>
                                            CPF
                                            <Input placeholder="123.123.123-12" value={GLOBAL.CPFFormatter(cpf)} maxLength={14} onChange={(e) => {
                                                if (e.target.value.lenhth >= 14) return
                                                setCpf(e.target.value)
                                            }} />
                                        </label>

                                        <label className='text-neutral-80 w-full  text-sm '>
                                            RG
                                            <Input placeholder="12.123.123-1" value={GLOBAL.RgFormatter(rg)} maxLength={12} onChange={(e) => setRg(e.target.value)} />
                                        </label>
                                    </div>
                                </div>

                                <div className='text-neutral-80 md2:mb-48 text-sm flex-1 md2:flex-initial md2:flex-wrap flex  gap-16'>
                                    <label className='w-full flex-1'>
                                        Órgão emissor
                                        <Input placeholder="Ex.: Secretaria de São Paulo" state={orgaoEmissor} setStateCurrent={setOrgaoEmissor} />
                                    </label>

                                    <label className='w-full flex-1 md2:flex-initial'

                                    >
                                        Data de Nascimento
                                        <InputDate placeholderText="dd/mm/aaaa" startDate={nascimento} setStartDate={setNascimento} classe={'!min-w-[19rem]'} containerClass={"!absolute"} />
                                    </label>
                                </div>
                            </div>

                            <div className='flex'>
                                <Button classe="ml-auto mr-16 secondary h-48"
                                    onClick={() => document.querySelector('[classID=dados_profissionais]').click()}
                                >Voltar</Button>
                                <Button classe="h-48"
                                    onClick={() => document.querySelector('[classID=endereco]').click()}
                                >Prosseguir</Button>
                            </div>
                        </section>
                    </TabPanel>

                    <TabPanel>
                        <section className='px-24 pb-24'>
                            <h1 className='text-2xl text-neutral-80 font-medium mb-32'>Endereço</h1>

                            <div className='flex md2:flex-col gap-16 mb-24'>

                                <div className='flex gap-16 flex-1 md2:flex-initial flex-wrap'>
                                    <div className='flex gap-16 w-full md2:flex-wrap'>
                                        <label className='text-neutral-80 text-sm w-full'>
                                            CEP
                                            <Input placeholder="Ex.: Padeiro..." state={GLOBAL.CepFormatter(cep)} maxLength={9} setStateCurrent={setCep} />
                                        </label>

                                        <label className='text-neutral-80 text-sm w-full'>
                                            Cidade
                                            <Input placeholder="Ex.: Produção." state={cidade} setStateCurrent={setCidade} />
                                        </label>
                                    </div>
                                    <label className=' text-neutral-80 text-sm flex-1 md2:flex-initial md2:w-full'>
                                        Endereço
                                        <Input placeholder="Ex.: Produção." state={endereco} setStateCurrent={setEndereco} />
                                    </label>

                                    <label className='text-neutral-80 text-sm w-[112px] md2:w-full'>
                                        Número
                                        <Input placeholder="Ex.: 123" state={numero} setStateCurrent={setNumero} />
                                    </label>
                                </div>

                                <div className='flex gap-16 flex-1 md2:flex-wrap'>

                                    <label className='text-neutral-80 text-sm grow  md2:w-full'>
                                        Bairro
                                        <Input placeholder="Ex.: Formado em massas..." state={bairro} setStateCurrent={setBairro} />
                                    </label>

                                    <label className='text-neutral-80 text-sm grow md2:w-full'>
                                        Complemento
                                        <Input placeholder="Ex.: Secretaria de São Paulo" state={complemento} setStateCurrent={setComplemento} />
                                    </label>


                                    <label className='text-neutral-80 text-sm  md2:w-[calc(200px - 10px)]  w-[112px] md2:w-full md2:mb-40'>
                                        UF
                                        <SelectComponent
                                            classe={`md w-[112px] md2:w-full
                                            menuplacement-top relative z-[999]`}
                                            data={uf}
                                            setStateCurrent={setUfSelected}
                                            placeholder={`Turno`}
                                            state={ufSelected}
                                            value={ufSelected}
                                            menuPlacement="top"
                                        />

                                    </label>
                                </div>
                            </div>

                            <div className='flex'>
                                <Button classe="ml-auto mr-16 secondary h-48"
                                    onClick={() => document.querySelector('[classID=dados_pessoais]').click()}
                                >Voltar</Button>
                                <Button classe="h-48"
                                    onClick={() => document.querySelector('[classID=contato]').click()}
                                >Prosseguir</Button>
                            </div>
                        </section>
                    </TabPanel>

                    <TabPanel>
                        <section className='px-24 pb-24 overflow-hidden'>
                            <h1 className='text-2xl text-neutral-80 font-medium mb-32'>Contato</h1>

                            <div className='flex gap-16 mb-24 md2:flex-col'>
                                <div className='flex flex-1 flex-col marker: gap-16'>
                                    <label className='flex-1 text-neutral-80 text-sm '>
                                        E-mail pessoal
                                        <Input placeholder="Ex.: contato@email.com" state={email} setStateCurrent={setEmail} />
                                    </label>

                                    <div className='flex gap-16 md2:flex-col' >
                                        <label className='flex-1 text-neutral-80 text-sm '>
                                            Telefone 1
                                            <Input placeholder="Ex.: Produção." state={telefone} setStateCurrent={setTelefone} />
                                        </label>
                                        <label className='flex-1 text-neutral-80 text-sm '>
                                            Telefone 2
                                            <Input placeholder="Ex.: Produção." state={telefone2} setStateCurrent={setTelefone2} />
                                        </label>
                                    </div>
                                </div>
                                <label className='flex-1 text-neutral-80 text-sm '>
                                    E-mail corporativo
                                    <Input placeholder="Ex.: contato@empresa.com" classe="w-[112px]" state={emailCorporativo} setStateCurrent={setEmailCorporativo} />
                                </label>
                            </div>

                            <div className='flex'>
                                <Button classe="ml-auto mr-16 secondary h-48"
                                    onClick={() => document.querySelector('[classID=endereco]').click()}
                                >Voltar</Button>
                                <Button classe="h-48"
                                    onClick={() => document.querySelector('[classID=contrato]').click()}
                                >Prosseguir</Button>
                            </div>
                        </section>
                    </TabPanel>

                    <TabPanel>
                        <section className='px-24 pb-24 overflow-hidden'>
                            <h1 className='text-2xl text-neutral-80 font-medium mb-32'>Contratos</h1>

                            <div className='flex  gap-16 mb-24 md2:flex-wrap'>

                                <label className='flex-1 md2:flex-initial md2:w-full text-neutral-80 text-sm '>
                                    Observações Gerais
                                    <TextArea placeholder="Descrev aqui..." value={observacoesGerais} onChange={(e) => setObservacoesGerais(e.target.value)} />
                                </label>


                                <label className='flex-1 text-neutral-80 text-sm'>
                                    Anexo do Contrato
                                    <div className='flex gap-16 relative'>



                                        {
                                            action == 'update'
                                                ?
                                                url64
                                                    ?
                                                    ContainerAnex(url64)
                                                    :
                                                    dataEmployee?.contrato_anexo
                                                        ? 
                                                        ContainerAnex(dataEmployee?.contrato_anexo)
                                                        : ""
                                                : url64 ? ContainerAnex(url64) : ""
                                        }


                                        <Upload classContainer="w-[7.5rem] max-h-[7.5rem] "
                                            maxFiles={1}
                                            allowMultiple={false}
                                            setSaves={setFilesSaves}
                                            allowImagePreview={false}
                                            allowReplace
                                            credits={false} instantUpload={false} />
                                            
                                    </div>
                                </label>
                            </div>
                            <div className='flex'>
                                <Button classe="ml-auto mr-16 secondary h-48"
                                    onClick={() => document.querySelector('[classID=contato]').click()}
                                >Voltar</Button>
                                <Button classe={` ${loading ? 'btn is-loading' : ''} h-48`}
                                    onClick={createOrUpdateEmployee}
                                    disabled={loading}
                                >{action == 'update' ? 'Atualizar Cadastro' : 'Salvar Cadastro'}</Button>
                            </div>
                        </section>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    )
}

export default CadastroFuncionario