import React from 'react';
import {useEffect} from 'react';
import Button from '../../components/DesignSystem/Button';
import {ModalHeader} from '../../components/DesignSystem/Modal';
import {Modal} from '../../components/DesignSystem/Modal/Modal';
import {ModalContent} from '../../components/DesignSystem/Modal/ModalContent';
import {SelectComponent} from '../../components/DesignSystem/SelectComponent';
import SvgUse from '../../components/svg/svgUse';
import {useGlobalContext} from '../../context/GlobalContext';
import {ProductsProvider, useProducts} from './context';
import Item from './components/item';
import ModalCart from '../ProductDatails/components/ModalCart';
import {useProductDetail} from '../ProductDatails/context';

const PainesSolaresContent = () => {
	const {setmodalOpen, modalOpen} = useGlobalContext();
	const {
		products,
		brands,
		categories,
		productsCount,
		filterByBrand,
		filterByCategory,
		clearFilters,
		params,
		filterByPriceGTE,
		filterByPriceLTE,
		orderByPrice,
		getCart,
	} = useProducts();

	useEffect(() => {
		if (modalOpen.open == false || modalOpen.open == null) {
			clearTimeout(window.timeoutpaineissolares);
		}
	}, [modalOpen]);

	const openModal = id => {
		getCart();
		setmodalOpen({open: true, id, position: 'right'});
	};

	return (
		<>
			<Button
				style={{'--cor-1': '#F69F00'}}
				iconID="#icon-eye-ms"
				classe="fixed right-16 bottom-16 btn secondary  justify-center"
				onClick={() => openModal('cartEcommerce')}>
				Ver orçamento
			</Button>
			<Modal className={`w-[37rem]  md2:max-w-[400px] md2:w-[95vw]`}>
				<ModalContent id="filter">
					<ModalHeader
						close={false}
						classeHeader="!bg-white relative z-[999999] title3 sticky top-0 pb-24 border border-transparent border-b-neutral-30">
						<div className="title3 flex w-full justify-between items-center">
							<div className="flex items-center">
								<h3 className="title3">Filtro</h3>
								<button
									type="button"
									style={{'--cor-1': '#F69F00'}}
									className="absolute right-24 top-24 !border !border-neutral-60/20 hover:border-primary-pure  rounded-full"
									onClick={() =>
										setmodalOpen({open: false, id: false, position: 'right'})
									}>
									<SvgUse id="#icon_close_ms" classe="!w-28 !h-28" />
								</button>
							</div>
						</div>
					</ModalHeader>

					<section className="p-24 flex flex-col gap-48 ">
						<div className="flex flex-col gap-32 sticky top-0 self-start items-start overflow-hidden">
							<div>
								<h3 className="headline1">Paines solares</h3>
								<span className="paragraph2 text-neutral-60">
									{productsCount} produto(s)
								</span>
							</div>

							<div>
								<h3 className="headline2 mb-10">Marcas</h3>
								<ul>
									{brands.map(brand => (
										<li
											key={`brandiId-${brand.id}`}
											onClick={() => filterByBrand(brand.id)}>
											<span
												className={`paragraph2 text-neutral-60 cursor-pointer ${
													params.brand === brand.id ? 'font-bold' : ''
												}`}>
												{brand.name}
											</span>
										</li>
									))}
								</ul>
							</div>

							<div>
								<h3 className="headline2 mb-10">Categoria</h3>
								<ul>
									{categories.map(category => (
										<li
											key={`categories-${category.id}`}
											onClick={() => filterByCategory(category.id)}
											className={`paragraph2 text-neutral-60 cursor-pointer`}>
											<span
												className={`paragraph2 text-neutral-60 cursor-pointer ${
													params.category === category.id ? 'font-bold' : ''
												}`}>
												{category.name}
											</span>
										</li>
									))}
								</ul>
							</div>

							<div>
								<h3 className="headline2 mb-10">Preço</h3>
								<ul>
									<li
										className="paragraph2 text-neutral-60 cursor-pointer"
										onClick={() => filterByPriceLTE(100)}>
										Até R$100
									</li>
									<li
										className="paragraph2 text-neutral-60 cursor-pointer"
										onClick={() => filterByPriceGTE(300)}>
										Mais de R$ 300
									</li>
								</ul>
							</div>
							<div>
								<h3
									className="headline2 mb-10 cursor-pointer"
									onClick={() => clearFilters()}>
									Limpar Filtros
								</h3>
							</div>
						</div>
					</section>
				</ModalContent>
				<ModalCart idDinamic="cartEcommerce" />
			</Modal>
			<div className="container py-64">
				<div className="flex items-center justify-between md2:flex-col md2:gap-16 md2:items-start">
					<h3 className="title3 md2:flex md2:justify-between md2:items-center md2:w-full ">
						Criar Orçamento
						<Button
							onClick={() => openModal('filter')}
							classe="hidden md2:flex secondary w-[150px] justify-center border !border-primary-pure/20 hover:!border-primary-pure">
							Filtrar
						</Button>
					</h3>
					<div className="flex items-center gap-8 md2:w-full">
						<p className="paragraph2 md2:w-max whitespace-nowrap">
							Ordenar por:
						</p>
						<SelectComponent
							classe=" !w-[200px] md2:!w-full"
							onChange={e => orderByPrice(e.value)}
							data={[
								{value: 'price', label: 'Mais Baratos'},
								{value: '-price', label: 'Mais Caros'},
							]}
						/>
					</div>
				</div>

				<section className="flex mt-40 gap-[100px] ">
					<div className="md2:hidden flex flex-col gap-32 sticky top-0  self-start items-start overflow-hidden">
						<div>
							<h3 className="headline1">Paines solares</h3>
							<span className="paragraph2 text-neutral-60">
								{productsCount} produto(s)
							</span>
						</div>

						<div>
							<h3 className="headline2 mb-10">Marcas</h3>
							<ul>
								{brands.map(brand => (
									<li
										key={`${brand.id}-brnadId`}
										onClick={() => filterByBrand(brand.id)}>
										<span
											className={`paragraph2 text-neutral-60 cursor-pointer ${
												params.brand === brand.id ? 'font-bold' : ''
											}`}>
											{brand.name}
										</span>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="headline2 mb-10">Categoria</h3>
							<ul>
								{categories.map(category => (
									<li
										key={`${category.id}-categories`}
										onClick={() => filterByCategory(category.id)}
										className="paragraph2 text-neutral-60 cursor-pointer">
										<span
											className={`paragraph2 text-neutral-60 cursor-pointer ${
												params.category === category.id ? 'font-bold ' : ''
											}`}>
											{category.name}
										</span>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="headline2 mb-10">Preço</h3>
							<ul>
								<li
									className="paragraph2 text-neutral-60 cursor-pointer"
									onClick={() => filterByPriceLTE(100)}>
									Até R$100
								</li>
								<li
									className="paragraph2 text-neutral-60 cursor-pointer"
									onClick={() => filterByPriceGTE(300)}>
									Mais de R$ 300
								</li>
							</ul>
						</div>
						<div>
							<h3
								className="headline2 mb-10 cursor-pointer"
								onClick={() => clearFilters()}>
								Limpar Filtros
							</h3>
						</div>
					</div>
					<div className="grid grid-cols-4 md2:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-32 w-full">
						{products.map((item, i) => {
							return <Item {...item} key={i} />;
						})}
					</div>
				</section>
			</div>
		</>
	);
};

const PainesSolares = () => {
	return (
		<ProductsProvider>
			<PainesSolaresContent />
		</ProductsProvider>
	);
};
export default PainesSolares;
