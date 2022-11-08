import React, { useEffect, useState } from 'react'
import Button from '../../../components/DesignSystem/Button';
import { Input } from '../../../components/DesignSystem/Input';
import Header from '../../../components/Header';
import Title from '../../../components/DesignSystem/Title';
import { ModalMobile } from '../../../components/DesignSystem/Modal';
import Svg from '../../../components/svg/svg';
import SvgUse from '../../../components/svg/svgUse';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ProductCard } from '../../../components/DesignSystem/ProductCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from '../../../services/api';
import { useCart } from '../../../context/CartContext';

// const categories = ['Todas', 'Pão de centeio', 'Marraqueta', 'Hellula', 'Broas', 'Frios']


const CardapioValido = () => {
	const navigate = useNavigate();
	document.querySelector('html').classList.add('mobile-first');
	const { menulistAndCategories } = useCart();
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('Todas');
	const [products, setProducts] = useState([])

	useEffect(() => {
		if (menulistAndCategories) {
			setCategories(menulistAndCategories.categories)
			if (Array.isArray(menulistAndCategories.categories)) {
				const categoryIndex = menulistAndCategories.categories.findIndex(category => category === 'Todas');
				if (categoryIndex < 0) setSelectedCategory(menulistAndCategories.categories[0])
			}
			setProducts(menulistAndCategories.products);
		}
	}, [menulistAndCategories])



	return (
		<div>
			<Svg />
			<Header classeContainer={`header-mobile p-0 border-none h-[3.375rem]`}>
				{/* bg-primary-90  */}
				<div className='children flex items-center justify-center h-full'>
					<SvgUse id="#arrow_left_mobile_header" classe={"absolute left-24 top-0 bottom-0 my-auto"} />
					<p className='text-lg font-semibold text-white '>Panificadora Alfa</p>
				</div>
			</Header>

			{
				menulistAndCategories.categories && menulistAndCategories.categories.length > 0 ?
					<div className='container mobile '>
						{/* Search */}
						<div className='flex gap-8'>
							<Input svgID={"#search_icon"} placeholder="O que está procurando?" containerClass="icon-right flex-1 border-neutral-80 " classe={'!border-[.0625rem] h-48 !border-neutral-30 !bg-white'} />
							<Button classe="terciario h-full !border-neutral-30 w-48 !h-48">
								<SvgUse id="#config_icon" />
							</Button>
						</div>

						{/* Categorias */}
						<div className=''>

							<p className='font-semibold text-lg text-neutral-90 mb-8'>Categorias</p>
							<Swiper
								spaceBetween={8}
								slidesPerView={'auto'}
							>

								{
									categories && categories.map((item, i) => {
										return (
											<SwiperSlide className='!w-max' key={i}>
												<div className={`font-normal text-base rounded p-8 bg-neutral-30 ${item === selectedCategory && ' text-white font-medium'}`} /* !bg-primary-90 */
													onClick={() => setSelectedCategory(item)}
												>
													{item}
												</div>
											</SwiperSlide>
										)
									})
								}


							</Swiper>
						</div>

						{/* Contéudo da categoria selecionada */}
						<div>
							{
								categories && categories.map((item, i) => {
									// MOSTRA O ITEM SELECIONADO
									if (selectedCategory === item && selectedCategory !== 'Todas') {
										return (
											<div key={i} className="mb-24 ">
												{selectedCategory !== 'Todas' && products.length > 0 && products.find(product => product.category === item) && <Title className='font-semibold text-lg text-neutral-90 mb-12'>{item}</Title>}
												{!products.find(product => product.category === item) && <Title classe={`text-center !h-[12.5rem] flex justify-center items-center`}>Não há produtos nessa categoria :(</Title>}
												<Swiper
													spaceBetween={8}
													slidesPerView={'auto'}
												>
													{
														products.length > 0 && products.map((product, index) => {
															if (product.category === item) {
																return (
																	<SwiperSlide className='!w-max' key={index}>
																		<ProductCard navigate={navigate} product={product} />
																	</SwiperSlide>
																)
															}
														})
													}
												</Swiper>
											</div>
										)
									}
									// MOSTRA TODAS AS CATEGORIAS E ESCONDE O TITULO "TODAS"
									if (selectedCategory === 'Todas') {
										return (
											<div key={i}>
												{item !== 'Todas' && products.length > 0 && products.find(product => product.category === item) && <Title className='font-semibold text-lg text-neutral-90 mb-12'>{item}</Title>}
												<Swiper
													spaceBetween={8}
													slidesPerView={'auto'}
												>
													{
														products.length > 0 && products.map((product, index) => {
															if (product.category === item) {

																return (
																	<SwiperSlide className='!w-max mb-24' key={index}>
																		<ProductCard navigate={navigate} product={product} />
																	</SwiperSlide>
																)
															}
														})
													}
												</Swiper>
											</div>
										)
									}
								})
							}

						</div>
						{/* MODAL DO CARRINHO */}

						<ModalMobile dad="all" />

					</div>
				: 
				<div className='container mobile justify-center gap-32 h-[calc(100vh-3.375rem)]'> 
					<SvgUse id="#icon-shopping" />
                    <p className='font-medium text-lg text-center text-neutral-80'>Ainda não há produtos disponíveis, volte mais tarde!</p>
				</div>
			}
		</div>
	)
}

export default CardapioValido;