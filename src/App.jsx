import React from 'react';
import {Routes, Route, Navigate, useLocation} from 'react-router-dom';
import DesignSystem from './components/DesignSystem';
import AppLayout from './pages/Layout/AppLayout';
import Login from './pages/Login';
import {useAuthContext} from './context/useAuthContext';
import VendasB2B from './pages/VendasB2B';
import ListagemCardapio from './pages/VendasB2B/Cardapio';
import CardapioDirecionado from './pages/VendasB2B/Cardapio/CardapioDirecionado';
import 'react-datepicker/dist/react-datepicker.css';
import CardapioValido from './pages/VendasB2B/Cliente';
import DetailsProduct from './pages/VendasB2B/Cliente/DetailsProduct';
import Pedidos from './pages/VendasB2B/Cliente/Pedidos';
import Historico from './pages/VendasB2B/Cliente/Historico';
// import Operacional from './pages/Operacional';
import TelaRupturas from './pages/Operacional/TelaRupturas';
import ControleRotatividade from './pages/Operacional/ControleRotatividade';
import AnaliseDesempenho from './pages/Operacional/AnaliseDesempenho';
import Escala from './pages/Operacional/Escala';
import Atividades from './pages/Operacional/Atividades';
import Estoque from './pages/Operacional/GestaoProducao/Estoque';
import EntradasEstoque from './pages/Operacional/GestaoProducao/EntradasEstoque';
import PrevisaoControleEstoque from './pages/Operacional/GestaoProducao/PrevisaoControleEstoque';
import MateriaPrima from './pages/Operacional/GestaoProducao/MateriaPrima';
import Embalagem from './pages/Operacional/GestaoProducao/Embalagem';
import ProdutosComercializaveis from './pages/Operacional/GestaoProducao/ProdutosComercializaveis';
import Calendario from './pages/Operacional/GestaoProducao/Calendario';
import Colaboradores from './pages/GestaoPessoas/Colaboradores';
import CadastroFuncionario from './pages/GestaoPessoas/Colaboradores/CadastroFuncionario';
import ListaEscala from './pages/Operacional/Escala/ListaEscala';
import TodasDespesas from './pages/Administrativo';
import DespesasGrupo from './pages/Administrativo/despesasPorGrupo';
import ContasAPagar from './pages/VendasB2B/ContasAPagar';
import ContasAReceber from './pages/VendasB2B/ContasAReceber';
import RelatorioGeral from './pages/VendasB2B/RelatorioGeral';
import ResultadoPorCliente from './pages/VendasB2B/ResultadoPorCliente';
import Perfil from './pages/Configuracao/Perfil';
import Receitas from './pages/Configuracao/Receitas';
import DetalhesReceita from './pages/Configuracao/Receitas/detalhes';
import CadastrarReceita from './pages/Configuracao/Receitas/cadastrar';
import AlterarReceita from './pages/Configuracao/Receitas/alterar';
import GeradorEtiquetas from './pages/Configuracao/GeradorEtiquetas';
import GestaoAssinatura from './pages/Configuracao/GestaoAssinaturas';
import AdicionarFormaPagamento from './pages/Configuracao/GestaoAssinaturas/AdicionarFormaPagamento';
import LivroCaixa from './pages/Financeiro/LivroCaixa';
// import ResultadoFornecedor from './pages/Financeiro/ResultadoFornecedor';
// import ContaContabil from './pages/Financeiro/ContaContabil';
import Home from './pages/Home';
import TodosPedidos from './pages/VendasB2B/TodosPedidos';
import Sobre from './pages/Sobre';
import PreProposta from './pages/Pre';
import PedidosOrcamentos from './pages/PedidosOrcamentos';
// import Financeiro from './pages/Financeiro';
import CriarConta from './pages/CriarConta';
import DadosOrcamento from './pages/DadosOrcamento';
import VerProjeto from './pages/VerProjeto';
import PainesSolares from './pages/PainesSolares';
import DetailsPaineis from './pages/PainesSolares/detailsPaineis';
import ProductDatails from './pages/ProductDatails';
import Integrator from './pages/Integrator';

function App() {
	document.body.addEventListener('DOMContentLoaded', () =>
		document.body.classList.add('DOMContentLoaded'),
	);
	const {setNavigateFn, isAutheticated} = useAuthContext();

	const PrivateRoute = ({children}) => {
		return isAutheticated ? children : <Navigate to="/login" />;
	};

	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/sobre-nos" element={<Sobre />} />
			<Route path="/criar-conta" element={<CriarConta />} />

			<Route
				path="/"
				element={
					<PrivateRoute>
						<AppLayout />
					</PrivateRoute>
				}>
				<Route index element={<PedidosOrcamentos />} />
				<Route
					path="/pre-proposta/:budgetRequestId"
					element={<PreProposta />}
				/>
				<Route
					path="/dados-de-orcamento/:budgetRequestId"
					element={<DadosOrcamento />}
				/>
				<Route path="/ver-projeto/:budgetRequestId/" element={<VerProjeto />} />
				<Route path="/paines-solares" element={<PainesSolares />} />
				<Route path="/paines-solares/:id" element={<ProductDatails />} />
				<Route path="/livro-caixa" element={<LivroCaixa />} />
				<Route path="/design-system" element={<DesignSystem />} />
				<Route path="/meu-integrador" element={<Integrator />} />
			</Route>

			<Route
				path="/login"
				element={!isAutheticated ? <Login /> : <Navigate to="/" />}
			/>
		</Routes>
	);
}

export default App;
