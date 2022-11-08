import { GLOBAL } from "../../utils/GLOBAL"
import SvgUse from "../svg/svgUse";
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from "../../context/CartContext";


export const ProductCard = ({ product, classe, navigate }) => {

	const { cart, addProductToCart } = useCart();

	const hasProductStorage = cart.find(item => item.id === product.id);
	if(hasProductStorage){
		product = {
			...product,
			quantity: hasProductStorage.quantity
		}
	}
	


	return (
		<div className={` productCard-container ${classe}`} onClick={() => navigate(`/vendas-b2b/cliente/cardapio_valido/product/${product.id}`, { state: { productID: product.id } })}>
			<div className="mb-16 relative">
				{product.url ? <img src={product.url} className="object-contain" /> : <div className="w-[185px] h-[145px] grid place-content-center bg-neutral-30">
					<SvgUse id="#icon-cerva-mobile" classe="w-[34px] h-[56px]" /> </div>}
				<div className=" active:scale-75 transition-transform absolute z-50 right-16 -bottom-[1REM] w-32 h-32 bg-white rounded-lg border border-neutral-30 flex justify-center items-center"
					onClick={(e) => {
						e.stopPropagation();
						addProductToCart(product.id);
					}}
				>
					<SvgUse id={hasProductStorage ? "#favorite-icon-fill" : "#favorite-icon"} classe="w-20 h-20" />
				</div>
			</div>
			{/* Informações do Card */}
			<div className={`flex flex-col gap-4`}>
				<h2 className={` text-sm font-medium tracking-tight text-neutral-80`}>{product.name}</h2>
				{product.discountPrice ? <p className="text-xs text-neutral-70 font-medium tracking-tight line-through">{GLOBAL.currencyBR(GLOBAL.currencyBR(product.price))}</p> : <p className="text-neutral-100 font-bold">{GLOBAL.currencyBR(product.price)}</p>}
				{product.discountPrice && <p className="text-base tracking-tight font-bold text-neutral-100">{GLOBAL.currencyBR(product.discountPrice)}</p>}
			</div>
		</div>
	)
}
