import React from 'react';
import Button from '../../../../../../components/DesignSystem/Button';
import {ModalHeader} from '../../../../../../components/DesignSystem/Modal';
import {Modal} from '../../../../../../components/DesignSystem/Modal/Modal';
import {ModalContent} from '../../../../../../components/DesignSystem/Modal/ModalContent';
import SvgUse from '../../../../../../components/svg/svgUse';
import {useGlobalContext} from '../../../../../../context/GlobalContext';
import {useVerProjeto} from '../../../../context';
import Product from './components/Product';
import {BudgetProvider, useBudget} from './context';

const BudgetContent = () => {
  const {setmodalOpen} = useGlobalContext();
  const {budgets, handleSubmitTicket, handleAcceptBudget, handleRejectBudget} =
    useBudget();
  const {isOwner} = useVerProjeto();

  return (
    <>
      <Modal className={`w-[37rem]  md2:max-w-[400px] md2:w-[95vw]`}>
        <ModalContent id="approved">
          <ModalHeader close={false} classeHeader="bg-white title3" text="">
            <div className="title3 flex  w-full justify-between items-center">
              Orçamento aprovado
              <SvgUse id="#icon_help_ms" classe="!w-24 !h-24" />
            </div>
          </ModalHeader>
          <p className="paragraph1 px-24">
            Saiba como nosso time vai trabalhar a partir de agora:
          </p>

          <div className="mt-40 flex flex-col gap-16 px-24">
            <p className="paragraph1">
              1 - Você receberá o boleto e NF para pagamento.
            </p>
            <p className="paragraph1">
              2 - Assim que efetuar o pagamento, favor anexar no campo
              (comprovante de pagamento).
            </p>
            <p className="paragraph1">
              3 - Nossos engenheiros estão trabalhando no projeto e homologação
              junto a concessionária. Em algumas regiões a concessionária pode
              solicitar documentos adcionais, caso isso aconteça nosso time fará
              contato solicitando.
            </p>

            <p className="paragraph1">
              4 - Após receber o comprovante de pagamento,{' '}
              <span className="text-primary-pure">
                seu kit será separado no prazo de 24h
              </span>
              , e coletado pela transportadora. Por gentileza nos informe assim
              que receber no campo (agendar instalação). Assim que nossa equipe
              receber a solicitação de agendamento, você receberá as datas
              disponíveis para programação da instalação.
            </p>
          </div>

          <main className=" p-24 flex flex-col gap-16 relative">
            <div className="mt-10">
              <span className="w-full h-1 block absolute left-0  bg-neutral-100"></span>
            </div>

            <div className="w-full md:flex-col flex justify-end gap-8">
              <Button
                iconID="#icon_upload_ms"
                svgClass="!w-24 !h-24"
                className={`btn h-48 md:justify-center secondary mt-8 md:w-full`}
                onClick={() => {}}>
                <input
                  type="file"
                  onChange={e =>
                    e.target.files && handleSubmitTicket(e.target.files)
                  }
                  className="w[800px] w-20 h-30 opacity-0 absolute"
                />
                Anexar comprovante
              </Button>
              <Button
                onClick={() => setmodalOpen({open: false, id: 'approved'})}
                className={`btn h-48 md:w-full md:justify-center mt-8`}>
                Agendar Instalação{' '}
                <SvgUse id="#icon_arrow_left" classe="!w-10 !h-10" />
              </Button>
            </div>
          </main>
        </ModalContent>
      </Modal>
      <section className="p-24 flex flex-col gap-24">
        {!budgets.length && (
          <div>
            <h2 className="text-center text-24 font-bold">
              Nenhum orçamento enviado
            </h2>
          </div>
        )}
        {budgets.map(budget => (
          <div
            className="p-16 bg-neutral-10 rounded-md border border-neutral-100-10"
            key={`${budget?.id}-tab-panel`}>
            <div className="flex md:flex-col md:items-start md:gap-16 justify-between items-center mb-16">
              <p className="headline1 md:px-16">
                Orçamento{' '}
                <span className="text-neutral-100">#{budget?.id}</span>
                {budget?.status == 'disapproved' ? (
                  <span className="bg-alert-error-10-o ml-8 px-10 py-8 rounded-2xl hover:bg-alert-error-10-o hover:text-alert-error hover:border-alert-error border-transparent text-alert-error">
                    Reprovado
                  </span>
                ) : budget?.status === 'approved' ? (
                  <span className="bg-alert-success-10-0 ml-8 px-10 py-8 rounded-2xl hover:bg-alert-success-10-0 hover:text-success hover:border-success border-transparent text-alert-success">
                    Aprovado
                  </span>
                ) : (
                  <span className="bg-alert-warning-10 ml-8 px-10 py-8 rounded-2xl hover:bg-alert-warning-10 hover:text-alert-warning hover:border-neutral-100 border-transparent text-alert-warning-100">
                    Pendente
                  </span>
                )}
              </p>
              <div className="flex md:px-16 md:!flex-wrap gap-12 items-center">
                <p className="headline2 md:w-full">
                  Total:{' '}
                  <span className="text-neutral-100">R$ {budget.total}</span>
                </p>
                {budget.status === 'pending' && isOwner && (
                  <>
                    <Button
                      style={{'--cor-1': '#E92C2C'}}
                      iconID="#icon_close_ms"
                      onClick={() => handleRejectBudget(budget.id)}
                      className="btn bg-alert-error-10-o hover:bg-alert-error-10-o hover:text-alert-error hover:border-alert-error border-transparent text-alert-error">
                      Reprovar
                    </Button>
                    <Button
                      onClick={() => handleAcceptBudget(budget.id)}
                      iconID="#icon_check_ms"
                      className="btn bg-alert-success-10-0 hover:bg-alert-success-10-0 hover:text-alert-success hover:border-alert-success border-transparent text-alert-success">
                      Aprovar
                    </Button>
                  </>
                )}
              </div>
            </div>

            <div className=" bg-white rounded-md">
              {budget?.items.map((item, i) => {
                return <Product {...item} key={`${item.id}-item`} />;
              })}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

const Budget = () => {
  return (
    <BudgetProvider>
      <BudgetContent />
    </BudgetProvider>
  );
};

export default Budget;
