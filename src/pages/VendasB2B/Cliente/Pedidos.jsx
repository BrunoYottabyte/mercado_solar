import React, { useRef, useState, useEffect } from 'react'
import { ModalMobile, SendModal } from '../../../components/DesignSystem/Modal';
import Header from '../../../components/Header';
import Svg from '../../../components/svg/svg';
import SvgUse from '../../../components/svg/svgUse';
import { useNavigate } from 'react-router-dom';
import Pedido from '../../../components/DesignSystem/Pedido';
import { useCart } from '../../../context/CartContext';

const Pedidos = () => {
	const [sendModal, setSendModal] = useState(false);
	const navigate = useNavigate();
	const { cart } = useCart();

	useEffect(() => {
		pedidoRef.current?.classList.add('active')
	},[])

	const pedidoRef = useRef(null);
	const [nome, setNome] = useState('');
	
	return (
		<div>
			<Svg />
			<Header classeContainer={`header-mobile p-0 border-none h-[3.375rem]`}>
				{/*  bg-primary-90 */}
				<div className='children flex items-center justify-center h-full'
				>
					<div
						onClick={() => navigate(-1)}
					>
						<SvgUse id="#arrow_left_mobile_header" classe={"absolute left-24 top-0 bottom-0 my-auto"} />
					</div>
					<p className='text-lg font-semibold text-white '
						onClick={() => setSendModal(state => !state)}
					>Pedidos</p>
				</div>
			</Header>


			{
				cart && cart.length > 0 ? <div className='container mobile'>
					<div ref={pedidoRef} className='pedidos-container  flex flex-col gap-8 items-center'>
						{
							cart.map((product) => {
								return (
									<Pedido id={product.id} key={product.id} />
								)
							})
						}

						<div className='mt-16 w-full '>
							<p className='font-semibold text-sm tracking-tight mb-4 text-neutral-90'>Com qual nome você deseja salvar este pedido?</p>
							<textarea value={nome} onChange={(e) => {
								e.preventDefault();
								setNome(e.target.value)
							}} placeholder='Ex: Café da manhã para 50 pessoas' className='outline-none w-full h-[76px] p-16 bg-white rounded resize-none border border-neutral-20 '>
							</textarea>
						</div>

					</div>

					<ModalMobile title="Fazer pedido" dad='cart' nome={nome} request={setSendModal} />
					<SendModal id="carrinho" classe="grid place-content-center " animation={sendModal ? 'active' : ''} />
				</div>
					: <div className='container mobile justify-center items-center gap-32 h-[calc(100vh-3.375rem)]'> 
					<SvgUse id="#icon-shopping" />
                    <p className='font-medium text-lg text-center text-neutral-80'>Carrinho vazio</p>
				</div>
			}

		</div>
	)
}

export default Pedidos;