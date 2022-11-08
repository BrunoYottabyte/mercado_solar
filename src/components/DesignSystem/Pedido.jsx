import { memo, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { GLOBAL } from "../../utils/GLOBAL";
import SvgUse from "../svg/svgUse";


const Pedido = ({ id }) => {
	const navigate = useNavigate();
	const { cart, updateProductAmount, removeProduct, queueItemsRemove, setQueueItemsRemove } = useCart();
	const [productCurrent, setProductCurrent] = useState(() => {
		if (id) {
			const product = cart.find(product => product.id === id);
			if (product) return product;
			return {}
		}
	});

	useEffect(() => {
		if (id) {
			const product = cart.find(product => product.id === id);
			if (product) setProductCurrent(product);
			return;
		}
	}, [cart])

	const pedidoRef = useRef(null);

	const addOrRemove = (amount, operator) => {
		let newAmount = eval(amount + `${operator}` + 1);
		if (newAmount === 0) {
			pedidoRef.current.classList.add('active');

			setTimeout(() => {
				updateProductAmount(productCurrent.id, newAmount)
			}, 1500)

			return;
		}

		updateProductAmount(productCurrent.id, newAmount)
	}

	
	const handleRemoveProduct = () => {
		pedidoRef.current.classList.add('active');
		setQueueItemsRemove(prev => [...prev, productCurrent.id]);
		let arrRemoved = [...queueItemsRemove, productCurrent.id];
		setTimeout(() => {
			removeProduct(productCurrent.id, arrRemoved);
		}, 1500)
	}
	return (
		<div ref={pedidoRef} className="pedido-container h-[76px] w-[330px]">
			<div className="flex gap-8 items-end" onClick={() => navigate(`/vendas-b2b/cliente/cardapio_valido/product/${productCurrent.id}`)}>
				{productCurrent.url ? <img src={productCurrent.url} alt="image_product" className="rounded-lg h-[60px] max-w-[60px] w-[60px] my-auto" /> : <div className="rounded-lg h-[60px] w-[60px] max-w-[60px] grid place-content-center bg-neutral-30">	<SvgUse id="#icon-cerva-mobile" classe="w-[34px] h-[56px]" /> </div>}
				<div>
					<p className="font-medium text-sm tracking-tight text-neutral-80">{productCurrent.name}</p>
					{productCurrent.discountPrice ? <p className="text-xs text-neutral-70 font-medium tracking-tight line-through">{GLOBAL.currencyBR(productCurrent.price)}</p> : <p className="text-neutral-100 font-semibold text-sm">{GLOBAL.currencyBR(productCurrent.price)}</p>}
					{productCurrent.discountPrice && <p className="font-semibold text-sm tracking-tighter text-neutral-100" >{GLOBAL.currencyBR(productCurrent.discountPrice)}</p>}
				</div>
			</div>

			<div className="flex flex-col items-end justify-between">

				{/* REMOVENDO PRODUTO DO LOCALSTORAGE */}
				<span onClick={handleRemoveProduct}>
					<SvgUse id="#icon-close-pedidos" classe="w-24 h-24" />
				</span>

				<div className="flex justify-between h-28 px-12 gap-20 rounded border border-neutral-20 items-center">

					{/* REMOVENDO QUANTIDADE */}
					<div onClick={() => { addOrRemove(productCurrent.quantity, '-') }}>
						<SvgUse id="#icon-remove" classe="w-20 h-20" />
					</div>

					<p className="text-lg text-neutral-80 font-medium">{productCurrent.quantity}</p>

					{/* ADICIONANDO QUANTIDADE */}

					<div onClick={() => { addOrRemove(productCurrent.quantity, '+') }}>
						<SvgUse id="#icon-add" classe="w-20 h-20" />
					</div>

				</div>

			</div>
		</div>
	)
}

const ItemsPedidoPure = ({ item, priceChanged, notItemOrder, existOne}) => {
	const { menulistAndCategories } = useCart();
	const [changePrice, setChangePrice] = useState(false);
	let productExists = menulistAndCategories.products?.find(product => product.id == item.produto.id);
	let notItem = false;
	let priceUpdated;
		useEffect(() => {
			if(productExists){
				setChangePrice(GLOBAL.currencyBR(item.valor_unitario) !== GLOBAL.currencyBR(productExists?.price));
				priceUpdated = item.valor_unitario * item.quantidade;
				existOne(true)
			}else{
				notItem = true;
			}
			if (changePrice) priceChanged(true);
			if (notItem) notItemOrder(true)
		}, [])
	return (
		<div className={`flex justify-between items-center py-8 border-transparent border border-b-neutral-30 h-64 max-h-64 `}>
			<div className="flex items-center gap-8">
				<img className={`w-48 h-48 rounded-md ${!productExists ? 'opacity-50': ''}`} src="https://blog.mundoverde.com.br/wp-content/uploads/2016/07/PA%CC%83O-INTEGRAL-DE-CHIA-COM-GERGELIM.jpg" alt="image_descritiva" />
				<div className={`${!productExists ? '!text-neutral-60': ''}`}>
					<h1 className={` text-base font-medium tracking-tighter -mb-4 text-neutral-80 ${!productExists ? '!text-neutral-60': ''}`}>{item.produto.nome || 'Produto excluído'}</h1>
					<span className={`text-xs text-neutral-70 font-medium ${!productExists ? '!text-neutral-60': ''}`}>{item.quantidade} unidades</span>
				</div>
			</div>
			{
				!productExists ? 
					<div className="text-right ">
						<p className="text-xs tracking-tighter font-semibold text-neutral-60">{GLOBAL.currencyBR(item.valor_item)}</p>
						<p className="text-sm tracking-tighter font-semibold text-neutral-60">Produto indisponível</p>
					</div>
					:
					changePrice ?
						<div className="text-right">
							<p className="text-xs tracking-tighter font-semibold text-neutral-60">{GLOBAL.currencyBR(item.valor_item)}</p>
							<p className="text-sm tracking-tighter font-semibold text-neutral-100">{GLOBAL.currencyBR(productExists?.price)}</p>
						</div>
						:
						<p className="text-sm tracking-tighter font-semibold text-neutral-100">{GLOBAL.currencyBR(item.valor_item)}</p>
			}
		</div>
	)
}

export const ItemsPedido = memo(ItemsPedidoPure, (prevProps, nextProps) => {
	return Object.is(prevProps.item, nextProps.item);
  })

export default Pedido