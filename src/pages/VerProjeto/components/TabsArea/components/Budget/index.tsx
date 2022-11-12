import React from "react"
import Button from "../../../../../../components/DesignSystem/Button"
import { useGlobalContext } from "../../../../../../context/GlobalContext";
import { useVerProjeto } from "../../../../context";
import Product from "./components/Product";
import { BudgetProvider, useBudget } from "./context"

const BudgetContent = () => {
  const { setmodalOpen } = useGlobalContext();
  const {budgets} = useBudget()
  const {isOwner} = useVerProjeto()

  const openModal = (id: string) => {
		setmodalOpen({ open: true, id });
	};
  
  
  return (
    <section className="p-24 flex flex-col gap-24">
      {budgets.map(budget => (
        <div className="p-16 bg-neutral-10 rounded-md border border-neutral-100-10" key={`${budget?.id}-tab-panel`}>
          <div className="flex md:flex-col md:gap-16 justify-between items-center mb-16">
            <p className="headline1">
              Orçamento <span className="text-neutral-100">#{budget?.id}</span>
              {
              budget?.status == 'disapproved' ? (
                <span className="bg-alert-error-10-o ml-8 px-10 py-8 rounded-2xl hover:bg-alert-error-10-o hover:text-alert-error hover:border-alert-error border-transparent text-alert-error">
                  Reprovado
                </span>
                ) : (
                  budget?.status === 'approved' ? (
                    <span className="bg-alert-success-10-0 ml-8 px-10 py-8 rounded-2xl hover:bg-alert-success-10-0 hover:text-success hover:border-success border-transparent text-alert-success">
                      Aprovado
                    </span>
                  ) :
                  (
                    <span className="bg-alert-warning-10 ml-8 px-10 py-8 rounded-2xl hover:bg-alert-warning-10 hover:text-alert-warning hover:border-neutral-100 border-transparent text-alert-warning-100">
                      Pendente
                    </span>
                  )
                )
              }
            </p>
            <div className="flex md:px-16 md:!flex-wrap gap-12 items-center">
              <p className="headline2 md:w-full">
                Total:{" "}
                <span className="text-neutral-100">R$ {budget.total}</span>
              </p>
              {budget.status ==="pending" && isOwner &&
                <>
                  <Button
                    style={{ "--cor-1": "#E92C2C" }}
                    iconID="#icon_close_ms"
                    className="btn bg-alert-error-10-o hover:bg-alert-error-10-o hover:text-alert-error hover:border-alert-error border-transparent text-alert-error"
                  >
                    Reprovar
                  </Button>
                  <Button
                    onClick={() => openModal("approved")}
                    iconID="#icon_check_ms"
                    className="btn bg-alert-success-10-0 hover:bg-alert-success-10-0 hover:text-alert-success hover:border-alert-success border-transparent text-alert-success"
                  >
                    Aprovar
                  </Button>
                </>
              }
            </div>
          </div>

          <div className=" bg-white rounded-md">
            {budget?.products.map((product, i) => {
              return (
                <Product {...product} key={`${product.id}-product`}/>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}


const Budget = () => {
  return (
    <BudgetProvider>
      <BudgetContent />
    </BudgetProvider>
  )
}

export default Budget