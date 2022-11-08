import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import Svg from '../../../components/svg/svg'
import SvgUse from '../../../components/svg/svgUse'
import { useNavigate, useLocation } from 'react-router-dom'
import currency from 'currency.js'
import { ModalDetail } from '../../../components/DesignSystem/Modal'
import { useCart } from '../../../context/CartContext'


const arrPlaceholder = () => {
	return {
    id: 1,
    name: "PRODUCT",
    url: "",
    price: 1500,
    discountPrice: false,
    quantity: 0,
    category: "CATEGORY",
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatum inventore similique deleniti nihil consectetur eius reprehenderit eos fugit tempore et eveniet voluptatem, mollitia corporis, explicabo animi necessitatibus commodi aspernatur?',
    stock: 5
  }
}


const DetailsProduct = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { addProductToCart, cart, menulistAndCategories } = useCart();
	const [details, setDetails] = useState(arrPlaceholder());

	const currencyFormat = (v) => currency(v, { decimal: ',', separator: '.', fromCents: true, symbol: '' }).format()
	
	const getProductBD = async() => {
		const id = location.pathname.split('/').at(-1);

			if(menulistAndCategories.products){
				const product = menulistAndCategories.products.find(item => item.id == id);
				if(product) return setDetails(product);

				navigate('/vendas-b2b/cliente/cardapio_valido')
			}

	}


	useEffect(() => {

		if(location.state?.productID){
			const id = location.state.productID;
			const product = cart.find(item => item.id == id);
			if(product) return setDetails(product);
		}
		getProductBD();
	}, [menulistAndCategories])

	const id = location.state?.productID || location.pathname.split('/').at(-1);
	useEffect(() => {
		const updatedProduct = cart.find(item => item.id == id);
		if(updatedProduct)return setDetails(updatedProduct)
	}, [cart])

	const productExists = cart.find(item => item.id == id);
	document.querySelector('html').classList.add('mobile-first');

	return (
		<div>
			<Svg />
			<Header classeContainer={`header-mobile p-0 border-none h-[200px] max-h-[200px]`}>

				<div className='children flex items-center justify-center relative'>
					{/* Overlay do container */}
					<span className='absolute w-full h-full bg-[rgba(0,0,0,0.35)]'></span>
					{/*  */}
					{details.url ? <img className="max-h-[200px] min-h-[200px] object-cover w-full" src={details.url} alt="banner_description" /> 
						: <div className="w-full min-h-[200px] grid place-content-center bg-neutral-30">
						<SvgUse id="#icon-cerva-mobile" classe="!w-[60px] !h-[112px]" /> </div>
					}
					<div
						onClick={() => navigate(-1)}
					>
						<SvgUse id="#arrow_left_mobile_header" classe={"absolute left-24 top-0 left-22 my-22 !w-24 !h-24 z-50"} />
					</div>

					<div
						className="active:scale-90 transition-transform absolute right-24 -bottom-[1.8rem] w-56 h-56 bg-white rounded-lg border border-neutral-30 flex justify-center items-center"
						onClick={() => addProductToCart(details.id)}
					>
						<SvgUse id={`${productExists ? "#favorite-big-icon-fill" : "#favorite-big-icon"}`} classe="!w-28 !h-28" />
					</div>
				</div>
			</Header>

			<div className='container mobile !mt-[200px]'>
				<div>
					<div className='mb-16'>
						<p className='font-semibold tracking-tight text-2xl text-neutral-80'>{details.name}</p>
						<p className='text-primary-pure font-bold'><span className='pr-4 text-xs'>R$</span>{details.discountPrice ? currencyFormat(details.discountPrice) : currencyFormat(details.price)} un</p>
					</div>
					<p className='text-neutral-70 font-normal text-base'>{details.description}</p>
				</div>
			</div>
			<ModalDetail classe={'h-auto pb-24 pt-8'} />

		</div>
	)
}

export default DetailsProduct