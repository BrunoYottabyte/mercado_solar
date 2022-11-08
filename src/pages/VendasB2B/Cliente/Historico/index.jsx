import axios from 'axios'
import 'moment/locale/pt-br'
import moment from 'moment/moment'
moment.locale('pt-br')
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/DesignSystem/Button'
import { CardHistorico } from '../../../../components/DesignSystem/Card'
import { ModalCustom, ModalMobile, SendModal, SendModalCustom } from '../../../../components/DesignSystem/Modal'
import { ItemsPedido } from '../../../../components/DesignSystem/Pedido'

import Header from '../../../../components/Header'
import Svg from '../../../../components/svg/svg'
import SvgUse from '../../../../components/svg/svgUse'
import { useCart } from '../../../../context/CartContext'
import { api } from '../../../../services/api'
import { GLOBAL } from '../../../../utils/GLOBAL'



const Historico = () => {
	const [sendModal, setSendModal] = useState(false);
	const { menulistAndCategories } = useCart();
	const navigate = useNavigate();
	const { cart, addOrderHistoryToCart } = useCart();
	const [history, setHistory] = useState(true);
	const [fullHistory, setFullHistory] = useState([]);
	const [order, setOrder] = useState({});
	const [loading, setLoading] = useState(false);
	const [loadingFetch, setLoadingFetch] = useState(false);
	const [somePriceChanged, setSomePriceChanged] = useState(false);
	const [thereIsNotItem, setThereIsNotItem] = useState(false);
	const [existOne, setExistOne] = useState(false);

	const requestInitial = async () => {
		try{
			setLoadingFetch(true);
			const { data } = await api.get('/api/producao/pedidos_b2b/');
			setFullHistory(data);
		}catch(err){
			setLoadingFetch(false);
		}finally{
			setLoadingFetch(false);
		}
	}

	useEffect(() => {
		requestInitial();
	}, [])



	const total = () => {
		return order?.itempedidob2b_set?.reduce((ac, v) => {
			ac.total += v.valor_item;
			return ac;
		}, {
			total: 0
		})
	}

	const totalAtualizado = () => {
		return order?.itempedidob2b_set?.reduce((ac, v) => {

			//pra cada item do pedido eu busco no contexto o valor atualizado
			const product = menulistAndCategories.products.find(item => item.id == v.produto.id);
			let price = 0
			if(product){
				price = Number(product?.price) * v.quantidade;
			}else{
				price = v.produto.preco * v.quantidade;
				price = String(Number(price).toFixed(2)).replaceAll('.', '').replaceAll(',', '');
			}
			if(arrUnavailable.includes(v.produto)){
				ac.total += 0;
				return ac;
			}
			ac.total += Number(price);
			return ac;
		}, {
			total: 0
		})
	}


	const readyOrder = async (id) => {
		const { data } = await api.get(`/api/producao/pedidos_b2b/${id}`);
		setOrder(data);axios.all(data.itempedidob2b_set.map(item => api.get(`/api/producao/produtos/${item.produto.id}`).then(item => item.data))).then(result => console.log('aaaa',result))
		setHistory(false);
	}


	const success = async (id) => {
		if (history) { // se for negativo significa q ele pediu de dentro do proprio pedido
			const { data } = await api.get(`/api/producao/pedidos_b2b/${id}`);
			setOrder(data);
			setHistory(false);

			setTimeout(() => {
				setSendModal(true);
			}, 200)
		} else {
			setSendModal(true);

		}
	}

	const backToHistory = () => {
		setOrder({});
		setHistory(true);
		setSomePriceChanged(false)
		newArr = [];
		setArrUnavailable([]);
		setThereIsNotItem(false);
		setExistOne(false);
	}

	const addProductsToCart = async (id) => {
		setLoading(true);
		try {
			const { data } = await api.get(`/api/producao/pedidos_b2b/${id}`);
			setOrder(data);
			let notExists = [];
			let items = data.itempedidob2b_set.map(item => {
				let productExists = menulistAndCategories.products.find(product => product.id == item.produto.id);
				if(!productExists) notExists.push(item.produto);
				return{
					...item,
					idCardapio: data.cardapio_direcionado
				}
			})
			
			if(notExists.length == items.length){
				GLOBAL.showToastify('Todos os itens desse pedido estão indisponíveis.', 5000, '',{background: 'red', color: 'white'});
				setLoading(false);
				return;
			}
			addOrderHistoryToCart(items, setLoading);
			success(id);
		} catch (err) {
			setLoading(false);
		}


	}


	const [arrUnavailable, setArrUnavailable] = useState([]);
	let newArr = [...arrUnavailable];
	const getUnavailable = () => {
		order.itempedidob2b_set?.map((item, i) => {
			let productExists = menulistAndCategories.products?.find(product => product.id == item.produto.id);
			if(!productExists){
				newArr.push(item.produto);
				setArrUnavailable(newArr);
			}
		});
	}
	useEffect(() => {
		getUnavailable();
	}, [order])

	return (
		<div>
			<Svg />
			<Header classeContainer={`header-mobile  p-0 border-none h-[3.375rem]`}>
				{/* bg-primary-90 */}
				<div className='children flex items-center justify-center h-full '>

					<SvgUse id="#arrow_left_mobile_header" classe={"absolute left-24 top-0 bottom-0 my-auto"} onClick={() => {
						if (!history) backToHistory();
					}} />
					<p className='text-lg font-semibold text-white'>{!history ? moment(order.data_criacao).format('DD[/]MMM[, ]YYYY') : 'Historico de pedidos'}</p>
				</div>
			</Header>
			{
				loadingFetch ? <div className='container mobile h-[calc(100vh-3.375rem)] flex justify-center items-center'>
					<p className='grid !place-content-center is-loading  !text-primary-pure w-full  after:!w-40 after:!h-40'>
					</p>
					Carregando...
				</div> : fullHistory.length > 0 ? (
					<div className='container mobile '>
						{/* Historico */}
						{
							history && 
							<main>
								{fullHistory.map(({ id, data_criacao, nome, valor_total }, i) => {
									return (
										<div key={i} >
											<CardHistorico name={nome} loading={loading} order={order} id={id} price={valor_total} date={data_criacao} addOrderToCard={addProductsToCart} readyOrder={(id) => readyOrder(id)} />
										</div>
									)
								})}
							</main>
						}

						{/* ITEMS DO PEDIDO */}
						{
							!history && (
								<>
									<div className="flex justify-between items-center mb-16">
										<h1 className="font-semibold text-neutral-80 text-base">Items da cesta</h1>
										<div className='text-right '>
											<p className='text-neutral-90 text-sm font-normal'>{somePriceChanged || thereIsNotItem ? 'Valor anterior' : 'Valor total'}</p>
											<p className="text-neutral-100 text-sm font-semibold">{GLOBAL.currencyBR(total().total)}</p>
										</div>
									</div>
									{
										somePriceChanged || thereIsNotItem ?
											<div className="flex justify-between items-center -mt-32 mb-16">
												<h1 className="font-semibold text-neutral-80 text-base">Items da cesta</h1>
												<div className='text-right '>
													<p className='text-neutral-90 text-sm font-normal'>Valor atualizado</p>
													<p className="text-neutral-100 text-sm font-semibold">{GLOBAL.currencyBR(totalAtualizado().total)}</p>
												</div>
											</div>
											: ''
									}
									<main>
										<div>
											{
												order.itempedidob2b_set.map((item, i) => {
													
													return (
														<ItemsPedido item={item} key={i}  priceChanged={setSomePriceChanged} notItemOrder={setThereIsNotItem} existOne={setExistOne} />
													)
												})
											}
										</div>


										<ModalCustom classe={`${!sendModal ? 'active' : ''} pb-24 pt-8 !h-auto`}>
											<Button classe={`w-full flex justify-between h-48 items-center ${loading ? "is-loading btn" : ""}`}
												onClick={() => addProductsToCart(order.id)}
												disabled={loading || !existOne}
											>
												Adicionar ao carrinho
												<p>
													{somePriceChanged || thereIsNotItem ? GLOBAL.currencyBR(totalAtualizado().total) : GLOBAL.currencyBR(total().total)}
												</p>
											</Button>
										</ModalCustom>

										<SendModalCustom
											animation={sendModal ? 'active' : ''}
											classe="!p-24 !pt-[44px] h-auto"
											handleClickOutsideContent={() => setSendModal(false)}
										>
											<span className="w-[40px] h-4 bg-neutral-100-50 absolute top-8 rounded-lg right-0 left-0 mx-auto"></span>
											<SvgUse id="#icon-check-mobile" classe="w-[40px] h-[40px] mx-auto" />
											<h1 className="mt-16 text-2xl font-medium tracking-tight text-center">
												{arrUnavailable.length > 0 ? "Seu pedido foi adicionado novamente, mas um dos itens não está disponível." : "Seu pedido foi carregado, você pode alterá-lo e adicionar mais itens"}
											</h1>

											<div className='flex flex-col gap-8 mt-40 w-full'>
												<Button classe="secondary w-full h-48"
													onClick={() => navigate('/vendas-b2b/cliente/cardapio_valido')}
												>
													<p className='mx-auto'>
														Continuar comprando
													</p>
												</Button>
												<Button classe="w-full h-48"
													onClick={() => navigate('/vendas-b2b/cliente/cardapio_valido/pedidos')}
												>
													<p className='mx-auto'>
														Ver carrinho
													</p>
												</Button>
											</div>
										</SendModalCustom>
									</main>
								</>
							)
						}

					</div>
				) : <div>Você ainda não realizou nenhum pedido</div>
			}
		</div>
	)
}

export default Historico