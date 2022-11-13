import SvgUse from '../svg/svgUse';
import Button from '../DesignSystem/Button';
import 'moment/locale/pt-br';
import moment from 'moment/moment';
import {GLOBAL} from '../../utils/GLOBAL';

moment.locale('pt-br');

const Card = ({children, classe, ...props}) => {
	return (
		<div className={`card ${classe || ''}  md2:mx-auto`} {...props}>
			{children}
		</div>
	);
};

const CardHistorico = ({
	id,
	name,
	date,
	price,
	description,
	readyOrder,
	addOrderToCard,
	loading,
	order,
}) => {
	const sending = id == order.id && loading;
	return (
		<div
			onClick={() => readyOrder(id)}
			className="cardHistorico-container w-full h-[150px] bg-white rounded-md p-12 mb-8 flex flex-col gap-16 drop-shadow-[0px_2px_48px_#0000000A]">
			{/* Header */}
			<div>
				<div className="flex justify-between items-center mb-12">
					<div>
						<h1 className="font-semibold text-sm tracking-tight ">{name}</h1>
						{/* text-neutral-80 */}
						<p className="font-medium text-xs tracking-tight text-neutral-70">
							{description}
						</p>
					</div>
					<span className="">
						<SvgUse id="#icon_arrow_left" classe="w-14 h-14" />
					</span>
				</div>
				<div className="flex justify-between">
					<p className="tracking-tight text-sm font-semibold">
						{moment(date).format('DD[/]MMMM[,]yyyy')}
					</p>
					{/* text-neutral-80  */}
					<h2 className="text-sm font-bold text-neutral-100 tracking-[-0.03em]">
						{GLOBAL.currencyBR(price)}
					</h2>
				</div>
			</div>
			{/* Footer (btns) */}
			<div className=" footer pt-16  border border-transparent border-t-neutral-20">
				<Button
					classe={`secondary w-full h-[40px] ${
						sending ? 'btn is-loading' : ''
					}`}
					onClick={e => {
						e.stopPropagation();
						addOrderToCard(id);
					}}>
					<p className="mx-auto">Adicionar ao carrinho</p>
				</Button>
			</div>
		</div>
	);
};

export {Card, CardHistorico};
