import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {useLocation, useNavigate, Location} from 'react-router-dom';
import {api} from '../../services/api';
import {addressByPostalCode} from '../../utils/addressByPostalCode';
import {MultiplicadorKWP} from '../../utils/constants';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';

import {
  IDadosOrcamentoProviderProps,
  IDadosOrcamentoContextData,
  IStateProps,
  IBudgetRequest,
  IMonthConsumption,
  ICancelReason,
} from './types';
import {useAuthContext} from '../../context/useAuthContext';
import {GLOBAL} from '../../utils/GLOBAL';
import {useGlobalContext} from '../../context/GlobalContext';

const DadosOrcamentoContext = createContext({} as IDadosOrcamentoContextData);

export const DadosOrcamentoProvider: React.FC<IDadosOrcamentoProviderProps> = ({
  children,
}) => {
  const {userId} = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const {setmodalOpen} = useGlobalContext();
  const {showToastify} = GLOBAL;

  const [budgetRequest, setBudgetRequest] = useState<IBudgetRequest>();
  const [address, setAddress] = useState<string>('');

  const [downloadIsLoading, setDownloadIsLoading] = useState(false);
  const downloadRef = useRef<HTMLElement>();
  const [reasonCancel, setReasonCancel] = useState<ICancelReason>();

  const state = location.state as IStateProps;

  const handleNavigate = (path: string, params?: object) => {
    navigate(path, params ?? {});
  };

  const handleDownloadPdf = async () => {
    setDownloadIsLoading(true);

    const element = downloadRef.current;
    if (element) {
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL('image/png');

      const pdf = new jsPDF();
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

      pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('print.pdf');
    }
    setDownloadIsLoading(false);
  };

  const handleAcceptPreBudget = async () => {
    if (!budgetRequest) return;
    api
      .patch(`/budget_request/${budgetRequest.id}/`, {
        budget_request_status: 'approved',
      })
      .then(response => {
        setBudgetRequest({...budgetRequest, budget_request_status: 'approved'});
        setmodalOpen({open: true, id: 'modalThanks'});
      })
      .catch(error => {
        showToastify('Erro ao aprovar a solicitação de orçamento');
        console.log(error);
      });
  };

  const handleRejectPreBudget = async () => {
    if (!budgetRequest) return;
    api
      .patch(`/budget_request/${budgetRequest.id}/`, {
        budget_request_status: 'rejected',
      })
      .then(response => {
        setBudgetRequest({...budgetRequest, budget_request_status: 'rejected'});
        setmodalOpen({open: true, id: 'feedback'});
      })
      .catch(error => {
        showToastify('Erro ao rejeitar a solicitação de orçamento');
        console.log(error);
      });
  };

  const handleFeedback = async () => {
    if (!budgetRequest || !reasonCancel) return;
    api
      .patch(`/budget_request/${budgetRequest.id}/`, {
        reason_cancellation: reasonCancel,
      })
      .then(response => {
        setmodalOpen({open: false, id: 'feedback'});
        showToastify('Feedback enviado com sucesso');
      })
      .catch(error => {
        showToastify('Erro ao enviar o feedback');
        console.log(error);
      });
  };

  useEffect(() => {
    if (!state?.budgetRequestId) {
      navigate('/');
    }

    api
      .get(`/budget_request/${state?.budgetRequestId}/`)
      .then(response => {
        if (response.status !== 200 || !response.data) {
          navigate('/');
        }
        const budgetRequestResponse: IBudgetRequest = response.data;

        if (budgetRequestResponse.month_consumption) {
          const average_consumption =
            Object.values(budgetRequestResponse.month_consumption).reduce(
              (a, b) => Number(a) + Number(b),
              0,
            ) / 12;

          const budgetRequestResponseParser = {
            ...budgetRequestResponse,
            average_consumption: average_consumption * MultiplicadorKWP,
          };
          setBudgetRequest(budgetRequestResponseParser);
          addressByPostalCode(
            budgetRequestResponseParser?.client_postal_code,
          ).then(res => {
            setAddress(res);
          });
        }

        if (budgetRequestResponse.average_consumption) {
          const month_avg =
            Number(budgetRequestResponse.average_consumption) /
            MultiplicadorKWP;
          const month_consumption = {
            january_consumption_avg: month_avg,
            february_consumption_avg: month_avg,
            march_consumption_avg: month_avg,
            april_consumption_avg: month_avg,
            may_consumption_avg: month_avg,
            june_consumption_avg: month_avg,
            july_consumption_avg: month_avg,
            august_consumption_avg: month_avg,
            september_consumption_avg: month_avg,
            october_consumption_avg: month_avg,
            november_consumption_avg: month_avg,
            december_consumption_avg: month_avg,
          };
          const budgetRequestResponseParser = {
            ...budgetRequestResponse,
            month_consumption: month_consumption,
          };
          setBudgetRequest(budgetRequestResponseParser);
          addressByPostalCode(
            budgetRequestResponseParser?.client_postal_code,
          ).then(res => {
            setAddress(res);
          });
        }
      })
      .catch(() => {
        console.log('erro');

        navigate('/');
      });
  }, []);

  return (
    <DadosOrcamentoContext.Provider
      value={{
        budgetRequest,
        handleNavigate,
        address: address,
        downloadRef,
        handleDownloadPdf,
        downloadIsLoading,
        isRepresentative: userId === budgetRequest?.representative,
        isInegrator: userId === budgetRequest?.integrator,
        isOwner: userId === budgetRequest?.user,
        handleAcceptPreBudget,
        handleRejectPreBudget,
        setReasonCancel,
        handleFeedback
      }}>
      {children}
    </DadosOrcamentoContext.Provider>
  );
};

export const useDadosOrcamento = (): IDadosOrcamentoContextData => {
  const context = useContext(DadosOrcamentoContext);

  if (!context)
    throw new Error(
      'useDadosOrcamento must be used within a DadosOrcamentoProvider',
    );

  return context;
};
