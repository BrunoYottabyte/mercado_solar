import React from "react"
import Button from "../../../../components/DesignSystem/Button"
import { useGlobalContext } from "../../../../context/GlobalContext";
import { ButtonsStepsProvider } from "./context"

const ButtonsStepsContent = () => {
  const { setmodalOpen, modalOpen } = useGlobalContext();

  const openModal = (id: string) => {
		setmodalOpen({ open: true, id });
	};
  return (
    <div className="w-full flex md:flex-col justify-end items-center">
      <Button
        className="btn h-56  mr-14 md2:w-full md:mr-0 md:mb-8"
        svgClass="!w-24 !h-20"
        iconID="#icon_close_ms"
      >
        Recusar
      </Button>

      <Button
        className="btn h-56 md2:w-full"
        svgClass="!w-20 !h-20"
        iconID="#icon_check_ms"
        onClick={() => openModal('feedbackTechnical')}
      >
        Aprovar
      </Button>
    </div>
  )
}

const ButtonsSteps = () => {
  return (
    <ButtonsStepsProvider>
      <ButtonsStepsContent />
    </ButtonsStepsProvider>
  )
}
export default ButtonsSteps