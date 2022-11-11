import React, { createContext, useContext, useEffect } from 'react'
import { api } from '../../services/api'
import Badge from '../../components/DesignSystem/Badge';
import Button from '../../components/DesignSystem/Button';
import { useNavigate } from "react-router-dom";

import {
  IPedidosOrcamentoProviderProps,
  IPedidosOrcamentoContextData,
  ITableData,
  ITableProps,
  IParams
} from './types'

const PedidosOrcamentoContext = createContext({} as IPedidosOrcamentoContextData)

export const PedidosOrcamentoProvider: React.FC<IPedidosOrcamentoProviderProps> = ({
  children
}) => {
  const navigate = useNavigate();
  const [pedidosOrcamento, setPedidosOrcamento] = React.useState<ITableData[]>([])
  const [contRows, setContRows] = React.useState<number>(0)
  const [params, setParams] = React.useState<IParams>({
    limit: 1000,
  })

  const setSearch = (search: string) => {
    setParams({ ...params, search })
  }

  const setCount = (count: number) => {
    setContRows(count)
  }

  const columns: ITableProps[] = [
    {
        Header: () => <div className='w-[96px]'>ID</div>,
        accessor: "id",
    },
    {
        Header: "Pri.Nome",
        accessor: "client_name",
    },
    {
        Header: "UF",
        accessor: "federative_unit",
        // Cell: (v) => moment(v.value).format('DD/MM/YYYY HH:mm')
    },
    {
        Header: "Cidade",
        accessor: "city",
    },
    {
      Header: "Status Pré Proposta",
      accessor: "budget_request_status",
      Cell: (v) => <Badge iconID={''} title={v.value} classeTitle={`font-medium ${v.value === 'Aprovada' ? 'text-alert-success' : v.value === 'Aguardando' ? 'text-alert-warning-100': 'text-alert-error'} `} classe={v.value == 'Aprovada' ? '!text-[#ccc] bg-alert-success-10' : v.value === 'Aguardando' ? 'bg-alert-warning-10' : 'bg-alert-error-10'} />
    },
    {
        Header: "Status",
        accessor: "status",

    },
    {
      Header: "Representante",
      accessor: "representative",
    },
    {
      Header: "Integrador",
      accessor: "integrator",
    },
    {
      Header: () => <p>Data de entrada</p>,
      accessor: "created_at",
      Cell: (v) => <p className='text-center '>{v.value}</p>
    },
    {
      Header: "Ult.Atualização",
      accessor: "updated_at",
    },
    {
      Header: "Ações",
      accessor: "acoes",     
      Cell: (v) => {
        const budgetRequestId = v.row.original.id;
        return (
          <div className='flex px-10 gap-[6px]'>
            
            <Button
              onClick={() => navigate(`/pre-proposta/`, { state: { budgetRequestId } })}
              iconID="#icon-checklist-analise-desempenho"
              svgClass="!w-20 !h-20 absolute left-0 right-0 mx-auto"
              classe="w-32 h-32 relative flex items-center"
            />
            
            <Button  style={{'--cor-1': '#000'}} iconID="#search_icon" svgClass="!w-20 !h-20 absolute left-0 right-0 mx-auto" classe="w-32 h-32 relative flex items-center" />
          </div>
      )}                               
    },
  ];



  useEffect(() => {
    api.get('/budget_request/', {params}).then(response => {
      setPedidosOrcamento(response.data.results)
      setCount(response.data.count ?? 0)

    }).catch(() => null)
  }, [params])
  
  return (
    <PedidosOrcamentoContext.Provider
      value={{
        data: pedidosOrcamento,
        columns,
        setSearch,
        params,
        contRows
      }}
    >
      {children}
    </PedidosOrcamentoContext.Provider>
  )
}

export const usePedidosOrcamento = (): IPedidosOrcamentoContextData => {
  const context = useContext(PedidosOrcamentoContext)

  if (!context)
    throw new Error('usePedidosOrcamento must be used within a PedidosOrcamentoProvider')

  return context
}
