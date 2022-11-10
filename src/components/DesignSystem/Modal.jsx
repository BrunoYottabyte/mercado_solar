
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useGlobalContext } from "../../context/GlobalContext";
import useFetch from "../../hooks/useFetch";
import { api } from "../../services/api";
import { GLOBAL } from "../../utils/GLOBAL";
import Button from '../DesignSystem/Button'
import SvgUse from "../svg/svgUse";

const Modal = ({ children, aberto = false, width, height }) => {
	const global = useGlobalContext();

	// useEffect(() => {

	// }, [open]);

	return (
		<>
			<div
				style={{ width: width, height: height }}
				className={`modal ${global.modalOpen.open ? "active" : ""}`}
				data-id={global.modalOpen.id ? global.modalOpen.id : null}
			>
				{children}
			</div>
			<div
				className={`modal-fundo ${global.modalOpen.open ? "active" : ""}`}
				onClick={() => global.setmodalOpen({ open: false, id: false })}
			></div>
		</>
	);
};

const ModalHeader = ({ text, close = true, classeHeader, children }) => {
	const global = useGlobalContext();

	return (
		<header className={`modal-header ${classeHeader}`}>
			{text ? text : children}
			{close && (
				<button
					type="button"
					onClick={() => global.setmodalOpen({ open: false, id: false })}
				>
					<SvgUse id="#icon_close" />
				</button>
			)}
		</header>
	);
};

const ModalMobile = ({ classe, classeBtn, nome, title, request, dad, price, ...props}) => {
	const [pedido, setPedido] = useState({
		cardapio_direcionado: null,
		nome: '',
		itempedidob2b_set: []
	})
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	const { currencyBR } = GLOBAL;
	const { reportCart, cart, setCart, cartReport } = useCart();
	let existsProductCart;

	switch (dad) {
		case 'all':
			existsProductCart = reportCart.totalItems > 0;
			break;

		case 'cart':
			existsProductCart = reportCart.totalItems > 0;
			break;

		case 'historico':
			existsProductCart = reportCart.totalItems > 0;
			break;

		default:
			break;
	}

	const modalRef = useRef(null)
	let container;

	useEffect(() => {
		cartReport();
		let idCardapio = null
		if(cart.length > 0) idCardapio =  cart[0].idCardapio;
		setPedido({
			cardapio_direcionado: idCardapio,
			nome: nome,
			itempedidob2b_set: cart.map(item => ({
				produto: {
					id: item.id,
					nome: item.name || 'Sem nome',
					categoria_produto: item.idCategory
				},
				quantidade: item.quantity,
			}))
		})

	}, [cart, nome]);

	const handleRequest = async (fn) => {
		setLoading(true);
		try{
			const { data } = await api.post('/api/producao/pedidos_b2b/', pedido);
			console.log('responsee',data);
			fn(state => !state);
			setTimeout(() => {
				setCart([]);
				localStorage.clear('@mr.cart');
				navigate('/vendas-b2b/cliente/cardapio_valido/')
			}, 5000)
		}catch(err){
			const messages = GLOBAL.clearFeedbackErrorRequestDuplicated(err.response?.data);
			messages.map(message => GLOBAL.showToastify(message))
		}finally{
			setLoading(false)
		}
	}

	useEffect(() => {
		container = document.querySelector('.container.mobile');
		setTimeout(() => {

			container.style?.setProperty("--height", modalRef.current?.scrollHeight + "px");
			if (reportCart.totalItems > 0) {
				container.classList.add('modal-mobile-active')
				return
			}
			container.classList.remove('modal-mobile-active')
		}, 300)

		return () => {
			container.classList.remove('modal-mobile-active')
		}
	}, [cart])


	useEffect(() => {
		if (existsProductCart || price) {
			modalRef.current?.classList.add('active');
		} else {
			modalRef.current?.classList.remove('active');
		}
	}, [existsProductCart])

	return (
		<div ref={modalRef} className={`modal-mobile-container ${classe ||''} ${price ? 'active': ''}`} {...props}>

			{dad === "all" || dad === "cart" ? (
				<div className="header mb-16">
					<p className="text-sm tracking-tight font-semibold ">Total</p>
					{/* text-neutral-80 */}
					<p className="text-lg font-semibold  -tracking-[0.03em] text-neutral-100" >{currencyBR(reportCart.amount)}</p>
				</div>
			) : ""}
			<Button classe={`w-full grid place-content-center ${classeBtn} ${loading ? "is-loading btn" : ""}`}
				onClick={(e) => {
					if (request) {
						handleRequest(request);
					} else {
						navigate('/vendas-b2b/cliente/cardapio_valido/pedidos')
					}
				}}

				disabled={loading}
			>
				{
					!loading && <p>{title ? title : 'Ir para o carrinho'}</p>
				}
				{dad === 'historico' && <p>{price}</p>}
			</Button>
		</div>
	)
}

const ModalDetail = ({ classe, priceOrder }) => {
	const { currencyBR } = GLOBAL;
	const modalRef = useRef();
	const location = useLocation();
	const navigate = useNavigate();
	const { cart, removeProduct, updateProductAmount } = useCart();
	const [currentProduct, setCurrentProduct] = useState({});

	const updatedProduct = cart.find(item => item.id == location.pathname.split('/').at(-1));

	useEffect(() => {
		if (updatedProduct) return setCurrentProduct(updatedProduct);
	}, [cart])


	const handleUpdateAmountLocal = (operator) => {
		const newAmount = eval(`${currentProduct.quantity} ${operator} 1`);
		if (newAmount === 0) {
			removeProduct(currentProduct.id)
			return;
		}

		const newCurrent = {
			...currentProduct,
			quantity: newAmount
		};
		setCurrentProduct(newCurrent);
	}



	const existsProductCart = updatedProduct;

	if (existsProductCart || priceOrder) {
		modalRef.current?.classList.add('active');
	} else {
		modalRef.current?.classList.remove('active');
	}

	return (
		<div ref={modalRef} className={`modal-mobile-container ${classe || ''}`}>
			<div className="flex gap-8">
				{
					!priceOrder && (
						<div className="flex justify-between h-48 px-12 gap-20 rounded border border-neutral-20 items-center">

							{/* REMOVENDO QUANTIDADE LOCALMENTE */}
							<div onClick={() => handleUpdateAmountLocal('-')}>
								<SvgUse id="#icon-remove" classe="w-20 h-20" />
							</div>

							<p className="text-lg text-neutral-80 font-medium">{currentProduct && currentProduct.quantity}</p>

							{/* ADICIONANDO QUANTIDADE LOCALMENTE */}
							<div onClick={() => handleUpdateAmountLocal('+')}>
								<SvgUse id="#icon-add" classe="w-20 h-20" />
							</div>
						</div>
					)
				}
				<Button classe="flex-1 h-48 justify-between"
					onClick={() => {
						updateProductAmount(currentProduct.id, currentProduct.quantity);
						navigate('/vendas-b2b/cliente/cardapio_valido/pedidos')
					}}
				>
					<p className="text-sm font-semibold">Adicionar pedido</p>

					<p className="text-sm font-semibold">
						{currentProduct.discountPrice > 0 ? currencyBR(currentProduct.quantity * currentProduct.discountPrice) : currencyBR(currentProduct.quantity * currentProduct.price)}
					</p>
				</Button>
			</div>

		</div>
	)

}

const  SendModal = ({id, classe, animation, btns, title, classeContainer }) => {
	const {setCart} = useCart();
	const navigate = useNavigate();
	const handleClickOutsideContent = () => {
		console.log('desliguei')
		document.querySelector('.sendmodal-mobile-overlay').classList.remove('active');
		document.querySelector('.sendmodal-mobile-container').classList.remove('active');
			if(id == 'carrinho'){
				setCart([]);
				localStorage.clear('@mr.cart');
				navigate('/vendas-b2b/cliente/cardapio_valido/');
			}
	}

	return (
		<>
			<div onClick={handleClickOutsideContent} className={`sendmodal-mobile-overlay  ${animation} fixed left-0 top-0 z-[99] w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.65)] ${classeContainer}`}>
			</div>
			<div className={`sendmodal-mobile-container ${classe} ${animation}  fixed left-0 bottom-0 z-[999] w-full  h-[161px] rounded-t-lg bg-white`}>
				<span className="w-[40px] h-4 bg-neutral-50 absolute top-8 rounded-lg right-0 left-0 mx-auto"></span>
				<SvgUse id="#icon-check-mobile" classe="w-[40px] h-[40px] mx-auto" />
				<h1 className="mt-16 text-2xl font-medium tracking-tight text-center">
					{title ? title : 'Seu pedido foi confirmado'}
				</h1>
				{btns && btns()}
			</div>
		</>
	)
}



const ModalCustom = ({children, classe}) => {
	return(
		<div className={`modal-mobile-container ${classe ||''}`}>
			{children}
		</div>
	)
}


const SendModalCustom = ({children, classe, handleClickOutsideContent, classeContainer, animation}) => {
		return(
			<>
			<div onClick={handleClickOutsideContent} className={`sendmodal-mobile-overlay ${animation} fixed left-0 top-0 z-[99] w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.65)] ${classeContainer}`}>
			</div>
			<div className={`sendmodal-mobile-container ${classe} ${animation} fixed left-0 bottom-0 z-[999] w-full  h-[161px] rounded-t-lg bg-white`}>
				{children}
			</div>
		</>
		)
}




export { Modal, ModalHeader, ModalMobile, SendModal, ModalDetail, ModalCustom, SendModalCustom };
