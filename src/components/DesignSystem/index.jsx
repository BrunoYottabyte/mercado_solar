import React, { useState } from "react";

import { useGlobalContext } from "../../context/GlobalContext";
import TextArea from "./TextArea";
import { Input, InputMaskedNumeric } from "./Input";
import Svg from "../../components/svg/svg";
import SvgUse from "../svg/svgUse";
import {Card} from "./Card";
import Label from "./Label";
import Tooltip from "./Tooltip";
import Button from "./Button";
import Toggle from "./Toggle";
import CheckBox from "./CheckBox";
import Dropdowns from "./Dropdowns";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DropdownItem from "./Dropdowns/DropdownItem";
import DropdownContainer from "./Dropdowns/DropdownContainer";
import RadioButton from "./RadioButton";
import Accordions from "./Accordions";
import AccordionTitle from "./Accordions/AccordionTitle";
import AccordionContent from "./Accordions/AccordionContent";
import { SelectComponent, SelectGroup } from "./SelectComponent";

import Breadcrumb from "./Breadcrumb";
import Upload from "./Upload";

import { Modal } from "./Modal/Modal";
import { ModalContent } from "./Modal/ModalContent";
import { ModalHeader } from "./Modal/ModalHeader";
import Badget from "./Badge";
import Avatar from "./Avatar";
import Table from "./Table";

import { GLOBAL } from "../../utils/GLOBAL";
import { useAuthContext } from "../../context/useAuthContext";
import { Title, Subtitle } from "./Headings";

//OBJS SELECTS

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];
// OBJ BREADCRUMB

const breadObj = [
	{ title: "Gestão de produção" },
	{ title: "Previsão e Controle de Estoque", href: "/previsao" },
	{ title: "DesignSystem", href: "/design-system" },
];



const DesignSystem = () => {
	const global = useGlobalContext();
	const { signOut } = useAuthContext();

	const [selectValue, setSelectValue] = useState(null)


	return (
		<>
			<div className="">
				<Svg />
				<div
					onClick={() => signOut()}

					className="px-48 py-48 bg-primary-pure text-white text-[32px] font-medium">
					Design System
				</div>

				<main className="container max-w-[1100px] mx-auto my-64">
					<section>
						<Card classe="p-24 mt-48 flex flex-col gap-16">
							{/* TYPOGRAFIAS */}
							<h1 className="mt-16 text-[2rem] font-public-sans font-normal mb-32 text-neutral-100">
								Text Styles
							</h1>
							{/* Display */}
							<small>Display - Barlow Condensed</small>
							<span className="block  w-full h-1 bg-transparent border-b border-b-[#ccc]"></span>
							<div className="flex flex-col  gap-6">
								<h1 className="displayTitle">Display 64</h1>
							</div>

							{/* Titles */}
							<small>Title - Barlow Condensed</small>
							<span className="block  w-full h-1 bg-transparent border-b border-b-[#ccc]"></span>
							<div className="flex flex-col  gap-6">
								<h1 className="title1">Title 1 </h1>
								<h2 className="title2">Title 2 </h2>
								<h3 className="title3">Title 3 </h3>
							</div>

							{/* Headline */}

							<div className="flex gap-24">
								<div className="flex-1 flex flex-col  gap-6">
									<small>Headline - Public Sans</small>
									<span className="block  w-full h-1 bg-transparent border-b border-b-[#ccc]"></span>
									<h1 className="headline1">Headline 1 </h1>
									<h2 className="headline2">Headline 2 </h2>
									<h3 className="headline3">Headline 3 </h3>
									<h4 className="headline4">Headline 4 </h4>
									<h5 className="headline5">Headline 5 </h5>
								</div>
								<div className="flex-1 flex flex-col  gap-6">
								<small>Paragraph - Public Sans</small>
								<span className="block  w-full h-1 bg-transparent border-b border-b-[#ccc]"></span>
								<h1 className="paragraph1">Paragraph 1 </h1>
								<h2 className="paragraph2">Paragraph 2 </h2>
								<h3 className="paragraph3">Paragraph 3 </h3>
								<h4 className="paragraph4 ">Paragraph 4 </h4>
							</div>
							<div className="flex-1 flex flex-col  gap-6">
								<small>CAPS - Public Sans</small>
								<span className="block  w-full h-1 bg-transparent border-b border-b-[#ccc]"></span>
								<h1 className="caps1-semibold">Caps 1 - Semibold </h1>
								<h1 className="caps1-regular">Caps 1 - Regular </h1>
								<h2 className="caps2-semibold">Caps 2 - Semibold </h2>
								<h2 className="caps2-regular">Caps 2 - Regular </h2>
								<h3 className="caps3-semibold">Caps 3 - Semibold </h3>
								<h3 className="caps3-regular">Caps 3 - Regular </h3>
							</div>
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48">
							{/* TYPOGRAFIAS */}
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Inputs
							</h1>
							<div className="flex gap-16">
								<Input placeholder="input Basico" />

								<Input
									placeholder="input Icone Direita"
									containerClass="bg-inverse"
								/>

								<Input
									placeholder="input Icone esquerda"
									svgID="#icon_arrow_left"
									containerClass="input-icon icon-left"
								/>

								<Input
									placeholder="input Icone Direita"
									svgID="#icon_arrow_left"
									containerClass="input-icon icon-right"
								/>
								<div className="disabled">
									<Input
										placeholder="input Icone Direita"
										svgID="#icon_arrow_left"
										containerClass="input-icon icon-right"
									/>
								</div>
							</div>
						</Card>
					</section>

					{/* Textarea */}

					<section>
						<Card classe="p-24 mt-48">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Textarea
							</h1>
							<div className="flex gap-16 w-full">
								<TextArea placeholder="Descreva aqui..." />
								<TextArea
									placeholder="Descreva aqui..."
									containerClass="bg-inverse"
								/>

								<TextArea
									placeholder="Descreva aqui..."
									containerClass="icon-right"
									svgID="#icon_arrow_left"
								/>

								<TextArea
									placeholder="Descreva aqui..."
									containerClass="icon-left"
									svgID="#icon_arrow_left"
								/>

								<TextArea
									placeholder="Descreva aqui..."
									containerClass="icon-left disabled"
									svgID="#icon_arrow_left"
								/>
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Labels
							</h1>
							<div className="flex gap-16">
								<Label htmlFor="labelTeste">Label basic</Label>
								<Label classe="text-primary-pure">Label Primary</Label>
								<Label classe="text-alert-red-100">Label Error</Label>
								<Label classe="text-alert-green-100">Label Sucess</Label>

								<Label>
									Label Icon
									<SvgUse id="#icon_arrow_left" />
								</Label>
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Titulos
							</h1>
							<div className="flex gap-16">
								<p>OI</p>
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								TextHelper
							</h1>

							<h2 className="mt-4 text-sm mb-8 font-bold text-neutral-100">
								Light
							</h2>
							<Tooltip
								animation="scale"
								value="TextHelper"
								innerTooltip="Sou um tooltip"
								direction="top"
								arrow
								time="1000"
							>
								<Button value="Button" classe="icon_left">
									Button
								</Button>
							</Tooltip>

							<h2 className="mt-4 text-sm mb-8 font-bold text-neutral-100">
								Dark
							</h2>
							<Tooltip
								dark
								animation="scale"
								value="TextHelper"
								innerTooltip="Sou um tooltip"
								direction="left"
								arrow
							>
								<Button value="Button" classe="icon_left">
									Button
								</Button>
							</Tooltip>

							<h2 className="mt-4 text-sm mb-8 font-bold text-neutral-100">
								Sem Arrow
							</h2>

							<Tooltip
								animation="scale"
								value="TextHelper"
								innerTooltip="Sou um tooltip"
								direction="bottom"
								arrow
							>
								<Button value="Button" classe="icon_left">
									Button
								</Button>
							</Tooltip>

							<h2 className="mt-4 text-sm mb-8 font-bold text-neutral-100">
								Tooltip
							</h2>

							<Tooltip
								animation="scale"
								value="TextHelper"
								text="Tooltip sozinho"
								innerTooltip="Sou um tooltip"
								direction="right"
								arrow
							></Tooltip>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Botões
							</h1>
							<h2 className="mt-4 text-sm mb-8 font-bold text-neutral-100">
								Primario
							</h2>
							<div className="flex gap-16">
								<Button value="Button" classe="icon-left">
									<SvgUse id="#icon_arrow_left" />
									Botão MR
								</Button>

								<Button value="Button" classe="icon-right h-48">
									<SvgUse id="#icon_arrow_left" />
									Botão MR
								</Button>

								<Button value="Button" classe=" h-56 disabled-btn">
									<SvgUse id="#icon_arrow_left" />
									Botão MR
								</Button>
							</div>

							<h2 className="mt-8 text-sm mb-8 font-bold text-neutral-100">
								Secundário
							</h2>

							<div className="flex gap-16">
								<Button value="Button" classe=" secondary">
									<SvgUse id="#icon_arrow_left" />
									Botão MR
								</Button>

								<Button value="Button" classe="h-48 secondary icon-right">
									<SvgUse id="#icon_arrow_left" />
									Botão MR
								</Button>

								<Button value="Button" classe="h-56 secondary disabled-btn">
									<SvgUse id="#icon_arrow_left" />
									Botão MR
								</Button>
							</div>

							<h2 className="mt-8 text-sm mb-8 font-bold text-neutral-100">
								Terciário
							</h2>

							<div className="flex gap-16">
								<Button value="Button" classe=" terciario">
									<SvgUse id="#icon_arrow_left" />
									Botão MR
								</Button>

								<Button value="Button" classe="h-48 terciario icon-right">
									<SvgUse id="#icon_arrow_left" />
									Botão MR
								</Button>

								<Button value="Button" classe="h-56 terciario disabled-btn">
									<SvgUse id="#icon_arrow_left" />
									Botão MR
								</Button>
							</div>

							<h2 className="mt-8 text-sm mb-8 font-bold text-neutral-100">
								Quaternário
							</h2>

							<div className="flex gap-16">
								<Button value="Button" classe=" quaternario">
									<SvgUse id="#icon_arrow_left" />
									Botão MR
								</Button>

								<Button value="Button" classe="h-48 quaternario icon-right">
									<SvgUse id="#icon_arrow_left" />
									Botão MR
								</Button>

								<Button value="Button" classe="h-56 quaternario disabled-btn">
									<SvgUse id="#icon_arrow_left" />
									Botão MR
								</Button>
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Tabs
							</h1>
							<div className="flex gap-16">
								<Tabs>
									<TabList>
										<Tab>Title 1</Tab>
										<Tab>Title 2</Tab>
									</TabList>

									<TabPanel>
										<h2>Any content 1</h2>
									</TabPanel>

									<TabPanel>
										<h2>Any content 2</h2>
									</TabPanel>
								</Tabs>

								<div className="disabled">
									<Tabs disabled>
										<TabList disabled>
											<Tab>Title 1</Tab>
											<Tab>Title 2</Tab>
										</TabList>

										<TabPanel>
											<h2>Any content 1</h2>
										</TabPanel>

										<TabPanel>
											<h2>Any content 2</h2>
										</TabPanel>
									</Tabs>
								</div>
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Toggle
							</h1>

							<div className="flex gap-16">
								<div className="disabled opacity-80">
									<Toggle />
								</div>
								<Toggle containerClass="bg-inverse" />
								<Toggle check={true} />
								<Toggle containerClass="h-48" />
								<Toggle containerClass="h-56" />
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Radio Button
							</h1>

							<div className="flex gap-16 items-center">
								<RadioButton name="teste" texto="Radio teste" />
								<RadioButton
									containerClass="md"
									name="teste"
									texto="Radio teste"
								/>
								<RadioButton
									containerClass="sm"
									name="teste"
									texto="Radio teste"
								/>
								<RadioButton
									containerClass="sm"
									name="teste"
									texto="Radio checked"
									checked={true}
								/>
								<div className="disabled">
									<RadioButton name="teste" />
								</div>
							</div>
						</Card>
					</section>
					<section>
						<Card classe="p-24 mt-48">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								CheckBox
							</h1>

							<div className="flex gap-16 items-center">
								<CheckBox containerClass="sm">
									<p>Checkbox Sm</p>
								</CheckBox>
								<CheckBox containerClass="md">
									<p>Checkbox md</p>
								</CheckBox>

								<CheckBox check={true}>
									<p>Checkbox Checked</p>
								</CheckBox>
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Dropdowns
							</h1>

							<div className="flex gap-16">
								<Dropdowns>
									<DropdownItem icon="icon-left" iconID="#icon_arrow_left">
										<p>Dropdown</p>
									</DropdownItem>

									<DropdownContainer>
										<div className="item-dropdown">
											<input placeholder="Placeholder" />
										</div>
										<div className="item-dropdown">
											<input placeholder="Placeholder" />
										</div>
										<div className="item-dropdown">
											<input placeholder="Placeholder" />
										</div>
									</DropdownContainer>
								</Dropdowns>

								<Dropdowns>
									<DropdownItem icon="icon-right" iconID="#icon_arrow_left">
										<p>Dropdown</p>
									</DropdownItem>

									<DropdownContainer>
										<div className="item-dropdown">
											<p>exemplooooooooo</p>
										</div>
										<div className="item-dropdown">
											<p>exemplooooooooo 2 2 2</p>
										</div>
										<div className="item-dropdown">
											<p>exemplooooooooo 33 3 33</p>
										</div>
									</DropdownContainer>
								</Dropdowns>
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48 min-h-[300px]">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Accordions
							</h1>

							<div className="flex flex-col gap-16">
								<Accordions>
									<AccordionTitle
										id="one"
										parent={true}
										iconID="#icon_arrow_left"
									>
										<p>Title accordion</p>
									</AccordionTitle>

									<AccordionContent id="one" classe="active permanent">
										<div>
											<p>Conteúdo do primeiro accordion</p>
										</div>
									</AccordionContent>
								</Accordions>

								<Accordions>
									<AccordionTitle id="second" iconID="#icon_arrow_left">
										<p>Title accordion</p>
									</AccordionTitle>

									<AccordionContent id="second">
										<div className="flex-col h-max">
											<p>Conteúdo do primeiro accordion</p>
											<p>Conteúdo do primeiro accordion</p>
											<p>Conteúdo do primeiro accordion</p>
											<p>Conteúdo do primeiro accordion</p>
											<p>Conteúdo do primeiro accordion</p>
											<p>Conteúdo do primeiro accordion</p>
											<p>Conteúdo do primeiro accordion</p>
										</div>
									</AccordionContent>
								</Accordions>
							</div>

							<h1 className="my-20 text-2xl font-bold">Accordion Inverse</h1>

							<div className="flex flex-col gap-16">
								<Accordions>
									<AccordionTitle
										classe="active bg-inverse"
										id="inverse"
										iconID="#icon_arrow_left"
									>
										<p>Title accordion</p>
									</AccordionTitle>

									<AccordionContent classe="active bg-inverse" id="inverse">
										<div><p>Conteúdo do primeiro accordion</p></div>
									</AccordionContent>
								</Accordions>
								<Accordions>
									<AccordionTitle id="inverse2" iconID="#icon_arrow_left">
										<div>	<p>Title accordion</p></div>
									</AccordionTitle>

									<AccordionContent id="inverse2">
										<div><p>Conteúdo do primeiro accordion</p></div>
									</AccordionContent>
								</Accordions>
							</div>

							<h1 className="my-20 text-2xl font-bold">
								Apenas 1 aberto com parent
							</h1>

							<div className="flex flex-col gap-16">
								<Accordions>
									<AccordionTitle parent id="parent" iconID="#icon_arrow_left">
										<p>Title accordion</p>
									</AccordionTitle>

									<AccordionContent id="parent">
										<p>Conteúdo do primeiro accordion</p>
									</AccordionContent>
								</Accordions>
								<Accordions>
									<AccordionTitle parent id="parent2" iconID="#icon_arrow_left">
										<p>Title accordion</p>
									</AccordionTitle>

									<AccordionContent id="parent2">
										<p>Conteúdo do primeiro accordion</p>
									</AccordionContent>
								</Accordions>
							</div>

							<h1 className="my-20 text-2xl font-bold">Accordions Variant</h1>

							<div className="flex flex-col gap-16">
								<Accordions classe="md">
									<AccordionTitle id="variant" iconID="#icon_arrow_left">
										<p>
											Title accordion <b>48-PX</b>
										</p>
									</AccordionTitle>

									<AccordionContent id="variant">
										<p>Conteúdo do primeiro accordion</p>
									</AccordionContent>
								</Accordions>
								<Accordions classe="lg">
									<AccordionTitle id="variant2" iconID="#icon_arrow_left">
										<p>
											Title accordion <b>56-PX</b>
										</p>
									</AccordionTitle>

									<AccordionContent id="variant2">
										<p>Conteúdo do primeiro accordion</p>
									</AccordionContent>
								</Accordions>
							</div>
						</Card>

						<Card classe="p-24 mt-48 min-h-[300px]">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Select
							</h1>
							<h2 className="m-8">SM</h2>

							<SelectComponent data={options} state={selectValue} setState={setSelectValue} />

							<h2 className="m-8">MD</h2>
							<SelectComponent data={options} classe="md" state={selectValue} setState={setSelectValue} />

							<h2 className="m-8">LG</h2>
							<SelectComponent data={options} classe="lg" state={selectValue} setState={setSelectValue} />

							<h2 className="m-8">WHITE</h2>
							<SelectComponent data={options} classe="lg bg-white" state={selectValue} setState={setSelectValue} />

							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								SelectGroup
							</h1>

							<SelectGroup data={options} />
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48 min-h-[300px]">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Modal
							</h1>
							<button
								className="btn"
								onClick={() =>
									global.setmodalOpen(({ open }) => ({ open: true, id: "1" }))
								}
							>
								Abrir modal
							</button>

							<button
								className="btn"
								onClick={() =>
									global.setmodalOpen(({ open }) => ({ open: true, id: "2" }))
								}
							>
								Abrir modal 2
							</button>

							<Modal width="500px" height="300px">
								<ModalContent id="1">
									conteudo
									<button
										className="btn"
										onClick={() =>
											global.setmodalOpen(({ open }) => ({ open: true, id: "2" }))
										}
									>
										Abrir content 2
									</button>
								</ModalContent>

								<ModalContent id="2">
									<ModalHeader text="Confirmar despesa" />

									<footer className="flex justify-between gap-8 mt-auto px-24 pb-16">
										<button
											className="btn quaternario"
											onClick={() =>
												global.setmodalOpen(({ open }) => ({
													open: false,
													id: false,
												}))
											}
										>
											Fechar
										</button>
										<button className="btn">Salvar</button>
									</footer>
								</ModalContent>
							</Modal>
						</Card>
					</section>
					<section>
						<Card classe="p-24 mt-48 ">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Breadcrumb
							</h1>

							<Breadcrumb data={breadObj} />
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48 ">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Upload
							</h1>

							<Upload />
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48 ">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Badget
							</h1>

							<div className="flex gap-16 items-center">
								<Badget title="Teste" iconID="#icon_check" />

								<Badget title="Teste" classe="md" />

								<Badget title="Teste" classe="lg" />
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48 ">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Avatar
							</h1>

							<div className="flex gap-16 items-center">
								<Avatar imageURL="https://m.extra.globo.com/incoming/24929917-004-640/w367h550-PROP/ray.jpg" />
								<Avatar />
								<Avatar>
									<p>Teste</p>
								</Avatar>
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48 ">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Inputs com mascara
							</h1>

							<div className="flex gap-16 items-center">
								{/* <InputMaskedNumeric
									customInput={Input}
									className="input"
									formater={GLOBAL.currencyFormatterReal}
								/>

								<InputMaskedNumeric
									className="input"
									placeholder="CNPJ Formatter"
									formater={GLOBAL.CNPJFormatter}
								/>

								<InputMaskedNumeric
									className="input"
									placeholder="CPF Formatter"
									formater={GLOBAL.CPFFormatter}
								/> */}
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48 ">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Table
							</h1>

							<div className="w-full">
								{/* <Table /> */}
							</div>
						</Card>
					</section>

					<section>
						<Card classe="p-24 mt-48 ">
							<h1 className="mt-16 text-2xl mb-32 font-bold text-neutral-100">
								Headings
							</h1>
							<div className="flex flex-col gap-16 justify-center">
								<div className="flex gap-8">
									<Title classe="flex-row-reverse" iconID="#icon_arrow_left">
										Title
									</Title>
									<Title iconID="#icon_arrow_left">Title</Title>
								</div>

								<div className="flex gap-8">
									<Subtitle iconID="#icon_arrow_left">Subtitle</Subtitle>
									<Subtitle classe="flex-row-reverse" iconID="#icon_arrow_left">
										Subtitle
									</Subtitle>
									<Subtitle>Subtitle</Subtitle>
								</div>
							</div>
						</Card>
					</section>
				</main>
			</div>
		</>
	);
};

export default DesignSystem;
