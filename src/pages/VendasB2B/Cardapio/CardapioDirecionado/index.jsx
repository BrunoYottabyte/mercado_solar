import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import {Card} from "../../../../components/DesignSystem/Card";
import { Title } from "../../../../components/DesignSystem/Headings";
import { InputMaskedNumeric } from "../../../../components/DesignSystem/Input";
import { SelectComponent } from "../../../../components/DesignSystem/SelectComponent";
import Toggle from "../../../../components/DesignSystem/Toggle";
import { api } from "../../../../services/api";
import Button from "../../../../components/DesignSystem/Button";
import { GLOBAL } from "../../../../utils/GLOBAL";
import { Modal } from "../../../../components/DesignSystem/Modal/Modal";
import { ModalContent } from "../../../../components/DesignSystem/Modal/ModalContent";
import { ModalHeader } from "../../../../components/DesignSystem/Modal/ModalHeader";
import { useGlobalContext } from "../../../../context/GlobalContext";
import { DisabledContainer } from "../../../../components/DesignSystem/DisabledContainer";
import { InputDate } from "../../../../components/DesignSystem/InputDate";
// import ContentLoader from "react-content-loader"
import useFetch from "../../../../hooks/useFetch";
import Footer from "../../../../components/DesignSystem/Footer";
import currency from "currency.js";
import Label from "../../../../components/DesignSystem/Label";

import moment from "moment";

const CardapioDirecionado = () => {
	const { stringToNumber, currencyMask, showToastify } = GLOBAL;
	const { setmodalOpen } = useGlobalContext();
	//STATE
	const [selectOpts, setSelectOpts] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);
	const [cardapio, setCardapio] = useState([]);
	const [cardapioData, setCardapioData] = useState([]);
	const [startDate, setStartDate] = useState("");
	const [categoriaProdutos, setCategoriaProdutos] = useState([]);
	const [sending, setSending] = useState(false);
	//
	const location = useLocation();
	const SelectRef = useRef(null);
	// CUSTOM HOOKS
	const { error, loading, request, setLoading } = useFetch({ load: true });

	// const { error, loading, request, setLoading } = useFetch({ load: true })

	useEffect(() => {
		// REQUESTS
		handleRequestClientes();
		handleRequestCardapio(location.state?.cardapio);
	}, []);

	useEffect(() => {
		//LOG
		LOG_BLUE("cardapio 😶‍🌫️");
		console.log(cardapio);
	}, [cardapio]);



	if (
		//Se acessar pela URL direto
		!location.state &&
		!location.pathname.endsWith("/cardapio-direcionado")
	) {
		const cardapio = location.pathname.split("/").at(-1);
		location.state = { cardapio: cardapio };
	}

	//popula array select
	const handleRequestClientes = async () => {
		const { data } = await request("api/producao/clientes/");
		const opts = data.map((v) => ({ value: v.id, label: v.nome }));
		setSelectOpts(opts);
	};

	//popula categorias
	const categoriesExists = (data) => {
		const cat = data.map((i) => i.produto.get_categoria_produto.nome);
		console.log(cat);
		setCategoriaProdutos([...new Set(cat)]);
	};

	//Popula Cardapios
	const handleRequestCardapio = async (cardapioID) => {
		if (location.state) {
			const { data: response } = await request(
				`api/producao/cardapios_direcionados/${cardapioID}`
			);
			const { cliente, data, id } = response;
			setCardapioData({ cliente: cliente, data: data, id: id });
			setCardapio(response.itemcardapio_set.map(v => {
				if(v.valor) v.valor = v.valor.split('.')[0];
				return v
			}));
			setCurrentUser({ value: cliente.id, label: cliente.nome });
			categoriesExists(response.itemcardapio_set);
			setStartDate(new Date(moment(data)));
		} else {
			const { data } = await api.get(`api/producao/produtos`);
			const produtoModificado = data.map((produto) => {
				return {
					id: null,
					valor: produto.preco || "",
					cardapio: null,
					disponibilidade: false,
					produto: {
						...produto,
					},
				};

			});
			LOG_BLUE('data sem cliente')
			console.log(data);
			setCardapio(produtoModificado);
			categoriesExists(produtoModificado);
		}
	};

	//muda usuario
	const handleChangeUser = (cliente) => {
		const user = selectOpts.filter((opt) => opt.value === cliente)[0];
		user && setCurrentUser(user);
	};


	
	//Tratamento antes de enviar ou modificar o cardapio
	const sendCardapio = async () => {
		try {
			setSending(true);

			if (location.state?.cardapio) {
				const cardapioFormated = cardapio.map((i) => {
					let productNotMidia = i.produto;
					delete productNotMidia.midia;

					return {
						...cardapioData,
						itemcardapio_set: [
							...cardapio.map((i) => ({
								...i,
								produto: productNotMidia,
								valor: i.valor ? stringToNumber(i.valor) : 0,
							})),
						],
						data: moment(startDate).format("YYYY-MM-DD") || "",
					};
				});

				await api.put(
					`api/producao/cardapios_direcionados/${location.state.cardapio}/`,
					cardapioFormated[0]
				);
			} else {
				const cardapioFormated = cardapio.map((i) => {
					let productNotMidia = i.produto;
					delete productNotMidia.midia;

					return {
						...i,
						produto: productNotMidia,
						valor: i.valor ? stringToNumber(i.valor) : 0,
					}
				});
				const dados = {
					id: null,
					cliente: {
						id: currentUser.value,
						nome: currentUser.label,
					},
					itemcardapio_set: [...cardapioFormated],
					data: moment(startDate).format("YYYY-MM-DD") || "",
					
				};

				await api.post("api/producao/cardapios_direcionados/", dados);
			}
			sucess();
		} catch (e) {
			showToastify(`Ocorreu um erro ao enviar os dados`, 4000, "error");
			console.log(e);
			closeModal();
		} finally {
			setSending(false);
		}
	};

	const closeModal = () =>
		setmodalOpen(({ open }) => ({
			open: false,
			id: false,
		}));

	const sucess = () => {
		setmodalOpen({ open: true, id: "animation" });
		setTimeout(() => {
			closeModal();
		}, 5000);
	};

	const toggleChange = (id) => {
		const cardapioChanged = cardapio.map((item) => {
			if (Number(item.produto.id) === Number(id)) {
				item.disponibilidade = !item.disponibilidade;
			}
			return item;
		});

		setCardapio(cardapioChanged);
	};

	const priceChange = (id, e) => {
		const cardapioChanged = cardapio.map((item) => {
			if (Number(item.produto.id) === Number(id)) {
				item.valor = currencyMask(e.target.value);
			}
			return item;
		});

		setCardapio(cardapioChanged);
	};

	return (
		<>
			{/* api/producao/cardapios_direcionados/5005 */}
			<Modal className={`w-[400px]  md2:max-w-[400px] md2:w-[95vw]`}>
				<ModalContent id="confirm">
					<ModalHeader text="Salvar Cardapio" />

					<div className="p-24">
						<p className="font-medium text-neutral-80 text-base">
							Deseja salvar o cardapio ?
						</p>
					</div>

					<footer className="flex justify-between gap-8 mt-auto px-24 pb-16">
						<button className="btn quaternario" onClick={closeModal}>
							Fechar
						</button>
						<button
							className={`btn ${sending ? "is-loading" : ""}`}
							onClick={sendCardapio}
						>
							Salvar
						</button>
					</footer>
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
						<Link to="/vendas-b2b/list" onClick={() => closeModal()}>
							<Button
								classe="mt-16 w-full h-56 text-center justify-center"
								svgClass="rotate-180"
								iconID="#icon_arrow_left"
							>
								Voltar para lista
							</Button>
						</Link>
					</div>
				</ModalContent>
			</Modal>

			<main>
				<div className="container">
					<Card classe="p-24 my-64">
						<header className="flex justify-between mb-32 md:flex-col md:justify-center md:gap-16">
							<div className="flex-col flex gap-4 items-start">
								<Title
									iconID={"#icon_cardapio_direcionado"}
									classe="flex-row-reverse md:justify-center"
								>
									Cardápio Direcionado
								</Title>
								{!location.state && (
									<Label classe=" mb-8 ml-8 font-semibold text-neutral-70">
										Selecione o cliente e a data para enviar o cardapio.
									</Label>
								)}
							</div>

							<DisabledContainer verificacao={currentUser && startDate}>
								<Button
									onClick={() => setmodalOpen({ open: true, id: "confirm" })}
									classe="h-48 md:flex md:w-full md:justify-center"
									iconID="#icon_save"
									svgClass="!w-22 !h-22"
								>
									Salvar Alterações
								</Button>
							</DisabledContainer>
						</header>

						<div className="flex justify-between items-center mb-24 md:flex-col md:gap-10">
							{location.state?.cardapio ? (
								<p className="text-base text-neutral-80 font-medium">
									{currentUser?.label}
								</p>
							) : (
								<>
									<div className="flex flex-col">
										<SelectComponent
											setStateCurrent={(e) => handleChangeUser(e)}
											data={selectOpts}
											value={currentUser && currentUser.value}
											classe="min-w-[416px] md:min-w-0 md:w-full"
											placeholder="Selecione o cliente"
											ref={SelectRef}
										/>
									</div>
								</>
							)}
							<InputDate
								classe="min-w-[300px] md:min-w-0 md:w-full"
								placeholderText="Selecionar data"
								svgID={"#icon_arrow_left"}
								startDate={startDate}
								setStartDate={setStartDate}
								id="date-input"
							/>
						</div>

						{/* SECTION PAES */}
						<section className="my-24">
							<div className="flex flex-col">
								{/* ITEM */}
								{/* 	{loading && <div className="mx-auto p-48 flex gap-8 items-center"><div className="loader-circle"></div></div>} */}
								{cardapio && (
									<DisabledContainer
										classe=" flex flex-col"
										verificacao={currentUser}
									>
										{categoriaProdutos.map((item, ix) => {
											return (
												<div key={ix}>
													<Title classe="text-primary-pure mb-8 mt-16">
														{item}
													</Title>
													{cardapio.map((i, index) => {
														if (i.produto.get_categoria_produto.nome === item) {
															return (
																<Card
																	key={index}
																	classe={`mb-8 w-full ${
																		loading
																			? "loading  skeleton-container"
																			: "skeleton-container"
																	}`}
																>
																	<div className="flex md:flex-wrap ">
																		<div className="flex md:max-w-[150px] md:min-w-[150px] gap-16 items-center mr-auto p-8">
																			<img
																				className="w-80 h-64 rounded md:w-64 "
																				src={i.produto.midia || 'https://amopaocaseiro.com.br/wp-content/uploads/2020/01/pao-caseiro-para-iniciantes_02.jpg'}
																				alt="image_description"
																			/>
																			<div className="flex flex-col">
																				<h1 className="font-medium text-lg md:text-sm">
																					{i.produto.nome}
																				</h1>
																				<span className="text-neutral-80 text-sm flex gap-4">
																					<p className="text-neutral-70 md:text-xs">
																						Validade:
																					</p>
																					<p className="text-neutral-80 font-medium">
																						{i.data}
																					</p>
																				</span>
																			</div>
																		</div>

																		<label className="flex items-center px-32 gap-16 border-transparent border-x-neutral-30 border cursor-pointer group  md:px-10">
																			<div className="flex gap-16 items-center select-none">
																				<p className="text-neutral-80 text-base font-medium md:hidden">
																					Disponibilidade
																				</p>
																				<Toggle
																					containerClass="h-48"
																					state={i.disponibilidade}
																					produtoid={i.produto.id}
																					name="disponibilidade"
																					toggleChange={toggleChange}
																				/>
																			</div>
																		</label>
																		<div className="relative flex items-center px-32 gap-16 md:px-0 md:w-[90px] md:shrink-0 md:grow[1] md:basis-[100%] md:justify-end">
																			<InputMaskedNumeric
																				placeholder="R$"
																
																				className="input md:text-right md:!pl-[70px]"
																				containerClass="md:w-full"
													
																				state={i.valor}
																				produtoid={i.produto.id}
																				name="valor"
																				priceChange={priceChange}
																			/>
																			<p className="hidden md:block absolute  left-0 p-8">
																				Preço
																			</p>
																		</div>
																	</div>
																</Card>
															);
														}
													})}
												</div>
											);
										})}
									</DisabledContainer>
								)}
							</div>
						</section>
					</Card>
				</div>
			</main>
		</>
	);
};

export default CardapioDirecionado;
