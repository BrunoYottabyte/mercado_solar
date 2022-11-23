import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {api} from '../../services/api';
import Badge from '../../components/DesignSystem/Badge';
import Button from '../../components/DesignSystem/Button';
import {useNavigate} from 'react-router-dom';
import {format} from 'date-fns';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';

import {
  IPedidosOrcamentoProviderProps,
  IPedidosOrcamentoContextData,
  ITableData,
  ITableProps,
  IParams,
} from './types';
import {useAuthContext} from '../../context/useAuthContext';

const PedidosOrcamentoContext = createContext(
  {} as IPedidosOrcamentoContextData,
);

export const PedidosOrcamentoProvider: React.FC<
  IPedidosOrcamentoProviderProps
> = ({children}) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('Pedidos de orçamento');
  const {userType} = useAuthContext();

  const downloadRef = useRef<HTMLElement>();
  const [pedidosOrcamento, setPedidosOrcamento] = React.useState<ITableData[]>(
    [],
  );
  const [contRows, setContRows] = React.useState<number>(0);
  const [params, setParams] = React.useState<IParams>({
    limit: 1000,
  });

  const setSearch = (search: string) => {
    setParams({...params, search});
  };

  const setCount = (count: number) => {
    setContRows(count);
  };

  const handleDownloadPdf = async () => {
    const element = downloadRef.current;
    if (element) {
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'l',
      });
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

      pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('pre-proposta.pdf');
    }
  };

   const StatusCurrentTable = (step) => {
          let stepAtual = '';
            switch(step) {
            case 'budget':
              stepAtual = 'Orçamento'
              break;
            
            case 'creation':
              stepAtual = 'Criação'
              break;
  
            case 'first_contact':
            stepAtual = 'Primeiro Contato'
              break;
            case 'technical_visit':
            stepAtual = 'Visita Técnica'
             break;
        
            case 'budget_available':
            stepAtual = 'Orçamento Disponibilizado'
              break;
            case 'budget_accepted':
            stepAtual = 'Orçamento aceito'
              break;
            case 'payment_made':
            stepAtual = 'Orçamento Aprovado'
              break;
            default:
              break;
          }
          return stepAtual;
        }

  const columns: ITableProps[] = [
    {
      Header: () => <div className="w-[96px]">ID</div>,
      accessor: 'id',
    },
    {
      Header: 'Pri.Nome',
      accessor: 'client_name',
      Cell: v => <p className="text-center ">{v.value.split(' ')[0] ?? ''}</p>,
    },
    {
      Header: 'UF',
      accessor: 'federative_unit',
    },
    {
      Header: 'Cidade',
      accessor: 'city',
    },
    {
      Header: 'Status Pré Proposta',
      accessor: 'budget_request_status',
      Cell: v => (
        <Badge
          iconID={''}
          title={v.value}
          classeTitle={`font-medium ${
            v.value === 'Aprovada'
              ? 'text-alert-success'
              : v.value === 'Aguardando'
              ? 'text-alert-warning-100'
              : 'text-alert-error'
          } `}
          classe={
            v.value == 'Aprovada'
              ? '!text-[#ccc] bg-alert-success-10'
              : v.value === 'Aguardando'
              ? 'bg-alert-warning-10'
              : 'bg-alert-error-10'
          }
        />
      ),
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: v => {

        return (
          <Badge
            iconID={''}
            title={StatusCurrentTable(v.row.original.current_step)}
            classeTitle={'text-alert-success'}
            classe={`bg-alert-success-10`}
          />
        );
      },
    },
    {
      Header: 'Representante',
      accessor: 'representative',
    },
    {
      Header: 'Integrador',
      accessor: 'integrator',
    },
    {
      Header: () => <p>Data de entrada</p>,
      accessor: 'created_at',
      Cell: v => (
        <p className="text-center ">
          {format(new Date(v.value), 'dd/MM/yyyy')}
        </p>
      ),
    },
    {
      Header: 'Ult.Atualização',
      accessor: 'updated_at',
      Cell: v => (
        <p className="text-center ">
          {format(new Date(v.value), 'dd/MM/yyyy')}
        </p>
      ),
    },
    {
      Header: 'Ações',
      accessor: 'acoes',
      Cell: v => {
        const budgetRequestId = v.row.original.id;
        const budgetRequestStatus = v.row.original.budget_request_status;

        return (
          <div className="flex px-10 gap-[6px]">
            <Button
              onClick={() => navigate(`/pre-proposta/${budgetRequestId}/`)}
              iconID="#icon-checklist-analise-desempenho"
              svgClass="!w-20 !h-20 absolute left-0 right-0 mx-auto"
              classe="w-32 h-32 relative flex items-center"
            />

            <Button
              data-popover-target="popover-default"
              onClick={() => navigate(`/ver-projeto/${budgetRequestId}/`)}
              style={{'--cor-1': '#000'}}
              iconID="#search_icon"
              disabled={budgetRequestStatus !== 'Aprovada'}
              svgClass="!w-20 !h-20 absolute left-0 right-0 mx-auto"
              classe="w-32 h-32 relative flex items-center"
            />
          </div>
        );
      },
    },
  ];


    
  

  useEffect(() => {
    api
      .get('/budget_request/', {params})
      .then(response => {
        const pedidosResponseParser = response.data.results.map(
          (pedido: ITableData): ITableData => {
            return {
              ...pedido,
              created_at: pedido.created_at.split('T')[0],
              updated_at: pedido.updated_at.split('T')[0],
              budget_request_status:
                pedido.budget_request_status === 'approved'
                  ? 'Aprovada'
                  : pedido.budget_request_status === 'pending'
                  ? 'Aguardando'
                  : 'Reprovada',
              status:
                pedido.status === 'approved'
                  ? 'Aprovada'
                  : pedido.status === 'pending'
                  ? 'Em Progresso'
                  : 'Reprovada',
              
            };
          },
        );
        
       
 
        setPedidosOrcamento(pedidosResponseParser);
        setCount(response.data.count ?? 0);
      })
      .catch(() => null);
  }, [params]);

  useEffect(() => {
    if (!userType) return;

    if (userType === 'representative' || userType === 'integrator') {
      setTitle('Minhas Oportunidades');
    }
    if (userType === 'user') {
      setTitle('Meus Pedidos de Orçamento');
    }
    if (userType === 'admin') {
      setTitle('Todas as solicitações de orçamento');
    }
  }, [userType]);

  console.log(pedidosOrcamento);

  return (
    <PedidosOrcamentoContext.Provider
      value={{
        data: pedidosOrcamento,
        columns,
        setSearch,
        params,
        contRows,
        title,
        downloadRef,
        handleDownloadPdf,
      }}>
      {children}
    </PedidosOrcamentoContext.Provider>
  );
};

export const usePedidosOrcamento = (): IPedidosOrcamentoContextData => {
  const context = useContext(PedidosOrcamentoContext);

  if (!context)
    throw new Error(
      'usePedidosOrcamento must be used within a PedidosOrcamentoProvider',
    );

  return context;
};
