import SvgUse from "../svg/svgUse";
import { NavLink, useNavigate } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useEffect, useState } from "react";



//✨ ROUTES VISUALIZAÇAO
const routes = [
	{ path: "/", breadcrumb: "Meus Pedidos e Orçamentos" },
	{ path: "/design-system", breadcrumb: "Design system" },
	{ path: "/vendas-b2b/list", breadcrumb: "Lista do cardápio direcionado" },
	{ path: "/vendas-b2b/list/cardapio-direcionado/:id", breadcrumb: null },
	{ path: "/operacional/rupturas", breadcrumb: 'Tela de rupturas'},
	{ path: "/gestao-producao", breadcrumb: "Gestão de produção"},
	{ path: "/gestao-producao/estoque", breadcrumb: "Estoque"},
	{ path: "/gestao-producao/entradas-estoque", breadcrumb: "Entradas de Estoque"},
	{ path: "gestao-producao/previsao-controle-estoque", breadcrumb: "Previsao e controle de estoque"},

];


const BreadcrumbItem = (b) => {
	const [isScreenSmall, setIsScreenSmall] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 968) {
				if (!isScreenSmall) setIsScreenSmall(true)
			} else {
				setIsScreenSmall(false);
			}
		}

		handleResize();

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)


	}, [])

	const { breadcrumb, match, svg, last } = b;
	if (window.innerWidth <= 968) {
		// console.log('to dentro jajaah')
		return (
			<>
				{svg && last && <SvgUse id={"#icon_arrow_left"} />}
				<div className={`breadcrumb-item ${last ? "active" : "hidden"}`}>
					<NavLink to={match.pathname && match.pathname}>{breadcrumb}</NavLink>
				</div>
			</>
		);
	}
	return (
		<>
			{svg && <SvgUse id={"#icon_arrow_left"} />}
			<div className={`breadcrumb-item ${last ? "active" : "block"}`}>
				<NavLink to={match.pathname && match.pathname}>{breadcrumb}</NavLink>
			</div>
		</>
	);
};

const Breadcrumb = ({ data }) => {
	const breadcrumbs = useBreadcrumbs(routes);
	// console.log(breadcrumbs.length, breadcrumbs);
	return (
		<div className="breadcrumb-content">
			{(breadcrumbs.length > 1) && <ButtonBack />}

			{breadcrumbs.map(({ match, breadcrumb }, index) => {
				return (
					<BreadcrumbItem
						key={match.pathname}
						match={match}
						breadcrumb={breadcrumb}
						svg={index !== 0}
						last={breadcrumbs.length - 1 === index}
					/>
				);
			})}
		</div>
	)

}

const ButtonBack = () => {
	const navigate = useNavigate();

	return (<button className="btn-back" onClick={() => navigate(-1)}><SvgUse classe="rotate-180" id="#icon_arrow_left" /></button>);
};

export default Breadcrumb;
