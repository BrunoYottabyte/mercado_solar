import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import DesignSystem from './components/DesignSystem';
import AppLayout from './pages/Layout/AppLayout';
import Login from './pages/Login';
import { useAuthContext } from './context/useAuthContext';
import VendasB2B from './pages/VendasB2B';
import ListagemCardapio from './pages/VendasB2B/Cardapio';
import CardapioDirecionado from './pages/VendasB2B/Cardapio/CardapioDirecionado';
import "react-datepicker/dist/react-datepicker.css";
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
import ResultadoFornecedor from './pages/Financeiro/ResultadoFornecedor';
import ContaContabil from './pages/Financeiro/ContaContabil';
import Home from './pages/Home';
import TodosPedidos from './pages/VendasB2B/TodosPedidos';
import Sobre from './pages/Sobre';
import PreProposta from './pages/Pre';
import PedidosOrcamentos from './pages/PedidosOrcamentos';
import Financeiro from './pages/Financeiro';



function App() {
document.body.addEventListener("DOMContentLoaded", () => document.body.classList.add("DOMContentLoaded"))
	const { setNavigateFn, isAutheticated } = useAuthContext();

	const PrivateRoute = ({ children }) => {
		return (
			isAutheticated ? children : <Navigate to='/login' />
		)
	}
	return (

		
		<Routes>
			<Route path='/home' element={<Home />} />
			<Route path='/sobre-nos' element={<Sobre />} />
			<Route path='/pre-proposta' element={<PreProposta />} />
			<Route path='/' element={
				<PrivateRoute>
					<AppLayout />
				</PrivateRoute>
			}>
				<Route index element={<PedidosOrcamentos/>} />
				<Route path='/financeiro' element={<Financeiro/>} />
				{/* <Route path='/started' element={<Home />} />
				<Route path='/trabalheConosco' element={<Home />} />
				<Route path='/historia' element={<Home />} /> */}
				<Route path="/design-system" element={<DesignSystem />} />
				{/* VENDAS B2B */}
				{/* <Route path="/vendas-b2b" element={<VendasB2B />} />
				<Route path='/vendas-b2b/list' element={<ListagemCardapio />} />
				<Route path='/vendas-b2b/list/cardapio-direcionado' element={<CardapioDirecionado />} />
				<Route path='/vendas-b2b/list/cardapio-direcionado/:cardapio' element={<CardapioDirecionado />} />
				<Route path="/vendas-b2b/contas-a-pagar" element={<ContasAPagar/>}/>
				<Route path="/vendas-b2b/contas-a-receber" element={<ContasAReceber/>}/>
				<Route path='/vendas-b2b/relatorio' element={<RelatorioGeral/>} />
				<Route path='/vendas-b2b/resultado-por-cliente' element={<ResultadoPorCliente/>} />
				<Route path='/vendas-b2b/todos-pedidos' element={<TodosPedidos />} /> */}
				{/* OPERACIONAL */}
				{/* <Route path="/operacional/rupturas" element={ <TelaRupturas />} />
				<Route path="/controle-de-rotatividade" element={<ControleRotatividade />}/>
				<Route path="/analise-de-desempenho" element={<AnaliseDesempenho />}/>
				<Route path="/atividades" element={<Atividades />}/>
				<Route path="/lista-escala" element={<ListaEscala />}/>
				<Route path="/escala" element={<Escala />}/>
				<Route path="/escala/:id" element={<Escala />}/> */}

				{/* GESTÃO DE PRODUÇÃO */}
				{/* <Route path="gestao-producao/estoque" element={<Estoque />}/>
				<Route path="gestao-producao/entradas-estoque" element={<EntradasEstoque />}/>
				<Route path="gestao-producao/previsao-controle-estoque" element={<PrevisaoControleEstoque />}/>
				<Route path="gestao-producao/materia-prima" element={<MateriaPrima />}/>
				<Route path="gestao-producao/embalagem" element={<Embalagem />}/>
				<Route path="gestao-producao/produto-comercializaveis" element={<ProdutosComercializaveis />}/>
				<Route path="gestao-producao/calendario" element={<Calendario />}/> */}

				{/* GESTÃO DE PESSOAS */}
				{/* <Route path="gestao-pessoas/colaboradores" element={<Colaboradores />}/>
				<Route path="gestao-pessoas/colaboradores/cadastro-funcionario" element={<CadastroFuncionario />}/>
				<Route path="gestao-pessoas/colaboradores/cadastro-funcionario/:id" element={<CadastroFuncionario />}/> */}

				{/* Administrativo */}
				{/* <Route path="administrativo/grupo-de-despesas" element={<TodasDespesas/>}/>
				<Route path="administrativo/despesas-por-grupo" element={<DespesasGrupo/>}/> */}

				{/* Configuração */}
				{/* <Route path="configuracao/meu-perfil" element={<Perfil/>}/>
				<Route path="configuracao/receitas" element={<Receitas/>}/>
				<Route path="configuracao/receitas/:id" element={<DetalhesReceita />}/> //
				<Route path="configuracao/receitas/cadastrar" element={<CadastrarReceita />}/>
				<Route path="configuracao/receitas/alterar" element={<AlterarReceita />}/>
				<Route path="configuracao/gerador-etiquetas" element={<GeradorEtiquetas />}/>
				<Route path="configuracao/gestao-assinatura" element={<GestaoAssinatura />}/>
				<Route path="configuracao/gestao-assinatura/adicionar-forma-pagamento" element={<AdicionarFormaPagamento />}/> */}
			
				{/* FINANCEIRO */}
				{/* <Route path="financeiro/livro-caixa" element={<LivroCaixa />}/>
				<Route path="financeiro/resultado-por-fornecedor" element={<ResultadoFornecedor />}/>
				<Route path="financeiro/resultado-por-conta-contabil" element={<ContaContabil />}/> */}
			</Route>

		
				{/* <Route path="/vendas-b2b/cliente/cardapio_valido" element={
						<PrivateRoute>
							<CardapioValido />
						</PrivateRoute>
					}  
				/> */}
				{/* <Route path="/vendas-b2b/cliente/cardapio_valido/product/:id" element={
						<PrivateRoute>
							<DetailsProduct />
						</PrivateRoute>
					}  
				/> */}
				{/* <Route path="/vendas-b2b/cliente/cardapio_valido/pedidos" element={
						<PrivateRoute>
							<Pedidos />
						</PrivateRoute>
					}  
				/> */}

				{/* <Route path="/vendas-b2b/cliente/cardapio_valido/pedidos/historico" element={
					<PrivateRoute>
						<Historico  />
					</PrivateRoute>
				} /> */}

				
				

			<Route path="/login" element={!isAutheticated ? <Login /> : <Navigate to='/' />} />

		</Routes>
	)
}

export default App
