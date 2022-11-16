import {MutableRefObject, ReactNode} from 'react';

interface ITableData {
  id: string;
  client_name: string;
  federative_unit: string;
  city: string;
  budget_request_status: string;
  status: string;
  representative: string;
  integrator: string;
  created_at: string;
  updated_at: string;
}

interface ITableProps {
  Header: string | (() => JSX.Element);
  accessor: string;
  Cell?: (v: any) => JSX.Element;
}
interface IPedidosOrcamentoProviderProps {
  children: ReactNode;
}

interface IParams {
  // offset: number
  limit: number;
  search?: string;
}
interface IPedidosOrcamentoContextData {
  data: ITableData[];
  columns: ITableProps[];
  params: IParams;
  setSearch: (value: string) => void;
  contRows: number;
  title: string;
  downloadRef: React.MutableRefObject<HTMLElement | undefined>;
  handleDownloadPdf: () => void;
}

export type {
  IPedidosOrcamentoProviderProps,
  IPedidosOrcamentoContextData,
  ITableData,
  ITableProps,
  IParams,
};
